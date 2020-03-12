var mysql = require('mysql');
import User from './models/user';

const uuid = require('uuid/v4');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kv12Rs3C4Rb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const users = [
    {
        userID: uuid(),
        firstName: 'hamza',
        lastName: 'touhs',
        auiID: 67745,
        balance: 420.0
    },
    {
        userID: uuid(),
        firstName: 'younes',
        lastName: 'elhjouji',
        auiID: 67747,
        balance: 42765.0
    },
    {
        userID: uuid(),
        firstName: 'reda',
        lastName: 'herradi',
        auiID: 67964,
        balance: 424211.0
    },
    {
        userID: uuid(),
        firstName: 'yasmine',
        lastName: 'elhousni',
        auiID: 67777,
        balance: 123431.0
    },
    {
        userID: uuid(),
        firstName: 'imane',
        lastName: 'herradi',
        auiID: 67275,
        balance: 4123453.0
    },
    {
        userID: uuid(),
        firstName: 'salma',
        lastName: 'ibenyahia',
        auiID: 46243,
        balance: 420.0
    },
    {
        userID: uuid(),
        firstName: 'karim',
        lastName: 'aymani',
        auiID: 45674,
        balance: 1234567865.0
    },
    {
        userID: uuid(),
        firstName: 'abid',
        lastName: 'riduan',
        auiID: 34598,
        balance: 120439.0
    },
    {
        userID: uuid(),
        firstName: 'maha',
        lastName: 'hamdi',
        auiID: 67798,
        balance: 2435463.0
    },
    {
        userID: uuid(),
        firstName: 'who',
        lastName: 'dat',
        auiID: 67769,
        balance: 420.0
    },
    {
        userID: uuid(),
        firstName: 'flawles',
        lastName: 'war',
        auiID: 98789,
        balance: 420.0
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, );

// Go through each movie
users.map(data => {
    // Initialize a model with movie data
    const user = new User(data);
    // and save it into the database
    user.save().catch(err => {console.log(err)});
});