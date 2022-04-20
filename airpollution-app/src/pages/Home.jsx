// import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios"
import { useState } from 'react';

function Home() {
  const [percentage, setPercentage] = useState(0)
  const [dayForecast, setdayForecast] = useState(0)
  const [twoDayForecast, setTwoDayForecast] = useState(0)
  const [threeDayForecast, setThreeDayForecast] = useState(0)
  const [forecastState, setForecastState] = useState([])

  const colorCondition = (percentage < 51) ? "green" 
  : (percentage >= 51 && percentage <= 100) ? "yellow" 
  : (percentage >= 101 && percentage <= 200) ? "orange" 
  : (percentage >= 201 && percentage <= 300) ? "red" 
  : (percentage >= 301 && percentage <= 400) ? "#88003A"
  : (percentage >= 401 && percentage <= 500) ? "#6C0015" : "#000000"


  function getAllData(data) {
    
    function getAqiData(e) {
  
      let formData = new FormData(document.getElementById('form'))
  
      const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      e.preventDefault()
      fetch('http://localhost:5000/', requestOptions)
      .then(response => response.json())
      .then(data => setPercentage(data));
    }
  
    function getForecast(e) {
      let formData = new FormData(document.getElementById('form'))
  
      const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      e.preventDefault()
      fetch('http://localhost:5000/forecast', requestOptions)
      .then(response => response.json())
      .then(data => updateForecastStates(data));
    }

    function updateForecastStates(e) {
      setdayForecast(e[0])
      setTwoDayForecast(e[1])
      setThreeDayForecast(e[2])
    }

    function getRecommendations(e) {
      let formData = new FormData(document.getElementById('form'))
  
      const requestOptions = {
        method: 'POST',
        body: formData
      };
  
      e.preventDefault()
      fetch('http://localhost:5000/health_recommendations', requestOptions)
      .then(response => response.json())
      .then(data => setForecastState(data));
    }

    getAqiData(data)
    getForecast(data)
    getRecommendations(data)
  }


  return (
    <div className="home">
      <form id="form" role="search" className='search-bar' name='form' onSubmit={getAllData}>
        <input type="text" id="query" name='location' 
          placeholder="location"
          aria-label='search in a location'
        />

        <button>
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
      </form>

      <SemiCircleProgressBar percentage={percentage} showPercentValue stroke={colorCondition} strokeWidth={'15'} diameter={'300'}/>

      <div className='forecast-container'>
        <div className='forecast'>
          <h5>in 24 hr</h5>
          <p>
            {dayForecast}
          </p>
          
        </div>
        <div className='forecast'>
          <h5>in 48 hr</h5>
          <p>
            {twoDayForecast}
          </p>
          
        </div>
        <div className='forecast'>
          <h5>in 72 hr</h5>
          <p>
            {threeDayForecast}
          </p>
        </div>
      </div>

      <div className='title'>
        <h2>Get Personalized recomendation</h2>
      </div>

      <div className='question-container'>

        <h3>Select your age range</h3>

        <form className='answers-container'>
          <div className='answer'>
            <input type="radio" name="question-1" className='checkbox' value="under-18" /> Under 18
          </div>
          <div className='answer'>
            <input type="radio" name="question-1" className='checkbox' id='18-60' value="18-60" />18-60
          </div>
          <div className='answer'>
            <input type="radio" name="question-1" className='checkbox' value="60+" />60+
          </div>

        </form>

      </div>

      <div className='question-container'>

        <h3>Are you pregnant</h3>

        <form className='answers-container'>
          <div className='answer'>
            <input type="radio" name="question-2" className='checkbox' value="yes" /> Yes
          </div>
          <div className='answer'>
            <input type="radio" name="question-2" className='checkbox' value="no" />No
          </div>
          <div className='answer'>
            <input type="radio" name="question-2" className='checkbox' value="not-applicable" />Not Applicable
          </div>

        </form>

      </div>

      <div className='question-container'>

        <h3>Are you experiencing any heart disease</h3>

        <form className='answers-container'>
          <div className='answer'>
            <input type="radio" name="question-3" className='checkbox' value="Yes" />Yes
          </div>
          <div className='answer'>
            <input type="radio" name="question-3" className='checkbox' value="No" />No
          </div>
          <div className='answer'>
            <input type="radio" name="question-3" className='checkbox' value="Not-applicable" />Not Applicable
          </div>

        </form>

      </div>

      <div className='question-container'>

        <h3>Are you suffering from any lung disease</h3>

        <form className='answers-container'>
          <div className='answer'>
            <input type="radio" name="question-4" className='checkbox' value="Yes" />Yes
          </div>
          <div className='answer'>
            <input type="radio" name="question-4" className='checkbox' value="no" />No
          </div>
          <div className='answer'>
            <input type="radio" name="question-4" className='checkbox' value="Not-applicable" />Not Applicable
          </div>

        </form>

      </div>

      <div className='recomendations-button'>
        <button type='button' className='recomendation-button'> Show Recomendations </button>
        <div>
          <p className='recomendations'>
            {forecastState}
          </p>
        </div>
      </div>

    </div>

  );
}

export default Home;