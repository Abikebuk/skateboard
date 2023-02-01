import { useEffect } from 'react'
import { Bar } from 'chart.js';

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
    new Bar(ctx, {
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