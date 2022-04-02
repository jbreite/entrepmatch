import logo from './logo.svg';
import './App.css';


const userInfo = {
  users: {
    "name" : "Josh Breite",
    "pictures" : "fake.url",
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
