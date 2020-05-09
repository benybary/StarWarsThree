// Create RESTFul API using express
const express = require('express');
const route = express.Router();

let Product = require('../models/product');
let Message = require('../models/message');

// show Product by ID
// All express classes are implemnting Observable<T>
route.get('/product/:id', (req, res)=>{
    Product.findById(req.params.id, (error, data)=>{
        if(error){
            console.log("can't get item");

            return error;
        } else {
            console.log("here is your product item");            
            res.json(data);
        }
    });
});

// Get all Products
route.get('/', (req, res)=>{
    Product.find((error, data)=>{
        if (error){
            return next(error);
        } else {
            console.log("Here are your products");
            console.log(data);           
            res.json(data);
        }
    });
});

// Add to cart
route.post('/message', async(req, res, next)=>{
    console.log('88888888888',req.body);
    const message = await new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    message.save()
    if(!message) res.status(400).json({status: 'failed!'})
    res.status(201).json({status: 'success'})
    // Message.create(req.body, (error, data)=>{
    //     if (error){
    //         return next(error);
    //     } else {
    //         res.json(data);
    //     }
    // }); 
});



module.exports = route;