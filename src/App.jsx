import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BaiTapRenderDienThoai from "./components/BaiTap/BaiTapRenderDienThoai";
// tạo biến lưu trữ hình ảnh
import hinhAnh1 from "./assets/img/flower_1.jpg";
import DemoSate from "./components/DemoState/DemoSate";
function App() {
  return (
    <>
      {/* tên các component phải viết hoa chữ cái đầu */}
      {/* <Header />
      <div className="grid grid-cols-12 ">
        <Navigation />
        <Content />
      </div>
      <Footer /> */}
      {/* cách đầu tiên để hiển thị hình ảnh là đường dẫn đi từ index.html*/}
      {/* <img src="./public/flower_1.jpg" alt="" /> */}
      {/* cách 2 : sử dụng tạo biến lưu trữ hình ảnh  */}
      {/* <div className="my-container">
        <img className="theHinhAnh " src={hinhAnh1} alt="" />
      </div>
      <BaiTapRenderDienThoai /> */}
      <DemoSate />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
