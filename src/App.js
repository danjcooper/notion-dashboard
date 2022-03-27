import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { List, Buttons } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/buttons' element={<Buttons />} />
      </Routes>
    </div>
  );
}

export default App;
