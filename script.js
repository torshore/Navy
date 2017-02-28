const pg = require("pg");
const settings = require("./settings.json");
const insertData = require("./datahelper.js")

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

 var name = process.argv.slice(2)

client.connect((err) => {

 if (err) {
   return console.error("Connection Error", err);
 }
 client.query(`SELECT * FROM famous_people WHERE last_name = '${name}' OR first_name = '${name}'`, (err, result) => {
   if (err) {
     return console.error("error running query", err);
   }
  insertData(result, name);

   client.end();
 });
});



