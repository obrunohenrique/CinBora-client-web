import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Home from './pages/home/Home'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ConfirmEmailPage from './pages/confirm-email';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acesso" element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/confirmar-email' element={<ConfirmEmailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
