const errorHandler = (req, res, next, err) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
};

module.exports = errorHandler;
