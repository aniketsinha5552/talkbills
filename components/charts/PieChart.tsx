"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const PieChart: React.FC = () => {

  const [exp, setExp] = useState([]);
  const [series, setSeries] = useState([1])
  const [options, setOptions] = useState({})

  const getData = async () => {
    let res = await axios.get(`/api/expense_by_cat`)
    setExp(res.data)
    let ser: any = []
    res.data.forEach((item: any) => {
      ser.push(item?.sum?.amount)
    })
    setSeries(ser)
    console.log("series", series)
    let labels = res.data.map((item: any) => item.category)
    setOptions({
      // labels: {
      //   items: {
      //     style: {
      //       colors: ['#333'],
      //     }
      //   }
      // },
      // title: {
      //   text: 'Expense by Category',
      //   align: 'center',
      //   style: {
      //     fontSize: '20px',
      //     fontWeight: 'bold',
      //     fontFamily: 'Helvetica, Arial, sans-serif',
      //     color: '#333'
      //   },
      // },
      labels: labels
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="donut">
       <h1 className="text-lg">Expense by Category</h1>
      <Chart options={options} series={series} type="donut" width="500" />
    </div>
  );
};

export default PieChart;
