import SignUp from "./authentication/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './authentication/Login';
import Dashboard from './authentication/Dashboard';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';


function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
