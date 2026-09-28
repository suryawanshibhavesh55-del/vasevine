const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const COOKIE_NAME = 'vasevine_admin_token';
const DEFAULT_EXPIRY = 7 * 24 * 60 * 60; // 7 days in seconds

function getSecret() {
  return process.env.SESSION_SECRET || 'vasevine_default_secure_secret_fallback_key_2026';
}

function createAdminToken(username) {
  return jwt.sign({ username, role: 'admin' }, getSecret(), { expiresIn: '7d' });
}

function verifyAdmin(req) {
  try {
    const rawCookies = req.headers.cookie || '';
    const parsedCookies = cookie.parse(rawCookies);
    const token = parsedCookies[COOKIE_NAME];
    if (!token) return null;

    const decoded = jwt.verify(token, getSecret());
    return decoded;
  } catch (err) {
    return null;
  }
}

function setAuthCookie(res, token) {
  const isProd = process.env.NODE_ENV === 'production';
  const cookieString = cookie.serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    maxAge: DEFAULT_EXPIRY,
    path: '/'
  });
  res.setHeader('Set-Cookie', cookieString);
}

function clearAuthCookie(res) {
  const cookieString = cookie.serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0),
    path: '/'
  });
  res.setHeader('Set-Cookie', cookieString);
}

module.exports = {
  createAdminToken,
  verifyAdmin,
  setAuthCookie,
  clearAuthCookie
};