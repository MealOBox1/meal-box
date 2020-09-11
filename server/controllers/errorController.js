const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //operational , trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    //programming error don't leak to client
  } else {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(process.env.NODE_ENV);
  //   if (process.env.NODE_ENV == "development") {
  //     sendErrorDev(err, res);
  //   } else if (process.env.NODE_ENV == "production") {
  //     sendErrorProd(err, res);
  //   }
  sendErrorDev(err, res);
};
