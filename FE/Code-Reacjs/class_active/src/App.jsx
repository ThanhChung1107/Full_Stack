import {useState} from "react";

//bài tập 03 khoá học react js tại https://tuhoc.cc
export default function App() {
  const [isActive, setIsActive] = useState(false);

  function update(){
    setIsActive(true);
  }
  function deSelect(){
    setIsActive(false);
  }
  return (
    <div className="container">
      <p className={isActive ? "active" : undefined}>Click vào em!</p>
      <button onClick={!isActive ? update : deSelect}>Toggle btn</button>
    </div>
  );
} 