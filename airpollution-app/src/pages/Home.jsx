// import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
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

      <div className="progress"> 
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>


      <div className="aqi-index-container">
        <h2>Air Quality Index Details</h2>
      </div>
    </div>
  );
}

export default Home;