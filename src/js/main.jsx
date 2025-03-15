import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
// import Home from './components/Home';
function SimpleCounter(props){
  return (<div className= "bigCounter">
    <div className="calendar">
      <i class="fa-solid fa-clock"></i>
    </div>
    <div className="four">{props.digitFour}</div>
    <div className="three">{props.digitThree}</div>
    <div className="two">{props.digitTwo}</div>
    <div className="one">{props.digitOne}</div>

  </div>);
}
SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function(){
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;
  
  counter++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    </React.StrictMode>
  
  );
},1000);