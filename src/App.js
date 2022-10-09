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
import { UserProfile } from './Components/User/Profile/UserProfile';
import { NotFound } from './Components/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="account/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
