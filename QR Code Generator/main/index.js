/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
https://www.npmjs.com/package/
*/

import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
//to replace require('fs') from below
import fs from 'fs';

inquirer
  .prompt([
    // we need to pass a question which is an object in the inquirer package, check documentation
    /* Pass your questions in here */
    {
        message: "Type in your URL: ",
        name:"URL" //the data inputted will go inside a var called URL
    }//we need the curly braces bc it is a js object
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

      // fs.readFile('./URL.txt', 'utf8', (err, data) => {
      //   if (err) throw err;
      //   console.log(data);
      // }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
