import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register.jsx';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/deployRegisterForm/" element={<Register />} />
      </Routes>
  );
}