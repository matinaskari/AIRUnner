const checkAuthorization = (req, res, next) => {
  if (!req.headers.key) {
    return res.status(401).json({
      status: false,
      result: {},
      message: "Auhthorization Failed",
    });
  }

  const apiKey = req.headers.key;

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      status: false,
      result: {},
      message: "Wrong Api Key",
    });
  }

  next();
};

module.exports = { checkAuthorization };
