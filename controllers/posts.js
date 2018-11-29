
exports.getPosts = (req, res, next) => {
 
  res.status(200).json({
    message: "Data from Node Server",
    queryprams: req.query
  });
};
