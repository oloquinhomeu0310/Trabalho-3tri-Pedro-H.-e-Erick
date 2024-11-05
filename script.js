// Gráfico de Desempenho - Bar Chart
const desempenhoCtx = document.getElementById('desempenhoChart').getContext('2d');
const desempenhoChart = new Chart(desempenhoCtx, {
    type: 'bar',
    data: {
        labels: ['Lionel Messi', 'Erling Haaland', 'Kylian Mbappé', 'Karim Benzema', 'Kevin De Bruyne'],
        datasets: [{
            label: 'Gols',
            data: [30, 42, 28, 24, 15],
            backgroundColor: 'rgba(255, 215, 0, 0.7)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1
        }, {
            label: 'Assistências',
            data: [22, 8, 14, 10, 24],
            backgroundColor: 'rgba(255, 255, 153, 0.7)',
            borderColor: 'rgba(255, 255, 153, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Engajamento nas Redes - Line Chart
const engajamentoCtx = document.getElementById('engajamentoChart').getContext('2d');
const engajamentoChart = new Chart(engajamentoCtx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Lionel Messi',
            data: [1.2, 1.5, 1.8, 2.0, 2.5, 2.9],
            borderColor: 'rgba(255, 215, 0, 1)',
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            borderWidth: 2
        }, {
            label: 'Erling Haaland',
            data: [0.8, 1.0, 1.3, 1.8, 2.0, 2.2],
            borderColor: 'rgba(255, 255, 153, 1)',
            backgroundColor: 'rgba(255, 255, 153, 0.2)',
            borderWidth: 2
        }, {
            label: 'Kylian Mbappé',
            data: [1.0, 1.2, 1.5, 1.6, 2.0, 2.3],
            borderColor: 'rgba(255, 204, 0, 1)',
            backgroundColor: 'rgba(255, 204, 0, 0.2)',
            borderWidth: 2
        }, {
            label: 'Karim Benzema',
            data: [0.9, 1.1, 1.4, 1.5, 1.7, 1.9],
            borderColor: 'rgba(255, 182, 77, 1)',
            backgroundColor: 'rgba(255, 182, 77, 0.2)',
            borderWidth: 2
        }, {
            label: 'Kevin De Bruyne',
            data: [0.7, 0.9, 1.2, 1.4, 1.6, 1.8],
            borderColor: 'rgba(255, 222, 173, 1)',
            backgroundColor: 'rgba(255, 222, 173, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
