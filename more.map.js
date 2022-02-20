const friends = ['abba', 'jabba', 'tabba', 'tabbb']

const fLenghts = friends.map(fart => fart.length);
console.log(fLenghts)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'note', price: 12000, color: 'pink' },
    { name: 'water glass', price: 500, color: 'white' }
]

const productNames = products.map(product => product.name)
const productPrices = products.map(product => product.price)
// console.log(productPrices)

products.forEach(product => console.log(products))