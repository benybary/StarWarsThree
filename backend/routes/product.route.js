// Create RESTFul API using express
const express = require('express');
const app = express();
const productRoute = express.Router();

let Product = require('../models/product');

// show Product by ID
// All express classes are implemnting Observable<T>
productRoute.route('/product/:id').get((req, res)=>{
    Product.findById(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get all Products
productRoute.route('/').get((req, res)=>{
    Product.find((error, data)=>{
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Add to cart
productRoute.route('/cart/:id').post((req, res, next)=>{
    console.log(req.body);
    Product.create(req.body, (error, data)=>{
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    }); 
});



module.exports = productRoute;