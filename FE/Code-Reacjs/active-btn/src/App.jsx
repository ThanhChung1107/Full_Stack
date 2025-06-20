import { useState } from 'react'

import './App.css'

function App() {
  const [isAlertVisible,setIsAlertVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function activeHandler(){
    setIsAlertVisible(true);
  }

  function confirmHandler(){
    setIsActive(true);
    setIsAlertVisible(false);
  }

  function cancelHandler(){
    setIsActive(false);
    setIsAlertVisible(false);
  }

  return (
    <>
      {!isActive && !isAlertVisible && (
        <button onClick={activeHandler} className="action-btn">
          Activate
        </button>
      )}

      {isAlertVisible && (
        <div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          <button onClick={confirmHandler} className="confirm-btn">
            Confirm
          </button>
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}
      {isActive && (
        <h3 className="success-message">Mode Activated!</h3>
      )}
    </>
  )
}

export default App
