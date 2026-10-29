/**
 * VASEVINE — Centralized Size-Based Pricing Service
 *
 * Rules:
 * - XS, S, M, L, XL, 2XL (and XXL): Base price (NO surcharge)
 * - 3XL and above (3XL, 4XL, 5XL, XXXL, etc.): Base price + Collection Surcharge
 *
 * Collection Surcharges:
 * - Cord Set:    +₹3,000
 * - Gown:        +₹4,000
 * - Lehenga:     +₹7,000
 * - Saree:       +₹5,000
 * - Short Dress: +₹3,000
 * - Other/Undefined: ₹0
 */

const COLLECTION_SURCHARGES = {
  // Cord Set (+₹3,000)
  'cordset': 3000,
  'cord-set': 3000,
  'cord set': 3000,
  'cord_set': 3000,

  // Gown (+₹4,000)
  'gown': 4000,
  'gowns': 4000,

  // Lehenga (+₹7,000)
  'lehenga': 7000,
  'lehengas': 7000,

  // Saree / Draped Saree (+₹5,000)
  'draped-saree': 5000,
  'draped saree': 5000,
  'draped_saree': 5000,
  'saree': 5000,
  'sarees': 5000,

  // Short Dress / Dress (+₹3,000)
  'dress': 3000,
  'dresses': 3000,
  'short-dress': 3000,
  'short dress': 3000,
  'short_dress': 3000
};

/**
 * Determine if a size is strictly above 2XL (starts at 3XL / XXXL)
 * 2XL and XXL have NO surcharge.
 */
function isSizeAbove2XL(size) {
  if (!size) return false;
  const s = String(size).trim().toUpperCase();

  // Explicit non-surcharged sizes (<= 2XL)
  if (['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXS', 'FREE', 'FS'].includes(s)) {
    return false;
  }

  // Check 3XL, 4XL, 5XL, 6XL, etc.
  const numXlMatch = s.match(/^(\d+)XL$/);
  if (numXlMatch) {
    const num = parseInt(numXlMatch[1], 10);
    return num >= 3;
  }

  // Check XXXL, XXXXL, etc. (3 or more X's)
  const xMatch = s.match(/^(X+)L$/);
  if (xMatch) {
    return xMatch[1].length >= 3;
  }

  return false;
}

/**
 * Retrieve applicable collection surcharge for a category
 */
function getCollectionSurcharge(category) {
  if (!category) return 0;
  const key = String(category).trim().toLowerCase();
  return COLLECTION_SURCHARGES[key] || 0;
}

/**
 * Calculate final authoritative unit price for a product & size
 */
function calculateProductPrice(product, selectedSize) {
  if (!product) return 0;
  const basePrice = Number(product.price) || 0;
  if (!isSizeAbove2XL(selectedSize)) {
    return basePrice;
  }
  const surcharge = getCollectionSurcharge(product.category);
  return basePrice + surcharge;
}

module.exports = {
  COLLECTION_SURCHARGES,
  isSizeAbove2XL,
  getCollectionSurcharge,
  calculateProductPrice
};
