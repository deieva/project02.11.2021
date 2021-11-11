import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Views/Home.js';



function App() {

    return (
        <div>
            <BrowserRouter>
            <Header />
            <Routes>

                    <Route path="/" element={<Home />} />
                
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
