const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.db', function (err) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log('Database connected');
    db.run('PRAGMA foreign_keys=ON');
  }
});

// db.get('SELECT * FROM Customers', function (err, data) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   } else {
//     console.log(data);
//   }
// });

db.all(
  'SELECT * FROM Customers WHERE customer_name=?',
  ['Edward'],
  function (err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log(data);
    }
  }
);

db.run("INSERT INTO Customers VALUES (3, 'Jennifer')", function (err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
