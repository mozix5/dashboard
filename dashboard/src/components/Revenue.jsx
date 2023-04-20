import React from "react";
const Revenue = (props) => {
  const col = props.color;
  return (
    // <div >

    <div
      className={` rounded-2xl relative p-5 flex-1`}
      style={{ backgroundColor: col }}
    >
      <div className="flex justify-end px-3">
        <img src={props.src} className="h-6" alt="icon"/>
      </div>
      <div className="">
        <p className=" text-sm font-normal mt-2 md:mt-1">{props.title}</p>
        <p className=" text-2xl font-bold mt-2">{props.amount}</p>
      </div>
    </div>

    // </div>
  );
};

export default Revenue;
