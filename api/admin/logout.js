const { clearAuthCookie } = require('../../lib/auth');

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(200).end();
  clearAuthCookie(res);
  return res.status(200).json({ success: true, message: 'Logged out successfully' });
};