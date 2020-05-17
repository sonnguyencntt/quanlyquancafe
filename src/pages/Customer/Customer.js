import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import Content from '../../components/Customer/Content';
import {Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

// import $ from 'jquery';
// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

 //for bootstrap.min.js
//bootstrap-theme file for bootstrap 3 only
// import './../../../bootstrap/dist/css/bootstrap-theme.min.css';
// import './../../../bootstrap/dist/css/bootstrap.min.css';
// import './../../../bootstrap/dist/js/bootstrap.min.js';


const history = createBrowserHistory();




class Table extends Component {
  
 
  
 
  render() 
  
  {
    console.log(this.props);
    return (
    
<div>
  
<Header/>

<div class="row sidebar-row">

<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 full-height"  >

			<Menu/>
	
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"  >



    </div>


	
</div>

<Content/>



</div>
</div>
   

   
    );
  }
}


export default Table;