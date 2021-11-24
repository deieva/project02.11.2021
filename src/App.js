import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Views/Home.js';
import Gallery from './Views/Gallery';
import Contacts from './Views/Contacts';



function App() {

    return (
        <div>
            <BrowserRouter>
            <Header />
            <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
