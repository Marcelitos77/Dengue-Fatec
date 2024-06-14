const axios = require('axios');
const fs = require('fs');

const params = {
    geocode: '3520509',  
    disease: 'dengue',  
    format: 'json',  
    ew_start: '1',  
    ew_end: '53',  
    ey_start: '2024',  
    ey_end: '2024'  
};

const url = 'http://localhost:3000/api/alertcity';

axios.get(url, { params })
    .then(response => {
    
        fs.writeFileSync('alertcity.json', JSON.stringify(response.data, null, 2));
    })
    .catch(error => console.error('Erro:', error));