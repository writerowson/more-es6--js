const fish = { id: 58, name: 'king Hilsa', Price: 9000, phone: '988759850', address: 'chadpur', dress: "silver" }


// const phone = fish.phone;
// const price = fish.Price;
// or
const { phone, price, dress, id } = fish
console.log(fish.Price)
console.log(fish.id)

const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: { work: "website mwke", employee: 22 }
}

const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);
