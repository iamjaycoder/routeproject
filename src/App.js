import NavBar from './component/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';




function App() {
  return (
<Router>
<div className="app">
      <NavBar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/about me" exact component={AboutUs}/>


    </Switch>
      </div>
</Router>
     
   
  );
}

export default App;
