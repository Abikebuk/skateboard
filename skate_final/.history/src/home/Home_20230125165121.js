import { useEffect } from 'react'
mport Chart from 'chart.js/dist/Chart'

const Home = () => {
  useEffect(() => {
    const data = {
      labels: ['janvier', 'février', 'mars', 'avril'],
      datasets: [{
        label: 'Ventes',
        data: [100, 200, 150, 175],
        backgroundColor: '#3e95cd'
      }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        title: {
          display: true,
          text: 'Ventes mensuelles'
        }
      }
    });
  }, []);

  return (
    <canvas id="myChart"></canvas>
  );
}

export default Home;