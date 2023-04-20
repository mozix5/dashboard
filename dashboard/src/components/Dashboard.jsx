import React from "react";
import Revenue from "./Revenue";
import { revenueData } from "../data";
import Activities from "./Activities";
import Card from "./Card";
import PieChartComponent from "./PieChartComponent";

const Dashboard = () => {
  return (
    <div >
      <div className=" flex flex-row flex-wrap max-lg:gap-4 my-4 mx-4  md:mx-6 gap-5">
        {revenueData.map((item, index) => {
          return (
            <Revenue title={item.title} amount={item.amount} key={index} color={item.color} src={item.src}/>
          );
        })}
      </div>
      <Activities />
      <div className="flex gap-4 mt-4 flex-col lg:flex-row mx-4 md:mx-6">
      <PieChartComponent/>
      <Card />
      </div>
    </div>
  );
};

export default Dashboard;
