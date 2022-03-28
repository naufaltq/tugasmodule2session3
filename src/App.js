import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        {data.map((data) => {
          return (
            <div>
              <p>{data.name}</p>
              <p>{data.id}</p>
              <p>{data.popularity}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
