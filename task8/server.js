const express = require("express");
const app = express();
const port = 3000;
const contactController = require("./controllers/contact.controller");
const contactRouter = require("./routes/contact.route");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", contactController.index);

app.use("/contact", contactRouter);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
