require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/index");

//db settings
console.log(process.env.PORT)
//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000);

//middlewares
//todo json que se reciba sera interpretado como un objeto de javascript
//app.use(express.json);

//app.use(express.urlencoded({extended:}))

app.use((req, res, next) => {
  console.log(`${req.url} -${req.method}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
//Busca en la carpeta routes el index.js
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//start server
app.listen(app.get("port"), () =>
  console.log("server on port", app.get("port"))
);
