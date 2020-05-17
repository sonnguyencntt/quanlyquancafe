import React, { Component } from 'react';
import Menu from './Menu';
import NumberTable from './NumberTable';
import MenuProduct from './MenuProduct';
import ListProduct from './ListProduct';




///////







///////////
class Tabs extends Component {
  
   // console.log(this.props.history.match.params.id);

  render() 
  
  {
    return (
     
       
        
			<div class="col-md-6 tablist-color" id="table-list">
			
      <div role="tabpanel">
          <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                  <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                  <i class="fa fa-table" aria-hidden="true"></i> &nbsp;&nbsp; Phòng Bàn</a>
              </li>
              <li role="presentation">
                  <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">
                  <i class="fa fa-list-alt" aria-hidden="true"></i> &nbsp;&nbsp;
                    Thực Đơn</a>
              </li>
          </ul>
      
          <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="home">
                <Menu></Menu>
                <NumberTable/>
              </div>
              <div role="tabpanel" class="tab-pane" id="tab">
              <MenuProduct></MenuProduct>
                <ListProduct/>
              </div>
          </div>
      </div>
      
			</div>

        

    );
  }
}

export default Tabs;