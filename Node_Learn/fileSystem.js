const fs = require("fs");

// reading file asynchronously
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString())
// });

// console.log('last line')

// writing file
// fs.writeFile("./docs/blog1.txt", "Hello world", () => {
//   console.log("file was written successfully");
// });

// fs.writeFile('./docs/blog2.txt', "Hello again", () => {
//     console.log("file was written successfully");
//   });

// directories file

fs.mkdir("./assets1", (err) => {
 if(err){
    console.log(err)
 }
 console.log("directories created");
});

// deleting files
