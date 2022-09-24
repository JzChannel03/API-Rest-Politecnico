"use strict"

class MYSQLDB{
    dbConfig = require('../db.config.json');
    #mySqlConnection = require('mysql');
    connection = this.#mySqlConnection.createConnection(this.dbConfig);

    /*query(queryString){
        let value = null;
        let done = false;
        this.connection.query(queryString, [],  (err, val) => {
            value = val;
            done = true;
        });
        deasync.loopWhile(() => !done);

        return value;
    }*/

    query(queryString, cb){
        this.connection.query(queryString, [],  (err, val) => {
            cb(val);
        });
    }

}

module.exports = MYSQLDB;