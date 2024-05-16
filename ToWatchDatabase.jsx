import React from 'react';
import SQLite from 'react-native-sqlite-storage';

const dbConnection = SQLite.openDatabase({name: 'toWatchUserList', location: 'default'});

export function init() {
    const query = `CREATE TABLE IF NOT EXISTS toWatchUserList(
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       title TEXT,
                       year TEXT,
                       movieId VARCHAR(15))`;
    try {
        dbConnection.transaction(tx => {
            tx.executeSql(query, [], () => console.log("table created"));
        }, (error) => {console.error(error);});
    }
    catch(error) {
        console.log(error);
    }

}

export function addMovie(title, year, movieId) {
    const query = `INSERT INTO toWatchUserList(title, year, movieId)
                   SELECT ?, ?, ? WHERE NOT EXISTS(
                   SELECT 1 FROM toWatchUserList WHERE movieId = ?)`;

    try {
        dbConnection.transaction(tx => {
            tx.executeSql(query, [title, year, movieId, movieId], () => {
                console.log("row inserted");
            }, (txError, error) => {
                console.error("Error inserting row: ", error);
            });
        }, (error) => {
            console.error("Transaction error: ", error);
        }, () => {
            console.log("Transaction success!");
        });
    } catch (error) {
        console.error("Caught an exception: ", error);
    }

}

export function getMoviesList() {
    const data = [];
    try {
        dbConnection.transaction(txn => {
            txn.executeSql('SELECT * FROM toWatchUserList',
            [],
            (sqlTxn, res) => {
                let len = res.rows.length;
                for(let i = 0; i < len; i++) {
                    data.push(res.rows.item(i));
                }
            });
        });
    }
    catch(error) {
        console.log(error.message);
        alert('Something goes wrong.');
    };

    return data;
}

export function deleteMovie(movieId) {
    try {
        dbConnection.transaction(tx => {
           tx.executeSql('DELETE FROM toWatchUserList WHERE movieId = ?',
           [movieId], () => console.log("Deleted movie with movieId: " + movieId),
           (error) => console.error("Delete movie error: " + error)),
           () => console.log('Transaction success'),
           (error) => console.error('transaction error')
        });
    }
    catch(error) {
        console.log("Catch delete exception: " + error);
    }
}
