import React from "react";
import { Logo } from "./images";
import './styles/Main.scss';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={Logo} className="App-logo" alt="logo" /> */}
        <Logo className="App-logo" />
        {/* <Logo /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload. test
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
