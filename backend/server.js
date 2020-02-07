let express = require("express"),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),

    dbConfig = require("./database/db"),
    productModel = require("./models/product"),
    mockProducts = require("./database/mockData");

// Setup port for express
const productRoute = require('../backend/routes/product.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', productRoute);
app.use(express.static(path.join(__dirname, 'myFiles/StarShopThree')));



// Find 404 if no page found
app.use((req, res, next) => {
    next(createError(404, 'Page in a galaxy far far away...'));
});

// Error handeling
app.use((req, res, error, next) => {
    // Log error message in our server console
    console.error(error.message);
    // If error has no specific error code, set error code to 500 Internal server error
    if (!error.statusCode) error.statusCode = 500;
    // All http requests must have response, so we are sending the error with the status code
    res.status(error.statusCode).send(error.message);
});

// Create connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { useNewUrlParser: true })
    .then(() => {
        // inser products to db
        productModel.find()
        .then(products => {
            if(products.length !== mockProducts.length){
                // insert one time products
                let promises = mockProducts.map(product => new productModel(product).save());
                console.log('All products added');   
                return Promise.all(promises);
            }
            console.log('Nothing new to add');
            return Promise.resolve();
        })
        .then(() =>{
            // Create port
            const port = process.env.PORT || 4000;
            app.listen(port, () => {
                console.log("Connected to port: " + port);
            });
            console.log("Database connected!");
        })
    }, error => {
        console.log("Database could not connect...");
    });


