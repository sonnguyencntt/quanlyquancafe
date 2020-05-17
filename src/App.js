import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import history from './history';


class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return (
          <Route
            key = {index}
            
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
            
          />
        )
      })
    }
    
  return <Switch>{result}</Switch>
  }
  render() {
    return (
    
    <Router history = {history} >
         
          
            {this.showContentMenus(routes)}
         
        
      </Router>
     
    );
  }
}

export default App;