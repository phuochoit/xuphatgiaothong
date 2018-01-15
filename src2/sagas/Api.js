import React from "react";
import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

function* getScooterFromApi() {
    let record = [];
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Xuphat where loai_xe = 2 ORDER BY ten_loi asc limit 0,20', [], (tx, results) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                record[i] = row;
            }
        });
    }, null, null);

    return record;
}

function* getScooterLoadMoreFromApi(items) {
    console.log('getScooterLoadMoreFromApi',items);
    let record = [];
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Xuphat where loai_xe = 2 ORDER BY ten_loi asc limit '+items+',20', [], (tx, results) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                record[i] = row;
            }
        });
    }, null, null);

    return record;
}

export const Api = {
    getScooterFromApi,
    getScooterLoadMoreFromApi
}; 