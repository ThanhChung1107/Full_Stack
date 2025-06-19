
import './App.css'
import img from "../src/assets/react.svg"
    let today = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const name = "Nam";
  let isLogin = false;
  const person = {
    name: "Chung",
    age: 20 
  }

function Header(){
  const title = ["xin chào react","tôi là react","chào mừng bạn đến với react"]

  return (
    <>
      <h1>{title[Math.floor(Math.random()*title.length)]}</h1>
      <p>
        hôm nay là: <strong>{today}</strong>. Thời gian hiện tại <strong>{time}</strong>
      </p>
    </>
  )
}
function DinamicValue(){
  return(<>
    <h2>{name}</h2>
    <p>{isLogin ? "đã đăng nhập" : "hãy đăng nhập"}</p>
    <p>Tên: {person.name}, tuổi: {person.age}</p>
    <img src={img} alt="" />
  </>)
}
function App() {
  
  return(
    <>
    <Header />
    <DinamicValue />
  </>
  )
}

export default App
