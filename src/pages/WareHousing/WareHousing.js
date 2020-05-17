import React, { Component } from 'react';
import Menu from './../../components/Menu/Menu';
import Header from './../../components/Menu/Header';
import Content from '../../components/WareHousing/Content';

import axios from 'axios';


import { connect } from 'react-redux';
// import { createBrowserHistory } from 'history';


// import $ from 'jquery';
// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

 //for bootstrap.min.js
//bootstrap-theme file for bootstrap 3 only
// import './../../../bootstrap/dist/css/bootstrap-theme.min.css';
// import './../../../bootstrap/dist/css/bootstrap.min.css';
// import './../../../bootstrap/dist/js/bootstrap.min.js';


// const history = createBrowserHistory();

import history from './../../history';



class WareHousing extends Component {
  
  
   // console.log(this.props.history.match.params.id);
   onClick = ()=>{
    console.log(this.props);
  history.push('/product');
   console.log(this.props);
 
 
  }
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

    <p></p>
  <p></p>

	<p></p>

	<p></p>
	<p></p>
	<p></p>
	<p></p>
	<p></p>
	<p></p>
		<button onClick = {(e)=>{this.onClick(e)}}>asdasdasd</button>

    </div>


	
</div>

<Content/>



</div>
</div>
   

   
    );
  }
}


export default WareHousing;