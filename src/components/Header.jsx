// import giúp file khác import được file này và sử dụng
import React from "react";

const Header = () => {
  // thẻ jsx viết html trong file js, jsx là object của react
  // nền màu đỏ ,padding 30px, màu chữ trắng , fontsize 20px, canh giữa nội dung

  // cơ chế data binding
  // string , numeber , array(JSX)

  let hoTen = "Tấn Phát";
  let classLayout =
    "bg-[#F5D455] text-white text-xl text-center p-section-padding";
  let sinhVien = {
    name: "Lý Tín",
    tuoi: 15,
  };
  let theP = <div>Hello</div>;

  let arrString = ["Lan", "My", "Quỳnh", 4, 20, 15, <p>Hello </p>];
  let arrData = [
    {
      hoTen: "Nguyễn Tấn Phát",
      tuoi: 20,
    },
    {
      hoTen: "Đỗ Quốc Việt",
      tuoi: 19,
    },
  ];

  let newArrData = arrData.map((item, index) => {
    return (
      <div>
        <p>{item.hoTen}</p>
        <p>{item.tuoi}</p>
      </div>
    );
  });
  // bản chất thật sự của các thẻ jsx là các Object
  return (
    <div className={classLayout}>
      {hoTen}
      <p>{sinhVien.name}</p>
      <div>{theP}</div>
      <div>{arrString}</div>
      <div className="data">{newArrData}</div>
    </div>
  );
};

// export giúp các file khác import được file này và sử dụng
export default Header;
