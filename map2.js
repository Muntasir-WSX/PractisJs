const shop = [
  { name: 'apple', price: 100 , discount: 0 },
  { name: 'banana', price: 150 , discount: 10 },
  { name: 'orange', price: 200 , discount: 20 },
];

const names = shop.map((item) => item.name);
console.log(names); // ['apple', 'banana', 'orange']

const prices = shop.map((item) => item.price);
console.log(prices); // [100, 150, 200]

const discountedPrices = shop.map((item) => item.price - (item.price * item.discount / 100));
console.log(discountedPrices); // [100, 135, 160]