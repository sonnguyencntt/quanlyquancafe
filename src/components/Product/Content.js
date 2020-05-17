import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';









class Content extends Component {
  
 
   // console.log(this.props.history.match.params.id);
 
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
<div class="row act">
	<div class="col-md-5">
    <h3 class="dashboard-title">DANH SÁCH THỰC ĐƠN</h3>
	</div>
	<div class="col-md-7 text-right action">
		<button class="btn btn-success size-button" onclick="cms_addprodcut()"><i class="fa fa-plus" aria-hidden="true"></i> Thêm món ăn</button>
		<button class="btn btn-success size-button" data-toggle="modal" data-target="#AddCategoryModal"><i class="fa fa-th-list" aria-hidden="true"></i> Thêm danh mục</button>
	</div>
</div>
<div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input type="text" name="txtproductname" placeholder="Nhập mã hoặc tên sản phẩm" class="form-control size-button"/>
	</div>
	<div class="col-md-3 form-group">
		<select class="form-control size-button">
			<option>Đang kinh doanh</option>
			<option>Ngừng kinh doanh</option>
		</select>
	</div>
	<div class="col-md-2 form-group">
		<select class="form-control size-button">
			<option>Đồ ăn</option>
			<option>Thức uống</option>
		</select>
	</div>
	<div class="col-md-2 form-group">
		<button class="btn btn-primary size-button"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
	</div>
</div>
{/* <div class="row act">
	<div class="col-md-5">
		<h3 class="dashboard-title">THỰC ĐƠN</h3>
	</div>
	<div class="col-md-7 text-right action">
		<button class="btn btn-success size-button" data-toggle="modal" data-target="#ModalAddTable"><i class="fa fa-plus" aria-hidden="true"></i> Thêm phòng/bàn</button>
		<button class="btn btn-success size-button" data-toggle="modal" data-target="#ModalAddGroup"><i class="fa fa-list" aria-hidden="true"></i> Thêm nhóm</button>
		
		<button class="btn btn-success size-button">
			<i class="fa fa-sign-out" aria-hidden="true"></i> Xuất file
		</button>
	</div>
</div> */}
{/* <div class="row customer-act act">
	<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
		<h3 class="dashboard-title">DANH SÁCH HÓA ĐƠN</h3>
	</div>
	<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 text-right action">
		<button class="btn btn-primary size-button" onclick="cms_load_importware()"><i class="fa fa-desktop" aria-hidden="true"></i> Bán hàng</button>
		<button class="btn btn-success size-button"><i class="fa fa-sign-out" aria-hidden="true"></i> Xuất file</button>
	</div>
</div> */}
{/* <div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input type="text" name="txtproductname" placeholder="Nhập mã hoặc tên bàn" class="form-control size-group"/>
	</div>
	<div class="col-md-2 form-group p-0">
		<select class="form-control size-group">
			<option>Tầng trệt</option>
			<option>Sân vường</option>
		</select>
	</div>
	<div class="col-md-2 form-group">
		<select class="form-control size-group">
			<option>Tất cả</option>
			<option>Hoạt động</option>
			<option>Ngừng hoạt động</option>
		</select>
	</div>
	<div class="col-md-3 form-group">
		<button class="btn btn-primary size-group"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
	</div>
</div> */}
{/* <div class="row filter-search margin-search">
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
	
</div> */}
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