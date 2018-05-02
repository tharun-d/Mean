const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Connection url
const url = 'mongodb://localhost';
// Database Name
const dbName = 'Mean';
// Collection Names
const registerCollection = 'register';
const moviesCollection = 'movies';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // For register
  app.post('/api/register',function(req,res){
    MongoClient.connect(url, function(err, client) {

        var bodyJson=req.body;

        const col = client.db(dbName).collection(registerCollection);

        col.insertOne(bodyJson)
             res.sendStatus(200);
          })
    });

  // For login
  app.get('/api/login/:email/:password',function(req,res){
    MongoClient.connect(url, function(err, client) {

        const col = client.db(dbName).collection(registerCollection);

        col.find({'email': req.params.email,'password':req.params.password}).project({'_id': 0,'firstName' :1})
             .toArray(function(err, results) {
                console.log(results);
                if (results.length==0) {
                    res.json("Not Found");
                }
                else{
                    res.json(req.params.email);
                }
          })
      });
    });
    // check whether if user already exists
    app.get('/api/emailChecker/:email',function(req,res){
        MongoClient.connect(url, function(err, client) {
        
            const col = client.db(dbName).collection(registerCollection);

            col.find({'email': req.params.email}).project({'_id': 0, 'email': 1})
                 .toArray(function(err, results) {
                     if (results.length==0) {
                        res.json("Not Found");
                     }
                     else{
                        res.json("Found");
                     }
              })
          });
        });
    // getting the movies
     app.get('/api/movies',function(req,res){
        MongoClient.connect(url, function(err, client) {
        
            const col = client.db(dbName).collection(moviesCollection);

            col.find({}).project({'_id': 0, 'author' : 1,'movie': 1, 'rating' : 1, 'comment' : 1})
                 .toArray(function(err, results) {
                     if (results.length==0) {
                        res.json("Not Found");
                     }
                     else{
                        res.json(results);
                     }
              })
          });
        });
    // for adding new movie
    app.post('/api/movies',function(req,res){
    MongoClient.connect(url, function(err, client) {

        var bodyJson=req.body;

        const col = client.db(dbName).collection(moviesCollection);

        col.insertOne(bodyJson)
             res.sendStatus(200);
          })
    });

app.listen(3000);