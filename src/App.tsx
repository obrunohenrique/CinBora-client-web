import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Home from './pages/home/Home'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ConfirmEmailPage from './pages/confirm-email';
import MakeDriverForm from './pages/make-driver/MakeDriverForm';
import ListDrivers from './pages/listdrivers/ListDrivers';
import Profile from './pages/edit-user/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acesso" element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/confirmar-email' element={<ConfirmEmailPage />} />
        <Route path='/criar-carona' element={<MakeDriverForm />} />
        <Route path='/obter-carona' element={<ListDrivers />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
