import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ api }) => {
  const totalconfirmed = api.map(({ totalconfirmed }) => totalconfirmed);
  const date = api.map(({ date }) => date);
  const totaldeceased = api.map(({ totaldeceased }) => totaldeceased);
  const totalrecovered = api.map(({ totalrecovered }) => totalrecovered);

  var a = totalconfirmed,
    b = totalrecovered;

  const diff = a.map(function (item, index) {
    // In this case item correspond to currentValue of array a,
    // using index to get value from array b
    return item - b[index];
  });

  return (
    <Line
      data={{
        labels: date,
        datasets: [
          {
            data: totalconfirmed,
            label: "Total Infection",
            borderColor: "#ef5350",
            backgroundColor: "#ef5350",
            fill: false
          },
          {
            data: totaldeceased,
            label: "Total Deaths",
            borderColor: "#ffca28",
            backgroundColor: "#ffca28",
            fill: false
          },
          {
            data: totalrecovered,
            label: "Total Recovered",
            borderColor: "#66bb6a",
            backgroundColor: "#66bb6a",
            fill: false
          },
          {
            data: diff,
            label: "Total difference",
            borderColor: "#8d6e63",
            backgroundColor: "#8d6e63",
            fill: false
          }
        ]
      }}
    />
  );
};

export default LineChart;
