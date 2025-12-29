const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const PORT = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
