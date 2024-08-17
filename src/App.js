import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import ExperiancePage from './Pages/ExperiancePage';
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' Component={LandingPage}/>
        <Route path='/experience' Component={ExperiancePage}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
