"use client"
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart: React.FC = () => {
  const options = {};

  const series = [44, 55, 41, 17, 15];

  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="500" />
    </div>
  );
};

export default PieChart;