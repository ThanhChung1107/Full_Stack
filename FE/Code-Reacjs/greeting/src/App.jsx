import { useState } from 'react'

import './App.css'

function App() {
  const [greeting, setGreeting] = useState("Xin chào!");
  function updateGreeting() {
    let current = new Date().getHours();
    if(current > 5 && current < 12){
      setGreeting("Chào buổi sáng");
    }
    else if(current > 12 && current < 18){
      setGreeting("chào buổi chiều");
    }
    else {
      setGreeting("chào buổi tối");
    }
  }

  return (
    <>
      <p>{greeting}</p>
      <button onClick={updateGreeting}>Cập nhật lời chào</button>
    </>
  )
}

export default App
