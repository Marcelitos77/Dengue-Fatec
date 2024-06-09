const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/alertcity', (req, res) => {
    
    const url = 'https://info.dengue.mat.br/api/alertcity';

    
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   
    axios.get(url, { params: req.query })
        .then(response => {
            
            res.json(response.data);
        })
        .catch(error => {
            
            res.status(500).json({ error: error.toString() });
        });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/api/alertcity');
});