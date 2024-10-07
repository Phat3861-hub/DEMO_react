import React, { useState } from "react";

const BaiTapState1 = () => {
  let styleButton = "py-2 px-5 mx-2 text-white rounded";
  //giá trị mặc định là 16px, cứ mỗi lần click thì giá trị fs của h2 tăng thêm 2 hoặc 4 px tùy thích
  // giảm giá trị fs của h2 đi 2 hoặc 4px tùy thích
  const [fontSize, setFontsize] = useState(16);

  //   function handlefsUp() {
  //     setFontsize(fs + 2);
  //   }
  //   function handlefsLower() {
  //     setFontsize(fs - 2);
  //   }
  function updateFontSize(type) {
    if (type == "tang") setFontsize(fontSize + 2);
    else if (type == "giam") setFontsize(fontSize - 2);
  }

  return (
    <div>
      <h2 className="mb-10" style={{ fontSize }}>
        Thực hiện và sử dụng tạo state để giúp thực hiện tăng giảm fontsize cho
        nội dung đang có của thẻ h2
      </h2>
      <button
        onClick={() => {
          updateFontSize("tang");
        }}
        className={`${styleButton} bg-black`}
      >
        Tăng fs
      </button>
      <button
        onClick={() => {
          updateFontSize("giam");
        }}
        className={`${styleButton} bg-purple-500`}
      >
        Giảm fs
      </button>
    </div>
  );
};

export default BaiTapState1;
