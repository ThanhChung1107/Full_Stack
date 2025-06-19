import pic1 from "./src/assets/pic1.png";
import pic2 from "./src/assets/pic2.png";
import pic3 from "./src/assets/pic3.png";
import pic4 from "./src/assets/pic4.png";

export const data = [
  {
    image: pic1,
    title: "Components",
    desc: "Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng.",
  },
  {
    image: pic2,
    title: "JSX",
    desc: "Kết hợp HTML và JavaScript để tạo giao diện động và mạnh mẽ.",
  },
  {
    image: pic3,
    title: "Props",
    desc: "Truyền dữ liệu vào thành phần để làm nó linh hoạt và tái sử dụng.",
  },
  {
    image: pic4,
    title: "State",
    desc: "Dữ liệu được React quản lý, khi thay đổi sẽ tự động làm mới giao diện.",
  },
];

export const topicContent = {
  components: {
    title: "Components",
    description: "Components là các khối xây dựng giao diện trong React. Mỗi component là một hàm hoặc class có thể tái sử dụng.",
  },
  JSX: {
    title: "JSX",
    description: "JSX là cú pháp mở rộng của JavaScript cho phép viết HTML trong JavaScript.",
  },
  Props: {
    title: "Props",
    description: "Props cho phép truyền dữ liệu từ component cha xuống component con như tham số.",
  },
  States: {
    title: "States",
    description: "State là dữ liệu nội bộ của component và có thể thay đổi theo hành động người dùng.",
  },
};
