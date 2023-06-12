import './App.css';
import Homepage from './Pages/Homepage';
import Page2 from './Pages/Page2';
import Featured from './Pages/Featured';
import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="App">
        <Homepage />
        <Page2 />
        <Featured />
      </div>
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
    </>
  );
}

export default App;
