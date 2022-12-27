const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database2.db');

db.serialize(() => {

    db.run(`
      CREATE TABLE IF NOT EXISTS ideas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
      )
    `);

    // const query =  `INSERT INTO ideas(image, title, category, description, link) VALUES (?,?,?,?,?);`;
    // const values = [
    //   "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    //   "Karaokê",
    //   "Diversão em Familia",
    //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos nihil tempora architecto, facilis quisquam fugit corrupti cupiditate omnis consectetur, sit consequuntur. Quae cupiditate mollitia ea quisquam deleniti ex obcae",
    //   "https://google.com"
    // ]
    // db.run (query, values, function(err) {
    //   if(err) return console.log(err)

    //   console.log(this)
    // })

//    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function (err){
//    if(err) {return console.log(err)}

//    })

//    db.all(`SELECT * FROM ideas`, function (err, rows) {
//      if(err) return console.log(err)
//    });
  })

module.exports = db;