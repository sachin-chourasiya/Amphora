import React from 'react'
import './Cheaf.css';
const Cheaf = () => {
    function cheaf(){
        let bt1= document.getElementById("btn1").checked;
        let bt3= document.getElementById("btn3").checked;
        if(bt1 === true && bt3 === true){
           document.getElementById("btn2").checked=false;
        }    
    }
  return (
    <div>
      <div className="form-check form-switch">
              <input className="form-check-input" onClick={cheaf} type="checkbox" id="btn3"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">CHEAF</label>
          </div>
    </div>
  )
}

export default Cheaf
