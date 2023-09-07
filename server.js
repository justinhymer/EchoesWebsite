const express = require("express");
require("dotenv").config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// THE SERVER
app.use(express.static(path.join(__dirname, "/")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
