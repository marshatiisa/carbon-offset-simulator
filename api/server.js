
const express = require("express")
const app = express()
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions))

app.get("/carbonoffsetdata", function(req, res) {
    res.json([
      { month: '2023-10',
        numTrees: 10
      },
      { month: '2023-11',
        numTrees: 20
      },
      { month: '2023-12',
        numTrees: 25
      }
    ])
  })

app.listen(3001, () => {
  console.log("app listening on port 3001")
})
