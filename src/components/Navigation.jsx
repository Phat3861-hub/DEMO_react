import React from "react";
import "./navigation.scss";
// module css - global css - css theo component

const Navigation = () => {
  return (
    <div className="bg-orange-400 p-10 col-span-3" id="navigation">
      <div className="my-container">
        <img className="theHinhAnh" src="./public/flower_1.jpg" alt="" />
      </div>
      <button className="btn_primary">Hello</button>
    </div>
  );
};

export default Navigation;
