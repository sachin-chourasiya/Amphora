import React from 'react';
import './Fast.css';
const Fast = () => {
    function fast(){
        let bt2= document.getElementById("btn2").checked;
        let bt3= document.getElementById("btn3").checked;
        if(bt3 === true && bt2 === true){
           document.getElementById("btn1").checked=false;
        }
       }
  return (
    <div>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={fast} type="checkbox" id="btn2" />
        <label className="form-check-label" for="flexSwitchCheckDefault">FAST</label>
      </div>
    </div>
  )
}

export default Fast
