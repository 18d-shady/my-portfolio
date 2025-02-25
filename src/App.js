//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import WorkItem from './WorkItem';

function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-portfolio" element={<HomePage />} />
          <Route path="/work/:title" element={<WorkItem />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
