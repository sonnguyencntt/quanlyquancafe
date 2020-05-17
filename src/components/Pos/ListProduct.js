import React, { Component } from 'react';



///////







///////////
class ListProduct extends Component {
  
   // console.log(this.props.history.match.params.id);
 
  render() 
  
  {
    return (
     
       
        <div class="row product-list">
        <div class="col-md product-list-content">
            <ul>
               
                        <li class="tb-active"><a href="#" onclick="cms_select_menu()" title="">
                        <div class="img-product">
                        </div>
                        <div class="product-info">
                            <span class="product-name"></span>
                            <strong></strong>
                        </div>
                    </a>
                </li>
               
                
            </ul>
        </div>
    </div>

    );
  }
}

export default ListProduct;