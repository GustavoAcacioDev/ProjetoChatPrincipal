import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import RegisterClientePage from './containers/RegisterClientePage'
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';
import Home from './containers/home';
import PerfilAtendente from './containers/PaginaAtendente';
import { Link } from 'react-bootstrap-icons';
import LoginClientePage from './containers/LoginClientePage';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);


  return (
    <div className="App">
      <Router>
        {/* only logged in user can access this home route */}
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path='/atendente' component={PerfilAtendente}/>
        <Route path='/home' component={Home}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/signupCliente" component={RegisterClientePage} />
        <Route path="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
