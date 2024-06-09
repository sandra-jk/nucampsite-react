import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage  from './pages/AboutPage';


function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='about' element={<AboutPage/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;