
import './App.css';

function App() {
  return (
    <div className="cust-background">
      <header className="App-header">
        
      </header>
      <footer>
      <p className="flow-text">Developed by NAI Copyright 2021
        Background Images from <a target="_blank" rel="noreferrer noopener" href="https://www.svgbackgrounds.com/">SVGBackgrounds.com</a>
      </p>

    <ul className="light flow-text list-inline">
        <li>
          <p>Check me out on GitHub
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/adam-niggebrugge">
            <img alt="github logo" className="custom-image" src="/images/github.png" />
            </a>
          </p> 
        </li>
        <li>
          <p>Check me out on LinkedIn
            <a target="_blank" rel="noreferrer noopener" href="http://www.linkedin.com/in/adam-niggebrugge">
              <img alt="linkedIn logo" className="custom-image" src="/images/linkedIN.png"/>
            </a>
          </p> 
        </li>
        <li>
          <p>Send Feedback
            <a href = "mailto:adam.niggebrugge@gmail.com?subject = Feedback&body = Message">
              <i className="material-icons custom-image">mail</i> 
            </a>
          </p>
        </li>
      </ul>
      </footer>
    </div>
  );
}

export default App;
