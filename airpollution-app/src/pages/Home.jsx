// import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import 'react-circular-progressbar/dist/styles.css';
const percentage = 50

function Home() {
  return (
    <div className="home">
      <form id="form" role="search">
        <input type="search" id="query" name='q'
          placeholder='Location'
          aria-label='search in a location'
        />

        <button>
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
      </form>

      {/* <div className='semi-circle'></div> */}

      <SemiCircleProgressBar percentage={50} showPercentValue />

      {/* <div className="progress"> 
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div> */}

      <div className='forecast-container'>
        <div className='forecast'>Today</div>
        <div className='forecast'>Sat</div>
        <div className='forecast'>Sun</div>
      </div>

      <div className='recomentaion-container'>
        <div className='title'>
          <h2>Get Personalized recomendation</h2>
        </div>

        <div className='question-container'>

          <h3>Select your age range</h3>

          <div className='answers-container'>

            <div className="container">
              <label className="question-label"> under 20 </label>
              <input type="checkbox" checked="checked" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> 21 - 40 </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> 41 - 60 </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> older 60</label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

          </div>

        </div>

        <div className='question-container'>

          <h3>Are you Pregnant?</h3>
          <div className='answers-container'>

            <div className="container">
              <label className="question-label"> Yes </label>
              <input type="checkbox" checked="checked" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> No </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> Not sure </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

          </div>

        </div>

        <div className='question-container'>

          <h3>Are you experiencing any heart disease</h3>

          <div className='answers-container'>
            <div className="container">
              <label className="question-label"> Yes </label>
              <input type="checkbox" checked="checked" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> No </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> Not Sure </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>
          </div>

        </div>

        <div className='question-container'>

          <h3>Are you experiencing any lung disease</h3>
          <div className='answers-container'>
            <div className="container">
              <label className="question-label"> Yes </label>
              <input type="checkbox" checked="checked" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> No </label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

            <div className="container">
              <label className="question-label"> Not sure</label>
              <input type="checkbox" />
              <span className='checkmark'></span>
            </div>

          </div>

        </div>

      </div>

      <div className='recomendations-button'>
        <button type='button' className='recomendation-button'> Show Recomendations </button>
      </div>

    </div>

  );
}

export default Home;