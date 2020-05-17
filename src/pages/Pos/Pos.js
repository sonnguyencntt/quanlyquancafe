import React, { Component } from 'react';
import Header from './../../components/Pos/Header';
import Tabs from '../../components/Pos/Tabs';









class Pos extends Component {
  constructor(props){
    super(props);
    
  }
 
 onClick = () =>{
   this.setState({});
 }
  render() 
  
  {
    return (
    <div>
      
      
     <div>
      <Header/>
     </div>
    
     <div class="container-fluid margin-content">
     <div class="row content">

      <Tabs/>
      <div class="col-md-6 content-listmenu" id="content-listmenu">
				<div class="row" id="bill-info">
					
					<div class="col-md-12 ">
						<div class="col-md-12 p-0 input-group flex">
							<input type="text " id="customer-infor" placeholder="Tìm khách hàng" class="form-control size-tab"/>
							<div class="input-group-append">
    							<button class="btn btn-primary size-tab" data-toggle="modal" data-target="#ModelAddcustomer"><i class="fa fa-plus" aria-hidden="true"></i></button>
  							</div>
							<div id="result-customer"></div>
							<span class="del-customer"></span>
						</div>
					</div>
					
				</div>
				<div class="panel panel-primary set-border">
		  <div class="panel-heading set_typecolor">
				<h3 class="panel-title">Danh sách sản phẩm</h3>
		  </div>
		  <div class="panel-body">
				
				<div class="table-responsive bill-detail-content">
					<table class="table table-hover">
						<thead>
							<tr>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				
		  </div>
	</div>
				{/* <div class="row bill-detail">
					<div class="col-md-12 bill-detail-content">
						<table class="table table-bordered">
						  <thead class="thead-light">
						    <tr>
						      <th scope="col">STT</th>
						      <th scope="col">Tên sản phẩm</th>
						      <th scope="col">Số lượng</th>
						      <th scope="col">Gía bán</th>
						      <th scope="col">Thành Tiền</th>
						      <th scope="col"></th>
						    </tr>
						  </thead>
						  <tbody id="pro_search_append">
						    	
						  </tbody>
						</table>
					</div>
				</div> */}
				<div class="row bill-action margin-bill-action">
					<div class="col-md-6 margin-payment">
						<div class="row">
							<div class="col-md-12 p-1">
								<textarea class="form-control" id="note-order" placeholder="Nhập ghi chú hóa đơn" rows="3"></textarea>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-xs-6 p-1 button-left">
								<button type="button" class="btn-print" onclick="cms_save_table()"><i class="fa fa-credit-card" aria-hidden="true"></i> Thanh Toán (F9)</button>
							</div>
							<div class="col-md-6 col-xs-6 p-1 button-right">
								<button type="button" class="btn-pay" onclick="cms_save_oder()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu (F10)</button>
							</div>
						</div>
 					</div>
 					<div class="col-md-6">
 						<div class="row form-group">
							<label class="col-form-label col-md-4"><b>Tổng cộng</b></label>
							<div class="col-md-8">
								<input type="text" value="0" class="form-control total-pay" disabled="disabled"/>
							</div>
						</div>
						<div class="row form-group">
							<label class="col-form-label col-md-4"><b>Khách Đưa</b></label>
							<div class="col-md-8">
								<input type="text" class="form-control customer-pay" value="0" placeholder="Nhập số điền khách đưa"/>
							</div>
						</div>
						<div class="row form-group">
							<label class="col-form-label col-md-4"><b>Tiền thừa</b></label>
							<div class="col-md-8 excess-cash">
								0
							</div>
						</div>
 					</div>
				</div>
			</div>
			</div>
	</div>
     

      
    </div>

   
    );
  }
}


export default Pos;