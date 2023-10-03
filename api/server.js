const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const fakeDB = [
  { month: "2023-10", numTrees: 10 },
  { month: "2023-11", numTrees: 20 },
  { month: "2023-12", numTrees: 25 },
];

function getPurchasesDB() {
  return fakeDB;
}
function addPurchaseDB(month, numTrees){
fakeDB.push({month, numTrees});
fakeDB.sort((a,b)=> {
  if(a.month > b.month){
    return -1
  }else if(a.month < b.month){
    return 1
  } else return 0
})
}

function deletePurchaseDB(month, numTrees){

}

function estimateCarbonOffset(treeAge) {
  const carbonOffset = 4.75 * treeAge;
  return carbonOffset;
} 
const carbonOffsetEstimate = estimateCarbonOffset(species, age);
console.log(`The estimated carbon offset of a ${species} tree at ${age} years old is ${carbonOffsetEstimate} kg of CO2 per year.`);

app.get("/purchases", function (req, res) {
  res.json(getPurchasesDB());
});

app.put("/purchases", function (req, res) {
  addPurchaseDB(req.body.month, req.body.numTrees)
});

app.get("/carbonoffsetdata", function(req, res) {
  const purchases = getPurchasesDB()

  function addMonths(inputMonth, monthsToAdd) {
    const date = new Date(inputMonth + "-01")
    date.setUTCMonth(date.getUTCMonth() + monthsToAdd)
    const year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1; 
    
    if (month < 10) {
      month = "0" + month;
    }
  
    return `${year}-${month}`;
  }
  const firstMonth = purchases[0].month
  const lastMonth = addMonths(firstMonth, 9*12)
  const carbonOffsetData = []
  for(let month = firstMonth; month <= lastMonth; month= addMonths(month, 4)){
//
  }
})

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
