import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Login/Contact/Contact';
import EmergencyService from './Pages/Home/EmergencyService/EmergencyService';
import Footer from './Pages/Footer/Footer';







function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home> </Home>
          </Route>
          <Route  path="/home">
            <Home> </Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/emergencyService">
            <EmergencyService></EmergencyService>
          </PrivateRoute>
          <PrivateRoute  path="/contact">
           <Contact> </Contact>
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

        <Footer> </Footer>
        

     
      
      
      </Router>
      </AuthProvider>

    
      
    </div>
  );
}

export default App;
