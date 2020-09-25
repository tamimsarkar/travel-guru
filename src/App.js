import React , {createContext, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Sajek from './components/Sajek';
import Coxbazar from './components/Coxbazar';
import Sreemangal from './components/Sreemangal';
import HotelsOfSreemangal from './components/HotelsOfSreemangal';
import HotelDetails from './components/HotelDetails';
import Login from './components/Login';
import SignUP from './SignUP';
import PrivateRoute from './components/PrivateRoute';
export const UserContext = createContext();
function App() {
 
 
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <Router>
    
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/sreemangal">
        <Header />
        <Sreemangal />
      </Route>
      <Route path="/coxbazar">
        <Header />
        <Coxbazar />
      </Route>
      <Route path="/sajek">
        <Header />
        <Sajek />
      </Route>
      <Route path="/login-page">
        <Login />
      </Route>
      
      <PrivateRoute path="/book-hotel/:hotelkey">
        <Header />
        <HotelDetails />
      </PrivateRoute>
      <Route path="*">
        <Header />
        <NotFound />
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  )
 
}

export default App;
