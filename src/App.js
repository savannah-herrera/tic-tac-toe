import logo from './logo.svg';
import './App.css';
import { Greeting } from "./components/greeting.js";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Greeting name="Sav" gender="f"></Greeting>
          <Greeting name="Hunter" gender="m"></Greeting>

          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Sav
        </a>
        </header>
      </div>
      <div className="footer">
        &copy; 2021
      </div>
    </>
  );
}
export default App;
