const db = require('./data');
const cors = require('cors');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


const connection = mysql.createConnection({
    connectionLimit: 5,
    host:"localhost",
    user: "root",
    port: 3306,
    password: "root1234"
});
let newUser = {
    'user_id': 6,
    'firstName': 'John',
    'lastName': 'Smith',
    'auiID': 67890,
    'balance': 100.00
};
let selectAllUsers = `SELECT * FROM react_test.user`;
let addUser = `INSERT INTO react_test.user (user_id, firstName, lastName, auiID, balance) VALUES(${newUser.user_id},${newUser.firstName},${newUser.lastName},${newUser.auiID},${newUser.balance} )`;

connection.connect(err => {
    if(err) throw err;
    console.log(connection);
});

app.set('port', process.env.port || port);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse form data client

app.get('/', (req, res) => {
    connection.query(selectAllUsers, (err, results) => {
        if (err) {
            return err;
        } else {
            return res.json({
                data: results
            })
        }
    })
});

app.post('/add', (req, res) => {
    connection.query(addUser, (err, results) => {
        console.log(req);
        if (err) return err;
        else return res.json({
            data: results
        })
    })
});

// db.get(pool, sql)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
// let sql = `SELECT * FROM react_test.user`;
// db.get(pool, sql);


