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
        
        console.log(response.data);

        let labels = response.data.map(semana => `Semana ${semana.SE}`);
        let data = response.data.map(semana => semana.casos_est);

        labels = labels.reverse();
        data = data.reverse();

        const getBarColor = valor => {
            if (valor <= 100) return 'green';
            if (valor <= 250) return 'yellow';
            if (valor <= 400) return 'orange';
            return 'red';
        };
        const backgroundColor = data.map(getBarColor);

        const ctx = document.getElementById('meuGrafico').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Casos estimados de dengue em Indaiatuba 2024',
                    data: data,
                    backgroundColor: backgroundColor,  
                }]
            }, 
            options: {
                responsive: true,
                maintainAspectRatio: false
            }  
        });
    })
    .catch(error => console.error('Erro:', error));