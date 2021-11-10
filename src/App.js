import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Views/Home.js';



function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>

                </Switch>
                <Footer />
            </Router>

            

        </div>

    );
}

export default App;
