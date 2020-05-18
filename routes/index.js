import express from 'express';
var router = express.Router();
import room from './board_type/room';
import supplier from './board_type/supplier';
import table from './board_type/supplier';
import connect from './connect';

const pool = connect.pool();

console.log(pool);

