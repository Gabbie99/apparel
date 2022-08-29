import './App.css';
import Mybody from './Body/Mybody';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutBody from './Body/AboutBody';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Mybody/>}/>
          <Route path='/about' element={<AboutBody/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
