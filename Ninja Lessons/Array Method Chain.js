const products = [
    {name:'gold', score: 30},
    {name:'green', score: 10},
    {name:'banana', score: 40},
    {name:'mushroom', score: 50}
];

const filtered = products.filter(product=>product.score>20);

const promos = filtered.map(product=> {
return `the ${product.name} is ${product.price/2} `  
});

OR

const promos = products
.filter(product => product.price > 20)
.map(product => {
    return `the ${product.name} is ${product.price/2} `
});