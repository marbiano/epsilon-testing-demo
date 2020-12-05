import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsVisible(true)}>Action</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isVisible && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn to test
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
