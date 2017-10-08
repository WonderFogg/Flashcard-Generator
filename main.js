var fs = require('fs');

var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!!
});


// fs.writeFile('message.txt', 'Hello Node.js', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


// var request = require('request');
// request('http://www.google.com', function(error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
;