import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';






class Modalbody extends Component {
  
  // shouldComponentUpdate(nextProps, nextState)
	// {
  //  if((JSON.stringify(nextProps.form) == JSON.stringify(this.props.form)) )
	// 	{
  //     return false;
  //   }
  //   return true;
	// }


 
  
  render() 
  
  {
      console.log('form nha')
    return (
       <div class="modal-body">
					<div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Mã khách hàng</b>
                    </div>
                    <div class="col-md-9">
					  <input type="text" 
					   type="text" 
					   name="id" 
					   value = {this.props.form.room}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputIdRoom : {
                type : 'CHANGE_ROOM_IDROOM',
                data : e.target.value
              }
            }})}}
					   placeholder="Nhập mã khách hàng" 
					   class="form-control" />
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Tên khách hàng</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập tên khách hàng"
					  class="form-control"/>
                    </div>
                </div>
                {/* <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Số điện thoại</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập số điện thoại"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Email</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập Email"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Địa chỉ</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập địa chỉ"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Chú thích</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập chú thích"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Ngày sinh</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập ngày sinh"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Giới tính</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập ghi nợ"
					  class="form-control"/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Ảnh đại diện</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Chọn ảnh "
					  class="form-control"/>
                    </div>
                </div> */}
                
                
					</div> 
    )
    

}
}
const  mapStateToProps = state =>{
  
    return{
      form : state.formcustomer
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return {
    onChange : (data)=>{
      dispatch(data)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modalbody);