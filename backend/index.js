require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 1198;
const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:3000"]
}));

app.get("/api/v1/a2rp", function (req, res) {
    res.json({ success: true, message: "a2rp: an Ashish Ranjan presentation" });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
