const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Verified User:', verified);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
