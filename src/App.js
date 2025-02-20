//import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import Introduction from './Introduction';
import Description from './Description';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <div className="App bg-white">
      <Introduction />
      <Description />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
