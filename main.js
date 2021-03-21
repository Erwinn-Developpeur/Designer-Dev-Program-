require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
    res.send("Salut");
});

app.listen(PORT, () => {
    console.log(`Serveur en ligne sur le port: ${PORT}`);
})