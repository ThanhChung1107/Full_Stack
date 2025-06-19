import PropTypes from "prop-types";
import logo from "./assets/logo-tuhoc.png";
import {data, topicContent} from "../data.js"
import TabButton from "./TabButton.jsx";
import { useState } from "react";
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}
function MainContent(prop){
  return(
    <li>
    <img src={prop.image} alt={prop.title} />
    <h2>{prop.title}</h2>
    <p>{prop.desc}</p>
  </li>
  )
}
MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
}
function App() {
  const [selectedTopic,setselectedTopic] = useState("vui lòng click vào nút");
  function handleClick(selectbtn) {
        setselectedTopic(selectbtn);
    }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {/*su dung Destructuring  */}
            {/* <MainContent
              img = {data[0].image}
              title = {data[0].title}
              desc = {data[0].desc}
            />
            <MainContent
              img = {data[1].image}
              title = {data[1].title}
              desc = {data[1].desc}
            />
            <MainContent
              img = {data[2].image}
              title = {data[2].title}
              desc = {data[2].desc}
            />
            <MainContent
              img = {data[3].image}
              title = {data[3].title}
              desc = {data[3].desc}
            /> */}
            

            {/* sử dụng spread operator */}
            <MainContent {...data[0]}/>  
            <MainContent {...data[1]}/> 
            <MainContent {...data[2]}/> 
            <MainContent {...data[3]}/> 
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('States')}>States</TabButton>
            
          </menu>
          {topicContent[selectedTopic] ? (
            <div id="tab-content">
              <h3>{topicContent[selectedTopic].title}</h3>
              <p>{topicContent[selectedTopic].description}</p>
            </div>
          ) : (
            <p>{selectedTopic}</p> // ví dụ: "vui lòng click vào nút"
          )}

        </section>
      </main>
    </>
  );
}

export default App;
