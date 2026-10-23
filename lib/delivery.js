/**
 * Server-side delivery charge validation for VASEVINE
 * - Delhi PIN codes (starts with 11 or state Delhi) -> ₹300
 * - Other valid Indian PIN codes (6 digits starting 1-9) -> ₹500
 * - Invalid PIN codes -> checkout cannot proceed
 */
async function validateDeliveryPincode(pincode) {
  const cleanPin = String(pincode || '').trim();
  if (!/^[1-9][0-9]{5}$/.test(cleanPin)) {
    return {
      isValid: false,
      error: 'Please enter a valid 6-digit Indian PIN code.'
    };
  }

  // Quick prefix check: PIN codes starting with '11' are National Capital Territory of Delhi
  const isDelhiPrefix = cleanPin.startsWith('11');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
        const po = data[0].PostOffice[0];
        const state = (po.State || '').trim();
        const city = (po.District || po.Name || '').trim();
        const isDelhi = isDelhiPrefix || state.toLowerCase() === 'delhi';

        return {
          isValid: true,
          pincode: cleanPin,
          city,
          state,
          isDelhi,
          deliveryCharge: isDelhi ? 300 : 500
        };
      } else {
        return {
          isValid: false,
          error: 'Invalid PIN code. Please enter a recognized Indian postal code.'
        };
      }
    }
  } catch (err) {
    // If postal API is temporarily slow/down, fallback safely to standard Indian pin rules
    console.warn('Postal API fallback for PIN:', cleanPin, err.message);
  }

  // Fallback if network was slow: 6-digit pin starting with 1-9 is valid Indian pin
  return {
    isValid: true,
    pincode: cleanPin,
    city: isDelhiPrefix ? 'New Delhi' : 'India',
    state: isDelhiPrefix ? 'Delhi' : 'India',
    isDelhi: isDelhiPrefix,
    deliveryCharge: isDelhiPrefix ? 300 : 500
  };
}

module.exports = {
  validateDeliveryPincode
};
