function courseChecker(req, res, next) {
  const { id, name, classRoom } = req.body;
  if (id && name && classRoom) {
    return next();
  }
  if (!id) {
    next("id is required");
  } else if (!name) {
    next("name Field is Required");
  } else {
    next("classroom field is Required");
  }
}

module.exports = { courseChecker };
