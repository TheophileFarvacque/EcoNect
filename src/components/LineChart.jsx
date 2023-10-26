import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Détruire le graphique existant s'il y en a un
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Créez le nouveau graphique
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Assurez-vous de détruire le graphique lors du démontage du composant
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Mettez à jour le graphique lorsque les données changent

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default LineChart;
