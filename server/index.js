const cors = require("cors");

const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Nittin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase); 
});


app.get("/api/users");


app.listen(4000, () => console.log("Server running on port 4000"));