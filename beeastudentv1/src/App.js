import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Company from './components/pages/Company';
import FindScholarships from './components/pages/FindScholarships';
import FindAlumnus from './components/pages/FindAlumnus';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/pages/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Aboutus' exact component={Aboutus}/>
        <Route path='/Company' exact component={Company}/>
        <Route path='/FindScholarships' exact component={FindScholarships}/>
        <Route path='/FindAlumnus' exact component={FindAlumnus}/>
        <Route path='/Signup' exact component={Signup}/>
        <Route path='/Login' exact component={Login}/>
      </Switch>
      <Footer />
    </Router>

    </>
  );
}

export default App;
