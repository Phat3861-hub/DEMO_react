import React from "react";

const DienThoaiDetail = (props) => {
  console.log(props);
  return (
    <div>
      <div className="p-5 border border-gray-500 rounded-md space-y-5">
        <img src={props.dienThoai.hinhAnh} className="w-full" alt="" />
        <h3>{props.dienThoai.ten}</h3>
        <button
          onClick={() => {
            props.functionRender(props.dienThoai);
          }}
          className="py-2 px-5 bg-black text-white"
        >
          Hiển thị thông số
        </button>
      </div>
    </div>
  );
};

export default DienThoaiDetail;
