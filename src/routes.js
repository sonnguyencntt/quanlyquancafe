import React  from 'react';
import Customer from './pages/Customer/Customer';
import Order from './pages/Order/Order';
import Pos from './pages/Pos/Pos';
import Product from './pages/Product/Product';
import Table from './pages/Table/Table';
import WareHousing from './pages/WareHousing/WareHousing';
import DashBoard from './pages/DashBoard/DashBoard';
import { createStore, applyMiddleware} from 'redux';
import appReducers_DashBoard from './reducers/Dashboard/index';
import appReducers_Order from './reducers/Order/index';
import appReducers_Table from './reducers/Table/index';
import appReducers_Customer from './reducers/Customer/index';



import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

function Create_Store(storeName, Component, reducer)
{
   
    storeName = createStore(
        reducer,  

        applyMiddleware(thunk) 
    ) 
    return ( <Provider store = {storeName}>
               <Component />
            </Provider>
    )

}


const routes = [

    {
        path : '/home' ,
          exact : true,
          
          main : () => {return Create_Store("storeDashBoard" , DashBoard, appReducers_DashBoard, )}
       },
  
  
   {
    path : '/customer' ,
    exact : false,
    main : () => {return Create_Store("storeCustomer" , Customer, appReducers_Customer)}
},
    {
        path : '/order' ,
        exact : false,
        icon : 'glyphicon glyphicon-home',
        main : () => {return Create_Store("storeOrder" , Order, appReducers_Order)}
    } ,
    {
        path : '/pos' ,
        exact : false,
        main : () => <Pos/>
    },
    {
        path : '/product' ,
        exact : false,
        main : () => <Product/>
    },
    {
        path : '/table' ,
        exact : false,
        main : () => {return Create_Store("storeTable" , Table, appReducers_Table)}
    },
    {
        path : '/warehousing' ,
        exact : false,
        main : () => <WareHousing/>
    },

];
export default routes;