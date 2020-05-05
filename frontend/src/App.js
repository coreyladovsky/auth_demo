import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthProvder from './providers/AuthProvider';
import { AuthRoute, ProtectedRoute } from './util/auth_routes';

function App() {
  return (
    <div className="App">
    <AuthProvder>

     <NavBar />
     <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <ProtectedRoute path="/users" >
          <Users />
        </ProtectedRoute>
        <AuthRoute path="/signup" >
          <SignUp />
        </AuthRoute>
        <AuthRoute path="/login" >
          <Login />
        </AuthRoute>
     </Switch>
    </AuthProvder>
    </div>
  );
}

export default App;
