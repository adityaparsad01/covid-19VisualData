import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";
import LineChart from "./LineChart";
import "./styles.css";

const URL = "https://api.covid19india.org/data.json";

const App = () => {
  const [api, setApi] = useState([]);

  const data = () => {
    axios
      .get(URL)
      .then((res) => setApi(res.data.cases_time_series))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="container">
      <Typography variant="h5" color="primary">
        Covid-19 Visual Data
      </Typography>
      <Grid item xs={12} className="linechart">
        <LineChart api={api} />
      </Grid>
    </div>
  );
};
export default App;
