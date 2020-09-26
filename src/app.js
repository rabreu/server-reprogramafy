const express = require("express")
const app = express()

const musicas = require("./routes/musicasRoute")

app.use("/musicas", musicas)

module.exports = app