import React, { useState, useEffect } from "react";
import { Line, Bar, Radar } from "react-chartjs-2";
import axios from "axios";

const URL = "https://api.covid19india.org/states_daily.json";

const Delhi = () => {
  const [delhi, setDelhi] = useState([]);

  const mapdata = delhi.map(({ dl }) => dl);
  const date = delhi.map(({ date }) => date);
  console.log(mapdata);

  const data = () => {
    axios
      .get(URL)
      .then((res) => {
        setDelhi(res.data.states_daily);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <Line
      data={{
        labels: date,
        datasets: [
          {
            data: mapdata,
            label: "Delhi",
            borderColor: "#ef5350",
            backgroundColor: "#ef5350",
            fill: false
          }
        ]
      }}
    />
  );
};

export default Delhi;
