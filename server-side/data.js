const mysql = require('mysql');
const async = require('async');

const PROD_DB = "prod_database";
const DB_NAME = "react_test.user";


var state = {
    pool: null,
    mode: null
};

exports.get = function(pool, sql) {
    pool.query(sql, (err, result, fields) => {
        if(err) throw err;
        result.forEach((element, key) => {
            return element;
        });
    });
    return state.pool
};