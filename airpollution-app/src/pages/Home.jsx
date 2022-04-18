// import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios"
import { useState } from 'react';

function Home() {
  const [percentage, setPercentage] = useState(0)

  function getData(e) {

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

  return (
    <div className="home">
      <form id="form" role="search" className='search-bar' name='form' onSubmit={getData}>
        <input type="text" id="query" name='location' 
          placeholder="location"
          aria-label='search in a location'
        />

        <button>
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
      </form>

      <SemiCircleProgressBar percentage={percentage} showPercentValue  stroke={'red'} strokeWidth={'15'} diameter={'300'}/>


      <div className='forecast-container'>
        <div className='forecast'></div>
        <div className='forecast'></div>
        <div className='forecast'></div>
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
      </div>

    </div>

  );
}

export default Home;