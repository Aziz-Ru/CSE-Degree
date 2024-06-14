function SchoolChecker(req, res, next) {
  const { id, name, address } = req.body;
  if (id && name && address) {
    return next();
  }
  next("Data Missed");
}
