const { Resend } = require('resend');

/**
 * Format date nicely in Indian Standard Time (IST)
 */
function formatOrderDate(date) {
  try {
    const d = date ? new Date(date) : new Date();
    return d.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (e) {
    return new Date().toISOString();
  }
}

/**
 * Build email-safe HTML for VASEVINE Owner Order Notification
 */
function buildOrderEmailHtml(order) {
  const orderId = order.orderId || 'N/A';
  const orderDate = formatOrderDate(order.paidAt || order.createdAt);
  const paymentStatus = order.paymentStatus || 'Paid';
  const paymentId = order.razorpayPaymentId || order.paymentId || 'N/A';
  const paymentMethod = order.paymentMethod || 'Online (Razorpay)';

  const customerName = (order.customer && order.customer.name) || 'Valued Client';
  const customerMobile = (order.customer && order.customer.mobile) || 'N/A';
  const customerEmail = (order.customer && order.customer.email) || 'Not provided';

  const address = (order.shippingAddress && order.shippingAddress.address) || 'N/A';
  const city = (order.shippingAddress && order.shippingAddress.city) || '';
  const state = (order.shippingAddress && order.shippingAddress.state) || '';
  const pincode = (order.shippingAddress && order.shippingAddress.pincode) || '';
  const customerNote = (order.customerNote || order.orderNotes || '').trim();

  const subtotal = Number(order.subtotal || 0);
  const deliveryCharge = Number(order.deliveryCharge || 0);
  const discount = Number(order.discount || 0);
  const total = Number(order.total || 0);

  const items = Array.isArray(order.items) ? order.items : [];

  const itemsHtml = items.map((item, idx) => {
    const name = item.productName || item.name || 'VASEVINE Garment';
    const size = item.size ? `Size: ${item.size}` : '';
    const qty = Number(item.quantity) || 1;
    const unitPrice = Number(item.unitPrice || item.price || 0);
    const itemSubtotal = unitPrice * qty;

    return `
      <tr>
        <td style="padding: 14px 0; border-bottom: 1px solid #EAE6DE; vertical-align: top;">
          <div style="font-size: 14px; font-weight: 600; color: #111111; letter-spacing: 0.3px;">${name}</div>
          ${size ? `<div style="font-size: 12px; color: #777777; margin-top: 3px;">${size}</div>` : ''}
          <div style="font-size: 12px; color: #555555; margin-top: 2px;">Qty: ${qty} &times; ₹${unitPrice.toLocaleString('en-IN')}</div>
        </td>
        <td style="padding: 14px 0; border-bottom: 1px solid #EAE6DE; vertical-align: top; text-align: right; font-size: 14px; font-weight: 600; color: #111111;">
          ₹${itemSubtotal.toLocaleString('en-IN')}
        </td>
      </tr>
    `;
  }).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New VASEVINE Order #${orderId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF9F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF9F6; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card Container (Max 600px) -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border: 1px solid #E8E5DF; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.04);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #111111; padding: 32px 24px 26px 24px; text-align: center; border-bottom: 3px solid #D4AF37;">
              <div style="font-size: 22px; font-weight: 700; letter-spacing: 4px; color: #FFFFFF; margin: 0; text-transform: uppercase;">VASEVINE</div>
              <div style="font-size: 11px; letter-spacing: 2px; color: #D4AF37; margin-top: 6px; text-transform: uppercase;">Luxury Fashion Couture</div>
              <div style="display: inline-block; background-color: rgba(212, 175, 55, 0.15); border: 1px solid #D4AF37; color: #F5E6B3; font-size: 12px; font-weight: 600; letter-spacing: 1px; padding: 5px 14px; border-radius: 20px; margin-top: 18px; text-transform: uppercase;">
                New Order Received
              </div>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px 24px;">

              <!-- Order Meta Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF9F6; border: 1px solid #EAE6DE; border-radius: 6px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 18px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 4px 0; font-size: 13px; color: #666666; width: 40%;">Order ID:</td>
                        <td style="padding: 4px 0; font-size: 14px; font-weight: 700; color: #111111; text-align: right;">#${orderId}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; font-size: 13px; color: #666666;">Order Date:</td>
                        <td style="padding: 4px 0; font-size: 13px; font-weight: 500; color: #111111; text-align: right;">${orderDate}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; font-size: 13px; color: #666666;">Payment Status:</td>
                        <td style="padding: 4px 0; text-align: right;">
                          <span style="display: inline-block; background-color: #E8F5E9; color: #2E7D32; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; padding: 3px 9px; border-radius: 4px; text-transform: uppercase;">
                            ${paymentStatus}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; font-size: 13px; color: #666666;">Payment ID:</td>
                        <td style="padding: 4px 0; font-size: 12px; font-family: monospace; color: #333333; text-align: right;">${paymentId}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; font-size: 13px; color: #666666;">Method:</td>
                        <td style="padding: 4px 0; font-size: 13px; color: #333333; text-align: right;">${paymentMethod}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Customer Details Section -->
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #888888; text-transform: uppercase; margin-bottom: 8px;">
                Customer Details
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border: 1px solid #EAE6DE; border-radius: 6px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px;">
                    <div style="font-size: 14px; font-weight: 600; color: #111111;">${customerName}</div>
                    <div style="font-size: 13px; color: #444444; margin-top: 4px;">Phone: <a href="tel:${customerMobile}" style="color: #111111; text-decoration: none; font-weight: 500;">${customerMobile}</a></div>
                    <div style="font-size: 13px; color: #444444; margin-top: 2px;">Email: <span style="color: #111111;">${customerEmail}</span></div>
                  </td>
                </tr>
              </table>

              <!-- Delivery Address Section -->
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #888888; text-transform: uppercase; margin-bottom: 8px;">
                Delivery Address
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border: 1px solid #EAE6DE; border-radius: 6px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; color: #333333; line-height: 1.5;">
                    <div>${address}</div>
                    <div style="margin-top: 3px;">${city}${city && state ? ', ' : ''}${state} - <strong style="color: #111111;">${pincode}</strong></div>
                  </td>
                </tr>
              </table>

              ${customerNote ? `
              <!-- Special Requirements / Customer Note Section -->
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #888888; text-transform: uppercase; margin-bottom: 8px;">
                Special Requirements / Customer Note
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFDF7; border: 1px solid #E8DFCB; border-left: 3px solid #D4AF37; border-radius: 4px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; color: #222222; line-height: 1.5;">
                    <div style="font-style: italic;">&ldquo;${customerNote.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}&rdquo;</div>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Order Items Section -->
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #888888; text-transform: uppercase; margin-bottom: 8px;">
                Order Items (${items.length})
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <thead>
                  <tr style="border-bottom: 2px solid #111111;">
                    <th align="left" style="padding-bottom: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #888888; text-transform: uppercase;">Product</th>
                    <th align="right" style="padding-bottom: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #888888; text-transform: uppercase;">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>

              <!-- Order Summary Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF9F6; border: 1px solid #EAE6DE; border-radius: 6px; padding: 14px 18px; margin-top: 10px;">
                <tr>
                  <td style="padding: 5px 0; font-size: 13px; color: #666666;">Subtotal:</td>
                  <td style="padding: 5px 0; font-size: 13px; font-weight: 500; color: #111111; text-align: right;">₹${subtotal.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; font-size: 13px; color: #666666;">Delivery Charges:</td>
                  <td style="padding: 5px 0; font-size: 13px; font-weight: 500; color: #111111; text-align: right;">${deliveryCharge === 0 ? 'FREE' : '₹' + deliveryCharge.toLocaleString('en-IN')}</td>
                </tr>
                ${discount > 0 ? `
                <tr>
                  <td style="padding: 5px 0; font-size: 13px; color: #2E7D32;">Discount (${order.promoCode || 'VASEVINE26'}):</td>
                  <td style="padding: 5px 0; font-size: 13px; font-weight: 600; color: #2E7D32; text-align: right;">-₹${discount.toLocaleString('en-IN')}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0 2px 0; border-top: 1px solid #D5D0C5; font-size: 15px; font-weight: 700; color: #111111;">Total Amount:</td>
                  <td style="padding: 10px 0 2px 0; border-top: 1px solid #D5D0C5; font-size: 18px; font-weight: 700; color: #111111; text-align: right;">₹${total.toLocaleString('en-IN')}</td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F4F1EA; padding: 18px 24px; text-align: center; border-top: 1px solid #EAE6DE; font-size: 11px; color: #777777;">
              <div>This is an automated order notification sent to the store owner.</div>
              <div style="margin-top: 4px; font-weight: 600; color: #555555;">VASEVINE Luxury Fashion Couture &copy; ${new Date().getFullYear()}</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Send order notification email via Resend
 * 
 * Guarantees:
 * 1. Idempotency: Checks and marks order.emailSent in MongoDB to avoid duplicate emails
 * 2. Failure Isolation: Email errors are logged safely and never roll back or fail the order/payment
 * 3. Security: No secrets, keys, or stack traces are leaked
 * 
 * @param {Object} order - Full order object
 * @param {Object} db - MongoDB database instance (optional)
 * @returns {Promise<Object>} { success: Boolean, skipped: Boolean, emailId: String, error: String }
 */
async function sendOrderNotificationEmail(order, db = null) {
  if (!order || !order.orderId) {
    console.warn('[Resend] Invalid order data supplied to sendOrderNotificationEmail');
    return { success: false, error: 'invalid_order_data' };
  }

  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  const ownerEmail = (process.env.OWNER_EMAIL || '14ritikaj@gmail.com').trim();
  const fromEmail = (process.env.RESEND_FROM_EMAIL || 'VASEVINE Orders <onboarding@resend.dev>').trim();

  if (!apiKey) {
    console.warn('[Resend] RESEND_API_KEY is not configured in environment variables. Email notification skipped.');
    return { success: false, error: 'missing_api_key' };
  }

  const orderId = order.orderId;

  // 1. Idempotency check via MongoDB
  if (db) {
    try {
      const existing = await db.collection('orders').findOne({
        $or: [
          { orderId: orderId },
          ...(order._id ? [{ _id: order._id }] : [])
        ]
      });

      if (existing && existing.emailSent === true) {
        console.log(`[Resend] Order #${orderId} already notified via email (at ${existing.emailSentAt || 'prior'}). Duplicate skipped.`);
        return { success: true, skipped: true, reason: 'already_sent' };
      }
    } catch (dbCheckErr) {
      console.warn(`[Resend] Notice during idempotency check for Order #${orderId}:`, dbCheckErr.message);
    }
  }

  // 2. Build email and send via official Resend client
  try {
    const resend = new Resend(apiKey);
    const htmlBody = buildOrderEmailHtml(order);

    const subject = `New VASEVINE Order: #${orderId} - ₹${Number(order.total || 0).toLocaleString('en-IN')}`;

    console.log(`[Resend] Initiating owner notification email for Order #${orderId} to ${ownerEmail}...`);

    const result = await resend.emails.send({
      from: fromEmail,
      to: [ownerEmail],
      subject: subject,
      html: htmlBody
    });

    if (result.error) {
      console.error(`[Resend] API returned error for Order #${orderId}:`, result.error.message || result.error);
      if (db) {
        try {
          await db.collection('orders').updateOne(
            { orderId: orderId },
            { $set: { emailError: result.error.message || 'Resend API error', updatedAt: new Date() } }
          );
        } catch (updateErr) {}
      }
      return { success: false, error: result.error.message };
    }

    const emailId = result.data?.id || 'sent';
    console.log(`[Resend] Email successfully sent for Order #${orderId} (Resend ID: ${emailId})`);

    // 3. Mark emailSent atomically in DB
    if (db) {
      try {
        await db.collection('orders').updateOne(
          { orderId: orderId },
          {
            $set: {
              emailSent: true,
              emailSentAt: new Date(),
              emailMessageId: emailId,
              emailRecipient: ownerEmail,
              updatedAt: new Date()
            }
          }
        );
      } catch (dbUpdateErr) {
        console.warn(`[Resend] DB notice marking emailSent for Order #${orderId}:`, dbUpdateErr.message);
      }
    }

    return { success: true, emailId };
  } catch (err) {
    // Critical: Never throw - log cleanly and return safe result
    console.error(`[Resend] Exception sending email for Order #${orderId}:`, err.message);
    return { success: false, error: err.message };
  }
}

module.exports = {
  buildOrderEmailHtml,
  sendOrderNotificationEmail
};
