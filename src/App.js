import logo from './logo.svg';
import './App.css';


const userInfo = {
  users: {
    "name" : "Josh Breite",
    "pictures" : "https://josh-zabar-breite-portfolio.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2Fd6ed8001-e727-4d2d-ad7e-6f6311dfb7d9%2Fimages%2F94dc677d-efd0-4b6f-88e2-39d7f33f549d.jpg&w=3840&q=80",
    "projects" : {
      "projectName" : "Induction Learning",
      "projectDescription" : "Reimaning the education landscape.",
      "teamSize" : 6,
      "projectDuration": "2 years",
      "greatestMoment": "Deploying the app.",
      "projectLink" : "https://www.inductionlearning.com/"
    },
    "favoriteEntreprenuer" : "Satoshi Nakamoto",
    "industryInterest" : ["Crypto", "FinTech"],
    "school" : "Northwestern",
    "major" : "Computer Science",
    "skills" : {
      "artistic" : [],
      "technical" : ["React", "Python", "SQL"],
      "softSkills" : ["Organization", "Notion"]
    }
  }   
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
