const { verifyAdmin } = require('../lib/auth');
const { uploadImage } = require('../lib/cloudinary');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  try {
    const { image, folder } = req.body || {};

    if (!image) {
      return res.status(400).json({ success: false, error: 'Image data (base64 string or URL) is required' });
    }

    const uploaded = await uploadImage(image, folder || 'vasevine/products');

    return res.status(200).json({
      success: true,
      url: uploaded.url,
      publicId: uploaded.publicId,
      width: uploaded.width,
      height: uploaded.height
    });
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Image upload failed' });
  }
};