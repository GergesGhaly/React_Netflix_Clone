import react  from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Netflixshow from './pages/Netflixshow';
import Footer from './component/Footer/Footer';
import Scrolltotop from './component/Scrolltotop/Scrolltotop';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Scrolltotop/>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/netflixshow" component={Netflixshow}/>
    </Switch>

      <Footer/>
    </div>
  

    </BrowserRouter>
  );
}

export default App;
