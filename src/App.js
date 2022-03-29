import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components';
import { List, Buttons, Meals, Misc } from './pages';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/misc' element={<Misc />} />
      </Routes>
    </div>
  );
}

export default App;
