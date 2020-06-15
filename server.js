const swapi = require('swapi-node');
const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/people', (req, res) => {
    let query = req.query.search;
    console.log(query);
    swapi.get('https://swapi.dev/api/people/?search=' + query).then((result) =>{
        console.log(result.results);
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/planets', (req, res) => {
    let query = req.query.search;
    console.log(query);
    swapi.get('https://swapi.dev/api/planets/?search=' + query).then((result) =>{
        console.log(result.results);
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/vehicles', (req, res) => {
    let query = req.query.search;
    console.log(query);
    swapi.get('https://swapi.dev/api/vehicles/?search=' + query).then((result) =>{
        console.log(result.results);
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(3001, () => console.log('Listening on Port 3001.'))