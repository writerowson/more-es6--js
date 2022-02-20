const numbers = [5, 34, 43, 656, 55, 32, 77, 22, 7, 22, 435, 79, 3]

// const bigNumbers = numbers.filter(number => number > 200)
const bigNumbers = numbers.filter(number => number < 200)
console.log(bigNumbers)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'note', price: 12000, color: 'pink' },
    { name: 'water glass', price: 500, color: 'white' }
]

const expensive = products.filter(product => product.price > 1000)
console.log(expensive)

const whiteItem = products.find(product => product.color == 'black')
console.log(whiteItem)