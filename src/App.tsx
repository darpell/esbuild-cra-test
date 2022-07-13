import React from "react";
import { Logo } from "./images";
import './styles/Main.scss';
import './App.scss';

const App = (): JSX.Element =>  {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. testerssasd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="test-svg">rawr</div>
      </header>
    </div>
  );
}

export default App;
