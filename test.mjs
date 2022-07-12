import {myjson} from './csv.mjs' 


console.log(myjson[1].HotelName)



// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('./bot.db', sqlite3.OPEN_READWRITE, (err)=>{
//     if (err) return console.error(err.message);

//     console.log('connected to database')
// });

// // db.run("CREATE TABLE hotel (name, rating, price) ");
// db.run = "INSERT INTO hotel (name, rating, price) VALUES ('TooHot', 5 , 67)";

// db.close((err) => {
//     if (err) return console.error(err.message);
// });
