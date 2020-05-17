import * as Types from './../constants/ActionType';
import callApi from './../ultis/apiCaller';
export const acFetchRoomsRequest = (data) => {
     return (next, getstate, extra) =>{

         callApi('query/selectalldata', 'POST', data).then(res =>{
           console.log(res);
           next({type : {
               fetch_room :{
                   type : 'FETCH_ROOMS',
                   data : res.data
               }
           }});
          
        });

    };
}
export const acInsertRoomsRequest = (data, statusEvent) => {
   
    var status  = {};
    return next =>{
                   
        if(statusEvent == true)
        {
            callApi('query/insertdata', 'POST', data).then(res =>{
              if(typeof res.data.error == 'undefined' ){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               mroom_ontap : {
                   type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                   event : 'hide-modal',
                       }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }

               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
        }
        else{

            callApi('query/updatedata', 'POST', data).then(res =>{

                if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Chỉnh sửa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               mroom_ontap : {
                   type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                   event : 'hide-modal',
                       }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }

               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
   
              
             
           }).catch((err) =>{console.log(err)});
        }
   

    };
    
}
export const acInsertRooms = (data) =>{
    
    return {

        type : data
        // type : Types.INSERT_PRODUCT,
        // room,
        // status
    }
}
// 
export const acDeleteRoomsRequest = (id) => {
    var status  = {};


    return next =>{
       
         callApi('query/deletedata', 'POST', id).then(res =>{

            
             if(typeof res.data.error == "undefined"){
                 if(res.data.data == "ERR-14-06-1999")
                 {

                    status = {
                       status : 'success',
                       classcomponent : 'alert alert-success',
                       text : 'Xóa dữ liệu không thành công thành công ^-^',
                       display : 'show-alert'
                   }
                   
       
                   // next(acInsertRooms(res.data, status))
                   next({type : { status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   },
                 
               }
               })
                   
                   status = {
                       status : 'success',
                       classcomponent : 'alert alert-success',
                       text : 'Thêm mới dữ liệu thành công ^-^',
                       display : 'hide-alert'
                   }

                   setTimeout(function(){
       
       
       
                       next({type : {status_event :{
                           type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                           status:status
                       }}})
       
                   }, 2000);
                 }
                 else
                 {
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
             
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
                 }
                
              }
              //
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
          
        });

    };
}
export const actDeleteProduct = (product) =>{
    return {
        type : Types.DELETE_PRODUCT,
        product
    }
}
export const acUpdateTableRequest = (data) =>{

  
    var status  = {};
    return next =>{
                   
        //if(statusEvent == true)
        //{
            callApi('query/updatedata', 'POST', data).then(res =>{
               
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Chỉnh sửa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
            table_count : {
               type : 'FETCH_COUNT_TABLES',
               count : res.data.count
            },
            table_index : {
                type : 'FETCH_INDEX_TABLES',
                index : data.index
            }, 
            mtable_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
                   
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
   
              
             
           }).catch((err) =>{console.log(err)});
   
   

    };

}
export const actUpdateProduct = (product) =>{
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}
export const acSearchRoomsRequest = (name) =>{

    return next =>{
       
        callApi('query/searchdata', 'POST', name).then(res =>{
          console.log(res);
            next({type : {
                fetch_room :{
                    type : 'FETCH_ROOMS',
                    data : res.data
                }
            }});
         
       }).catch((err) => {console.log(err)})

   };

}
export const acFetchTableRequest = (data) => {
   
    return next =>{
         callApi('query/selectalldata', 'POST',data ).then(res =>{
           console.log(res);
           
             next({type : {
                 fetch_table : {
                     type : 'FETCH_TABLES',
                     data : res.data.data
                 },
                 table_count : {
                    type : 'FETCH_COUNT_TABLES',
                    count : res.data.count
                 },
                 table_index : {
                     type : 'FETCH_INDEX_TABLES',
                     index : data.index
                 }

             }})
          
        });

    };
}
export const acFetchTable = (tables, index, status, acForNavigation) =>{
   
    return {
        type : Types.FETCH_TABLES,
       data : acForNavigation,
        status : status,
        tables : {
            data : tables.data,
            count : tables.count,
            index : index.index
        }
    }
}
export const acFetchsttTableRequest = () => {
   
    return next =>{
       
         callApi('getstt', 'get',null ).then(res =>{
           
           next(acFetchsttTable(res.data));
          
        });

    };
}
export const acFetchsttTable = (status) =>{
    
    return {
        type : Types.FETCH_STTTABLE,
        status
    }
}
export const acSearchTablesRequest = (data, index) => {
    return (next, getstate, extra) =>{
        callApi('query/searchdata', 'post', data).then(res =>{
          
          
          next(acFetchTable(res.data, index,''));
         
       }).catch((err)=>{console.log(err)});

   };
}

export const acInsertTableRequest = (data, statusEvent) => {
   console.log(data);
    var status  = {};
    return next =>{
                   
        //if(statusEvent == true)
        //{
            callApi('query/insertdata', 'POST', data).then(res =>{
              console.log(res);
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
            table_count : {
               type : 'FETCH_COUNT_TABLES',
               count : res.data.count
            },
            table_index : {
                type : 'FETCH_INDEX_TABLES',
                index : data.index
            }, 
            mtable_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
      
   

    };
    
}

export const acDeleteTableRequest = (data) => {
  
    var status  = {};
    return next =>{
                   
       
            callApi('query/deletedata', 'POST', data).then(res =>{
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
            table_count : {
               type : 'FETCH_COUNT_TABLES',
               count : res.data.count
            },
            table_index : {
                type : 'FETCH_INDEX_TABLES',
                index : data.index
            }, 
            mtable_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
     
   

    };
    
}