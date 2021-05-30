const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/index");

//db settings

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000);

//middlewares
app.use((req, res, next) => {
  console.log(`${req.url} -${req.method}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//start server
app.listen(app.get("port"), () =>
  console.log("server on port", app.get("port"))
);
