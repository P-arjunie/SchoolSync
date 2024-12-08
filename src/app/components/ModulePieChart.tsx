
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  completeness: number;
}

const ModuleCompletenessPieChart: React.FC<PieChartProps> = ({ completeness }) => {
  
  const data: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [completeness, 100 - completeness], 
        backgroundColor: ['#36A2EB', '#E0E0E0'], // Blue for completed, gray for remaining
        hoverOffset: 4,
      },
    ],
  };

  
  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw || 0;
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold text-[#3F5B8B]">Module Completeness</h1>
      <div className="w-14 h-14 mt-4">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ModuleCompletenessPieChart;
