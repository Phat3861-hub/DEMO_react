import React from "react";

const BaiTapRenderDienThoai = () => {
  let arrPhone = [
    {
      ten: "Iphone 16 Promax",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-tu-nhien-thumb-600x600.jpg",
      giaTien: "25.000.000đ",
      trangThai: true,
    },
    {
      ten: "Samsung S24 Ultra",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
      giaTien: "30.000.000đ",
      trangThai: true,
    },
    {
      ten: "Iphone 14 Promax",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-bac-thumb-600x600.jpg",
      giaTien: "15.000.000đ",
      trangThai: false,
    },
  ];
  let hoTenNguoiLam = "Nguyễn Tấn Phát";

  /**Bài tập render điện thoại
   * Từ cấu trúc layout được cung cấp, hãy xử lý cho thẻ div dưới h2 sẽ có cấu trúc 3 cột, mỗi cột sẽ hiển thị thông tin của một điện thoại đang có trên mảng arrPhone
   * Cấu trúc hiển thị bao gồm : Hình ảnh , tên điện thoại , giá tiền , trạng thái : còn hàng nếu thuộc tính trạng thais : true,và ngược lại
   * Ở thẻ H2, tạo một biến hoten để chứa thông tin tên người làm bt và hiển thị vào cuối nội dung thẻ h2 đang có
   */

  let newArrPhone = arrPhone.map((item, index) => {
    return (
      <div className="col-span-4 border-2 border-cyan-500 p-5" key={index}>
        <div className="border-b-2 border-cyan-500 p-5">
          <img src={item.hinhAnh} alt="" />
        </div>
        <div className="p-5">
          <p>{item.ten}</p>
          <p>{item.giaTien}</p>
          <p>{item.trangThai ? "Còn hàng" : "Hết hàng"}</p>
        </div>
      </div>
    );
  });

  function renderDienThoai() {
    return arrPhone.map((item, index) => {
      return (
        <div className="col-span-4 border-2 border-cyan-500 p-5" key={index}>
          <div className="border-b-2 border-cyan-500 p-5">
            <img src={item.hinhAnh} alt={item.ten} />
          </div>
          <div className="p-5">
            <p>{item.ten}</p>
            <p>{item.giaTien}</p>
            <p>{item.trangThai ? "Còn hàng" : "Hết hàng"}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container ">
      <h2>Bài tập render danh sách điện thoại của {hoTenNguoiLam}</h2>
      <div className=" grid grid-cols-12 gap-5">{newArrPhone}</div>
      <div className=" grid grid-cols-12 gap-5">{renderDienThoai()}</div>
    </div>
  );
};

export default BaiTapRenderDienThoai;
