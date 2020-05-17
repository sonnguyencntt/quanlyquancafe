import React, { Component } from 'react';









class Content extends Component {
  
 
   // console.log(this.props.history.match.params.id);
 
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
<div class="row customer-act act">
    <div class="col-md-5">
        <h3 class="dashboard-title">DANH SÁCH PHIẾU NHẬP</h3>
    </div>
    <div class="col-md-7 text-right action">
        <button class="btn btn-success size-button" data-toggle="modal" data-target="#AddCustomerModal"><i class="fa fa-plus" aria-hidden="true"></i> Tạo Phiếu Nhập</button>
    </div>
</div>
<div class="row filter-search margin-search">
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
		<input type="text" name="txtwarehousing" class="form-control size-group" placeholder="Nhập mã phiếu nhập để tìm kiếm"/>
	</div>
	<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		<div class="input-group flex">
			<input type="date" class="form-control size-group"/>
	        <div  className="from">
	          <span >Đến</span>
	        </div>
        	<input type="date" class="form-control size-group" />
      	</div>
	</div>
	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">
		<button class="btn btn-primary size-button"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
	</div>
	
</div>
<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-table">
	
	<div class="panel panel-primary set-border">
		  <div class="panel-heading set_typecolor">
				<h3 class="panel-title">Thông Tin</h3>
		  </div>
		  <div class="panel-body">
				
				<div class="table-responsive">
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
	
	</div>
	
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		
		<ul class="pagination pagination-lg float-pagination">
			<li><a href="#">&laquo;</a></li>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
			<li><a href="#">&raquo;</a></li>
		</ul>
		
	</div>
	
</div>
	
</div>
</div>

   
    );
  }
}


export default Content;