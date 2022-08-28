import React from 'react'
import './Good.css';
const Good = () => {
    function good(){
        let bt1= document.getElementById("btn1").checked;
        let bt2= document.getElementById("btn2").checked;
        if(bt1 === true && bt2 === true){
          document.getElementById("btn3").checked=false;
        }
    }
  return (
    <div>
       <div className="form-check form-switch">
            <input className="form-check-input"  onClick={good} type="checkbox" id="btn1" value="on"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">GOOD</label>
        </div>
    </div>
  )
}

export default Good
