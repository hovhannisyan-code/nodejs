const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 4000;
const contactController = require("./controllers/contact.controller");
const contactRouter = require("./routes/contact.route");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", contactController.index);

app.use("/contacts", contactRouter);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
