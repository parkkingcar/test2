import logo from './logo.svg';
import Main from './Components/Main';
import Firstquestion from './Components/Firstquestion';
import Result from './Components/Result';
import Scent from './Components/Scent';
import Price from './Components/Price.jsx';
import Daynight from './Components/Daynight';
import Blank from './Components/Blank';
import Analyzing from './Components/Analyzing';
import Test from './Components/Test';
// import ProgressBar from './Components/ProgressBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Firstquestion" element={<Firstquestion />} />
      
      <Route exact path="/Scent" element={<Scent />} />
      <Route exact path="/Price" element={<Price />} />
      <Route exact path="/Daynight" element={<Daynight />} />
      <Route exact path="/Blank" element={<Blank />} />
      <Route exact path="/analyzing" element={<Analyzing />} />
      <Route exact path="/Result" element={<Result />} />
      <Route exact path="/Test" element={<Test />} />
      {/* <Route exact path="/ProgressBar" element={<ProgressBar />} /> */}
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
