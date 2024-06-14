function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(404).json({ error: err });
}

module.exports = { errorHandler };
