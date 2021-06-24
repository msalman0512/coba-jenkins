var express = require("express");
var app = express();
var Products = require("./product.json");

//GET all list
app.get("/product/listall", (req, res) => {
    console.log(Products)
    res.json(Products);
});

//GET detail by id
app.get("/product/:id", (req, res) => {
    res.json(Products.find((product) => {
        return req.params.id == product.id
    }))  
});

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

app.listen(5000, () => {
 console.log("Server running on port 5000");
});