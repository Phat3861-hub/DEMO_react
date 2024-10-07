import React, { useState } from "react";
import BaiTapState1 from "./BaiTapState1";
import BaiTapState2 from "./BaiTapState2";
import Wrapper from "./Wrapper";

const DemoSate = () => {
  // trả về giá trị đại diện cho state | phương thức giúp cập nhật dữ liệu từ state
  // đặt tên để bóc tách theo cú pháp set+tên phương thức
  const [score, setScore] = useState(9);
  const [infoUser, setInfoUser] = useState({
    hoTen: "Tấn Phát",
    lop: "BC76",
    diaChi: "Quận 3",
  });

  function handleScore() {
    setScore(score + 1);
  }

  console.log(infoUser);
  return (
    <div>
      <h2 className="text-center text-4xl">Bài tập demo state trong react</h2>
      <div className="">
        <p>Số điểm : {score}</p>
        <button
          onClick={handleScore}
          className="py-2 px-5 bg-black text-white rounded-md"
        >
          Tăng điểm số
        </button>
      </div>
      <div className="">
        <h3 className="text-2xl">Bài tập thay đổi tên người dùng</h3>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            // nếu muốn cập nhật giá trị thì sử dụng pread operator để cập nhật muốn cập nhật cái nào thì phẩy thay đổi cái đó
            setInfoUser({
              ...infoUser,
              hoTen: event.target.value,
            });
          }}
          className="p-2 rounded-xl border-black border"
          type="text"
          placeholder="Vui lòng nhập tên mới"
        />
        <div className="">
          <h4>{infoUser.hoTen}</h4>
          <p>{infoUser.lop}</p>
          <p>{infoUser.diaChi}</p>
        </div>
      </div>
      <BaiTapState1 />
      <BaiTapState2 />
      <Wrapper>
        <input type="text" placeholder="vui lòng nhập tên ..." />
      </Wrapper>
      <Wrapper>
        <button>Xem chi tiết </button>
      </Wrapper>
    </div>
  );
};

export default DemoSate;
