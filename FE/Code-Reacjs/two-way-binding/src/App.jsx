import { useState } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState({fullName : "",email : ""});

  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }  
  return (
    <>
      <h2>cập nhật thông tin cá nhân</h2>
      <label>
      nhập họ và tên:
        <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
      </label>
      <br />
      <label>
      email:
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </label>
      <br />
      <h3>họ và tên: {user.fullName}</h3>
      <h3>email: {user.email}</h3>
    </>
  )
}

export default App
