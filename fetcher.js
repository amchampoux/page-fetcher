const request = require('request');
const fs = require('fs');
const myArgs = process.argv.slice(2);
const URL = myArgs[0];
const localFilePath = myArgs[1];


request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const content = 'Some content!';

fs.writeFile(localFilePath, content, err => {
  const fileSixe = content.length + ' bytes';
  if (err) {
    console.error(err);
  }
  console.log('Downloaded and saved ' + fileSixe + ' to ' + localFilePath);
});