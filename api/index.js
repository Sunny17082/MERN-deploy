const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.API_PORT;

app.use(cors());

app.get("/api/test", (req,res) => {
    res.json("Hello "+Date.now());
});

if(PORT) {
    app.listen(PORT, () => {
        console.log("Server started on port 5000");
    });
}

module.exports = app;