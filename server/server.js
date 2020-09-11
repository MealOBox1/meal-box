const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyparser = require("body-parser");
const cors = require("cors");
const globalErrorController = require("./controllers/errorController");

const app = express();

app.use(bodyparser.json());

//db config
const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo is connected"))
  .catch((err) => console.log("error in mongo connection"));
app.use(cors());
// app.use("/user", require("./router/api/User"));
app.use("/venders", require("./router/api/FetchVenders"));
 app.use("/user", require("./router/api/User"));
//app.use("/venders/:id", require("./router/api/FetchVenders"));
// app.use("/vender", require("./router/api/Vender"));
//app.use("/orders", require("./router/api/order"));

//app.use("/user/feedback", require("./router/api/Feedback"));

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `can't find ${req.originalUrl} on this server`,
  });
});

app.use(globalErrorController);

// app.use(express.static(__dirname + '/dist/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));

// app.get("/", (req, res) => {
//   res.send("<h1>hellow<h1>");
  app.get('/', function(req, res){
    res.redirect('/');
 });

 const env = process.env.NODE_ENV;


const port = process.env.PORT || 5000;

// console.log(process.env.NODE_ENV);

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

process.on("unhandled rejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
