const products = {
  1: {
    item: "Soda",
    price: 150,
  },
  2: {
    item: "Diet Soda",
    price: 150,
  },
  3: {
    item: "Coffee",
    price: 200,
  },
  4: {
    item: "Chocolate Bar",
    price: 130,
  },
  5: {
    item: "Chips",
    price: 120,
  },
};

function vendingMachine(productNumber, payment) {
  if (!(productNumber in products)) return "Enter a valid product number";

  if (payment < products[productNumber].price)
    return "Not enough money for this product";

  let totalChange = payment - products[productNumber].price;
  let splitChange = getChange(totalChange);

  let productName = products[productNumber].item;

  return { product: productName, change: splitChange };
}

function getChange(amount) {
  let coins = [500, 200, 100, 50, 20, 10];
  let change = [];
  let currentAmount = amount;

  if (currentAmount === 0) return change;

  for (let i = 0; i < coins.length; i++) {
    if (currentAmount % coins[i] === 0) {
      let count = Math.floor(currentAmount / coins[i]);
      for (let j = 0; j < count; j++) {
        change.push(coins[i]);
      }
      return change;
    } else {
      let count = Math.floor(currentAmount / coins[i]);
      for (let k = 0; k < count; k++) {
        change.push(coins[i]);
      }
      currentAmount = currentAmount % coins[i];
    }
  }

  return change;
}

console.log(vendingMachine(1, 190));
console.log(vendingMachine(3, 540));
console.log(vendingMachine(4, 270));
console.log(vendingMachine(5, 500));
