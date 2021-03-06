import { combineReducers } from 'redux';
import  rooms from './rooms';
import status from './status';
import stttable from './stttable';
import * as event from './eventtable';
import navigation from './navigation';
import * as form1 from './formtable';
import * as form from './form';

//Edit Type
import * as modal from './modal'
import * as formCustomer from './formcustomer';
import styleEvent from './styleevent'
import * as tap from './tap'
import * as table from './table';
import actionPrevent from './actionprevent';

const appReducers = combineReducers({
    table : combineReducers({
        index : table.index,
        count : table.count,
        data : table.data
    }),
    stttable,
    event : combineReducers ({
       room : event.room,
        table: event.table,
        status : event.status,
        // id_supplier : event.id,
        // name_supplier : event.name,
        // email_supplier : event.email,
        // phone_supplier : event.phone
    }),
    navigation,
    formtable : combineReducers({
        idtable : form1.idtable,
        name : form1.name,
        idarea : form1.idarea,
        status : form1.status,
        bill : form1.bill
    }),

    /////////// Edit Reducers (ROOM) ///////////////////////

    showModal : combineReducers({
        mTable : combineReducers({
            text : modal.t_Text,
            classOntap : modal.t_Ontap,
        }),
        mRoom : combineReducers({
            text : modal.r_Text,
            classOntap : modal.r_Ontap
        }),
    
    }),
    formcustomer : combineReducers({
        room : formCustomer.room,
        name : formCustomer.name,
        id : formCustomer.id,
        onSearch : formCustomer.search

    }),
    eventUpdate_Insert : styleEvent,
    rooms ,
    status,
    onTap : combineReducers({
        room : tap.room,
        table : tap.table,
        btnRoom : tap.btnRoom,
        btnTable : tap.btnTable

    }),

    //event preventDefault
    actionPrevent,
   
    form_onChange : combineReducers({
        indexsupplier : form.index_supplier,
        idsupplier : form.idsupplier,
        namesupplier : form.namesupplier,
        emailsupplier : form.emailsupplier,
        phonesupplier : form.phonesupplier,
        addresssupplier : form.addresssupplier,
        notesupplier : form.notesupplier,
        debitsupplier : form.debitsupplier,
        avatarsupplier : form.avatarsupplier,

        /////////////////// SEARCH

        id_name_search_supplier : form.id_name_search_supplier,
        debit_search_supplier : form.debit_search_supplier

    })
 
});

export default appReducers;