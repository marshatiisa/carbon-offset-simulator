const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const fakeDB = [
  { month: "2023-01", numTrees: 1 },
  { month: "2023-02", numTrees: 1 },
  { month: "2023-03", numTrees: 1 },
  { month: "2023-05", numTrees: 1 },
  { month: "2023-09", numTrees: 1 },
];

function addPurchaseDB(month, numTrees) {
  fakeDB.push({ month, numTrees });
  fakeDB.sort((a, b) => {
    if (a.month > b.month) {
      return -1;
    } else if (a.month < b.month) {
      return 1;
    } else return 0;
  });
}

function deletePurchaseDB(month, numTrees) {}

function getPurchasesDB() {
  return fakeDB.map((p) => {
    return { month: p.month, numTrees: p.numTrees };
  });
}

function addMonths(inputMonth, monthsToAdd) {
  const date = new Date(inputMonth + "-01");
  date.setUTCMonth(date.getUTCMonth() + monthsToAdd);
  const year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let stringMonth = String(month);
  if (month < 10) {
    stringMonth = "0" + month;
  }
  return `${year}-${stringMonth}`;
}

function estimateCarbonOffset(treeAge) {
  if (treeAge > 6) {
    treeAge = 6;
  }
  const carbonOffset = 4.75 * treeAge;
  return carbonOffset;
}

function findTreePurchase(month, purchases) {
  return purchases.find((purchase) => purchase.month === month);
}

const purchases = getPurchasesDB();

function timeElapsed(purchaseMonth, currentMonth) {
  const [purchaseYear, purchaseMonthNum] = purchaseMonth.split("-");
  const [currentYear, currentMonthNum] = currentMonth.split("-");
  const monthsDiff =
    (currentYear - purchaseYear) * 12 + (currentMonthNum - purchaseMonthNum);
  return monthsDiff;
}

function getCarbonOffsetForMonth(targetMonth, purchases) {
  const firstMonth = purchases[0].month;
  let totalMonthOffset = 0;
  for (
    let month = firstMonth;
    month < targetMonth;
    month = addMonths(month, 1)
  ) {
    const treePurchase = findTreePurchase(month, purchases);
    if (treePurchase) {
      const treeAge = timeElapsed(treePurchase.month, targetMonth) / 12;
      totalMonthOffset += estimateCarbonOffset(treeAge) * treePurchase.numTrees;
    }
  }
  return totalMonthOffset;
}

function getCarbonOffset() {
  const purchases = getPurchasesDB();
  const firstMonth = purchases[0].month;
  const lastMonth = addMonths(firstMonth, 9 * 12);
  const carbonOffsetData = [];
  let totalMonthOffset = 0;
  for (let month = firstMonth; month < lastMonth; month = addMonths(month, 1)) {
    carbonOffsetData.push({
      month,
      offset: getCarbonOffsetForMonth(month, purchases),
    });
  }
  return carbonOffsetData;
}

function getExpenditure() {
  const purchases = getPurchasesDB();
  const firstMonth = purchases[0].month;
  const lastMonth = addMonths(firstMonth, 9 * 12);
  const expenditureData = [];
  let totalTrees = 0;
  for (let month = firstMonth; month < lastMonth; month = addMonths(month, 1)) {
    const treePurchase = findTreePurchase(month, purchases);
    let totalMonthExpenditure = 0;
    totalMonthExpenditure += totalTrees * 12;
    if (treePurchase) {
      console.log("find te:", treePurchase.month, month);
      totalMonthExpenditure += treePurchase.numTrees * 120;
      totalTrees += treePurchase.numTrees;
      console.log("Expenditure", month, totalMonthExpenditure);
    }

    expenditureData.push({ month, expenditure: totalMonthExpenditure });
  }
  console.log(expenditureData);
  return expenditureData;
}

app.get("/purchases", function (req, res) {
  res.json(getPurchasesDB());
});

app.put("/purchases", function (req, res) {
  addPurchaseDB(req.body.month, req.body.numTrees);
});

app.get("/carbonoffsetdata", function (req, res) {
  res.json(getCarbonOffset());
});

app.get("/expendituredata", function (req, res) {
  res.json(getExpenditure());
});

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
