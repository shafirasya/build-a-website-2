import './App.css';
import img1 from './assets/img1.jpg';

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <div>
          <img src={img1} />
        </div>
        <p className="text-2xl">
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link text-sm font-light"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is the weather-app starter code for Build a Website II
        </a>
      </header>
    </div>
  );
}

export default App;
