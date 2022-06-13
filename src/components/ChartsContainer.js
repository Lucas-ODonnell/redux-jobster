import React, { useState } from "react";
import BarChartsComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  const toggle = () => {
    setBarChart(!barChart);
  };
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={toggle}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartsComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
