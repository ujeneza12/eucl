const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const tokenRoutes = require("./router/tokenRoutes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(morgan("tiny"));

app.use(bodyParser.json());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to tokenmeter application");
});


app.use("/api", tokenRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(8080, () => {
  console.log("listening");
});
