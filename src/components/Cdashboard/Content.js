import React, { Component } from 'react';

import Chart from '../Chart/Chart';








class Content extends Component {
  
 
   // console.log(this.props.history.match.params.id);
 
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<h3 class="dashboard-title">BÁO CÁO KẾT QUẢ BÁN HÀNG HÔM NAY</h3>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-blue">
			<div class="resport-icon">
				<i class="fa fa-usd" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				
				
				<span>Tổng doanh thu   </span>
				<strong> <h4 >
				<span >265.000</span>				</h4></strong>
			</div>
		</div>
	</div>
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-red">
			<div class="resport-icon">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				<p>Tổng số hóa đơn</p>
				<h4 >
				<span >0</span>				</h4>
				
			</div>
		</div>
	</div>
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-green">
			<div class="resport-icon">
				<i class="fa fa-pencil" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				<p><span></span>Hóa đơn chưa thanh tóan</p>
				<h4>
				<span >0</span>				</h4>
				<p>Nợ</p>
				<h4><span >0</span></h4>
			</div>
		</div>
	</div>
	
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    
    <Chart/>
    
	</div>
	
</div>
</div>

   
    );
  }
}


export default Content;