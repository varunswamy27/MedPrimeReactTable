import LogComponent from './components/LogComponent';
import LogDetail from './components/LogDetail';
import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>

      <Route path="/" element={<LogComponent/>}/>
      <Route path="/info/:id" element={<LogDetail/>}/>

      </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
