const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const storeRouter = require("./routes/Store");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeRouter);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;
  return res.status(status).json({
    error: { message, status },
  });
});

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
