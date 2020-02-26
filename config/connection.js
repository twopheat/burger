// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "w0nlpqsckh7k806i",
  password: "wxmf3175i5ebs624",
  database: "pckrwa43q88yyqo9"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
