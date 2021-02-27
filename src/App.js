
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Home } from './pages';
import { SigninPage } from './pages/signin';
import { Navbar } from './components/Navbar';
import { SignIn } from './components/Signin';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path = "/" component = {Home} exact />
        <Route path = "/signin" component = {SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
