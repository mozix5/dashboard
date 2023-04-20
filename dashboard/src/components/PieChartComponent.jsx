import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  
} from "recharts";

const data = [
  { name: "Tea", value: 400 },
  { name: "Coffee", value: 300 },
  { name: "Cola", value: 300 },
  { name: "Water", value: 500 },
];
// const formatLegend = (value, entry) => {
// const totalValue = data.reduce((acc, { value }) => acc + value, 0);
// const percent = ((data.value / totalValue) * 100).toFixed(0);
// console.log(percent);
// return (
// <div>
// <div className="mr-7 flex">
// <span className="text-black">{entry.payload.name} {percent}%</span>
// {/* <span className="text-black">{percent}%</span> */}
// </div>
// </div>
// );
// };

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const PieChartComponent = () => {
  return (
    <>
      <div className="bg-white flex-1 rounded-2xl lg:max-w-[50%] ">
        <div className="flex justify-between items-center px-8 pt-6">
          <span className=" text-lg font-bold">Top Products</span>
          <div className="flex it">

          <span className="text-xs text-[#858585]">May - June 2021</span>
          <AiOutlineRight className=" rotate-90 text-xs mx-1 text-[#858585] "/>
          </div>
        </div>
        <div className="h-48 flex mb-4">
        
          <ResponsiveContainer width={200}  className=" flex-1 md:mx-9 xl:mt-1">
          <PieChart width={200} height={200}>
              <Pie data={data} outerRadius={80} dataKey="value"  cx="50%" 
          cy="50%" >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie> 
              </PieChart>
          </ResponsiveContainer>
          <div className="mt-8 md:mt-5 w-[50%] flex flex-col   md:pl-12">
            <div className="flex  items-baseline max-md:pl-6 ">
              <div className=" rounded-full  bg-[#0088FE] h-3 w-3 "></div>
              <div className="flex flex-col mx-4">
                <span className="text-sm font-bold ">Basic Tees</span>
                <span className="text-xs md:mt-1">53%</span>
              </div>
            </div>
            <div className="flex items-baseline my-1 md:my-4 max-md:pl-6">
              <div className=" rounded-full  bg-[#00C49F] h-3  w-3 "></div>
              <div className="flex flex-col mx-4">
                <span className="text-sm font-bold ">Custom Short Pants</span>
                <span className="text-xs md:mt-1">33%</span>
              </div>
            </div>
            <div className="flex items-baseline max-md:pl-6">
              <div className=" rounded-full  bg-[#FFBB28] h-3 w-3 "></div>
              <div className="flex flex-col mx-4">
                <span className="text-sm font-bold ">Super Hoodies</span>
                <span className="text-xs md:mt-1">14%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartComponent;
