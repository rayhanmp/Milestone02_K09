import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Aboutus from './components/pages/Aboutus';

import FindScholarships from './components/pages/FindScholarships';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>

        <Route path='/Aboutus' exact component={Aboutus}/>

        <Route path='/FindScholarships' exact component={FindScholarships}/>
        <Route path='/Signup' exact component={Signup}/>
        <Route path='/Login' exact component={Login}/>
      </Switch>
      <Footer />
    </Router>

    </>
  );
}

export default App;
