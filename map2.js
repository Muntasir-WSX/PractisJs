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

const nameAndPrice = shop.map((item) => `${item.name}: $${item.price}`);
console.log(nameAndPrice); // ['apple: $100', 'banana: $150', 'orange: $200']

const nameAndDiscountedPrice = shop.map((item) => `${item.name}: $${item.price - (item.price * item.discount / 100)}`);
if (nameAndDiscountedPrice.length > 0) {
  console.log(nameAndDiscountedPrice); // ['apple: $100', 'banana: $135', 'orange: $160']
}


const nameAndDiscountedPriceWithCheck = shop.map((item) => {
  if (item.discount > 0) {
    return `${item.name}: $${item.price - (item.price * item.discount / 100)}`;