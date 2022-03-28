import { Routes, Route } from 'react-router-dom';
import './App.css';
import { List, Buttons, Meals } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/meals' element={<Meals />} />
      </Routes>
    </div>
  );
}

export default App;
