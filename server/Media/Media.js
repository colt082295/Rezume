import walk from 'walk';
import fs from 'fs';
// import openSocket from 'socket.io-client';
let walker;
// let socket = openSocket('http://localhost:4001');
// socket.on('console', message => console.log(message));

function addMedia(dir) {
  // socket.emit('console', "Timeout done 1")
  console.log("Runinng media function!");
  // setTimeout(() => socket.emit('console', "Timeout done 1"), 5000);
      if (!process.env.BROWSER) {
        // setTimeout(() => socket.emit('console', "Timeout done"), 5000);
        // let dirs;
        // let files = [];
        // // console.log("Walking");
        // walker = walk.walk(dir);
        // walker.on('file', (root, fileStats, next) => {
        //   fs.readFile(fileStats.name, () => {
        //     files.push(fileStats.name);
        //     next();
        //   });
        // });
        // walker.on('directories', (root, dirStatsArray, next) => {
        //   // dirStatsArray is an array of `stat` objects with the additional attributes 
        //   // * type 
        //   // * error 
        //   // * name 
        //   dirs = dirStatsArray.map((item, i) => {
        //     return item.name;
        //   });
        //   next();
        // });
        // walker.on("end", () => {
        //     setTimeout(() => resolve("done!"), 5000);
        // })
      }
}

export default addMedia;
