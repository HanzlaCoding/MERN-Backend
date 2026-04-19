const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const products = [
        { name: "Laptop", price: 50000, stock: 5 },
        { name: "Mouse", price: 1200, stock: 0 },
        { name: "Keyboard", price: 2500, stock: 12 },
        { name: "Keyboard", price: 2500, stock: 0 }
    ];

    res.render('inventory', { products })
})

const inventoryData = [
    {
        id: 1,
        name: "MacBook Pro M3",
        category: "Electronics",
        price: 450000,
        stock: 12,
        status: "In Stock"
    },
    {
        id: 2,
        name: "Logitech MX Master 3S",
        category: "Accessories",
        price: 25000,
        stock: 0,
        status: "Out of Stock"
    },
    {
        id: 3,
        name: "Dell UltraSharp 27\"",
        category: "Monitors",
        price: 85000,
        stock: 3,
        status: "Low Stock"
    },
    {
        id: 4,
        name: "Keychron K2 Keyboard",
        category: "Accessories",
        price: 18000,
        stock: 45,
        status: "In Stock"
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "Audio",
        price: 95000,
        stock: 8,
        status: "In Stock"
    }
];

// Route setup
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { products: inventoryData });
});

app.listen(3000)


// packages install krna (ejs, express)
// app js me server or ejs set krna ha
// route kisi naam sy usme res.render sy file render krengy