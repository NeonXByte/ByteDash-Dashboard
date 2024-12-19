// Chart.js example for Sales Chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales ($)',
      data: [1200, 1900, 3000, 5000, 2300, 3200],
      backgroundColor: 'rgba(46, 204, 113, 0.7)',
      borderColor: 'rgba(39, 174, 96, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
