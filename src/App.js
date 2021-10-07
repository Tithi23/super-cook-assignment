
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import JoinUS from './components/JoinUS/JoinUS';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>


          <Route exact path="/services">
            <Services></Services>
          </Route>


          <Route exact path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route exact path="/join-us">
            <JoinUS></JoinUS>
          </Route>


          <Route exact path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
