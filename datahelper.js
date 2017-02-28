module.exports = function insertData (result, name) {
  let data = result.rows;

   if (data.length == 1){
     console.log("Found" + data.length + " person(s) by the name " + data[0].first_name);
     console.log("-"+ data.length + ", " + data[0].first_name +" "+ data[0].last_name + " born "  + data[0].birthdate.toDateString());
   } //output: 1
}