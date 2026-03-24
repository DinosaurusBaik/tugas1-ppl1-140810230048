require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const db = mongoose.connection;
db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

const UserRouter = require("./routes/users");
app.use("/users", UserRouter);

app.listen(27017, () => {
  console.log("Server is running on port 27017");
});
