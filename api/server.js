
const express = require("express")
const app = express()
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions))

app.get("/", function(req, res) {
    res.send({"name": "Jane Doe"})
  })

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
