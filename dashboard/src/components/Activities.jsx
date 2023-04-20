import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "",
    user: 200,
    guest: 100,
    amt: 120,
  },
  {
    name: "Week 1",
    user: 380,
    guest: 420,
    amt: 1500,
  },
  {
    name: "",
    user: 250,
    guest: 300,
    amt: 1700,
  },
  {
    name: "Week 2",
    user: 200,
    guest: 130,
    amt: 210,
  },
  {
    name: "",
    user: 270,
    guest: 250,
    amt: 250,
  },
  {
    name: "Week 3",
    user: 340,
    guest: 450,
    amt: 220,
  },
  {
    name: "",
    user: 200,
    guest: 350,
    amt: 270,
  },
  {
    name: "Week 4",
    user: 220,
    guest: 190,
    amt: 240,
  },
  {
    name: "",
    user: 450,
    guest: 300,
    amt: 260,
  },
];

const Activities = () => {
  return (
    <div className=" px-8 py-6  md:mx-6 mx-4 rounded-2xl bg-white h-[360px]">
      <div className="flex flex-col">
        <div>
          <span className=" font-bold text-lg">Activities</span>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <div className="flex items-center">
            <span className="text-[#858585] text-sm">May - June 2021</span>
            <AiOutlineRight className=" rotate-90 text-xs mx-1 text-[#858585] " />
          </div>
          <div className="flex">
            <div className="flex items-center md:px-6">
              <div className="rounded-full bg-[#E9A0A0] h-3 w-3"></div>
              <span className="text-sm ml-2">Guest</span>
            </div>
            <div className="flex items-center md:mr-14 ml-4">
              <div className="rounded-full bg-[#9BDD7C] h-3 w-3 "></div>
              <span className="text-sm ml-2">User</span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          // width={600}
          // height={200}
          data={data}
          margin={{
            top: 15,
            right: 7,
            left: -25,
            bottom: 66,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            // intervalOffset={-1}
            style={{ fontSize: 14 }}
            interval={"preserveStartEnd"}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: 14 }}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
          />
          {/* <Legend iconType="circle" verticalAlign="top" align="right" iconSize={10} height={50} /> */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="guest"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="user"
            stroke="#9BDD7C"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activities;
