import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./Statistics.css";

const Statistics = () => {
  let [infos, setInfos] = useState([]);

  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const infosLoaded = data.data.data;
      const infosData = infosLoaded.map((info) => {
        const singleData = {
          name: info.name,
          total: info.total,
        };
        return singleData;
      });
      console.log(setInfos);
      setInfos(infosData);
    });
  }, []);

  return (
    <BarChart width={600} height={400} data={infos} className="position">
      <Bar dataKey="total" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default Statistics;
