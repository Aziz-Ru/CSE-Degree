const jwt = require("jsonwebtoken");
const AuthGurd = (req, res, next) => {
  // destructuring authorization token from req.headers
  const { authorization } = req.headers;

  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { username, userId } = decoded;
    req.userId = userId;
    req.username = username;
    next();
  } catch (error) {
    console.log(error.message);
    next("Authentication Failure");
  }
};
module.exports = AuthGurd;
