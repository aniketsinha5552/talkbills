"use client"
import { convertDay } from "@/helpers/convertDay";
import axios from "axios";
import { title } from "process";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarChart: React.FC = () => {
  const [weekly, setWeekly] = useState([]);
  const [dates, setDates] = useState([]);

  const getWeekly = async () => {
    let res = await axios.get("/api/weekly");
    console.log(res.data);
    let keys = Object.keys(res.data);
    let amt: any = [];
    let data: any = [];
    for (let i = 0; i < keys.length; i++) {
      amt.push(res.data[keys[i]].amount);
      data.push(
        `${convertDay(res.data[keys[i]].day)}, ${res.data[keys[i]].created_at.slice(
          0,
          10
        )} `
      );
    }
    setWeekly(amt);
    setDates(data);
  };
  useEffect(() => {
    getWeekly();
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: dates,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ['#00B5A8'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    
  };

  const series = [
    {
      name: "series-1",
      data: weekly,
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
