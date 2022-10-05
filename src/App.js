import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Shared/Context/UserContext'
import { User } from './Components/User/User';
import { ProtectedRoute } from './Shared/Helpers/ProtectedRoute';
import { Photo } from './Shared/Feed/Photo/Photo';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="photo/:id" element={<Photo />} />
          <Route path="account/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
