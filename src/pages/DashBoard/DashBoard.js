import React, { Component } from 'react';
import Menu from './../../components/Menu/Menu';
import Header from './../../components/Menu/Header';
import Content from '../../components/Cdashboard/Content';


import axios from 'axios';


import { connect } from 'react-redux';





class DashBoard extends Component {
  
  componentWillMount(){
    console.log('dsad');
  }
   // console.log(this.props.history.match.params.id);
 
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


export default DashBoard;