const { createAdminToken, setAuthCookie } = require('../../lib/auth');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  try {
    const { username, password } = req.body || {};

    const configuredUser = process.env.ADMIN_USERNAME || 'admin';
    const configuredPass = process.env.ADMIN_PASSWORD;

    if (!configuredPass) {
      return res.status(500).json({
        success: false,
        error: 'ADMIN_PASSWORD environment variable is not configured. Please set it in Vercel settings.'
      });
    }

    if (username !== configuredUser || password !== configuredPass) {
      return res.status(401).json({ success: false, error: 'Invalid admin username or password' });
    }

    const token = createAdminToken(username);
    setAuthCookie(res, token);

    return res.status(200).json({
      success: true,
      message: 'Authentication successful',
      user: { username, role: 'admin' }
    });
  } catch (err) {
    console.error('Admin login error:', err);
    return res.status(500).json({ success: false, error: 'Authentication failed' });
  }
};