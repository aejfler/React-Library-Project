import './style.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
        <>
    <div className="App">
      <Navbar />
      <Header />
      <div className='pageContainer'>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route> 
        </Switch>
      </div>
    </div>

    </>
    </Router>
  );
}

export default App;
