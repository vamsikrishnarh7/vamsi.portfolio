
import './App.css';
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ProjectsDetails from './pages/ProjectsDetails';
function App() {
  return (
    <div>
      <div className='app-bg'>
      </div>
      <Routes>
        <Route path='/' exact element={<Hero />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<ProjectsDetails />}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
