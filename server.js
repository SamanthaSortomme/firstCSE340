const express = require("express")
const app = express()
const HOST = 'localhost'
const PORT = 3000

app.get("/", (req, res) => {res.send("Welcome home!")})

app.listen(PORT, () => {
console.log(`trial app listening on ${HOST}:${PORT}`)
})