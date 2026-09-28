const { verifyAdmin } = require('../../lib/auth');

module.exports = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(200).json({ authenticated: false });
  }
  return res.status(200).json({
    authenticated: true,
    user: { username: admin.username, role: admin.role }
  });
};