import React , {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
 

 import NavBar from './components/layout/Navbar'
 import SingIn from './components/auth/SingIn'
 import SingUp from './components/auth/SingUp'
 import Dashboard from './components/dashboard/Dashboard'
 import ProjectDetails from './components/projects/ProjectDetails'

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/project/:id' component={ProjectDetails} />
                <Route path='/singin' component={SingIn} />
                <Route path='/singup' component={SingUp} />
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
