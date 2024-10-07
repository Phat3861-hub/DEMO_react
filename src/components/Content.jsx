import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="bg-blue-400 p-8 col-span-9 layout-wrapper">
      <div className="grid grid-cols-3 gap-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
