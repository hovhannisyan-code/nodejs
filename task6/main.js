const { Readable, Transform } = require("stream");
const moment = require("moment");
const fs = require("fs");

const writeDataStream = fs.createWriteStream("log.txt");
// custom Writable Stream 
// const WritableImplement = new Writable({
//   write(chunk, encoding, next) {
//     fs.writeFile("log.txt", chunk, { encoding }, next);
//   },
// });
const createTimeStream = new Readable({
  read() {
    setTimeout(() => {
      this.push(moment().format());
    }, 1000);
  },
});
const dateFormat = new Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      `${moment(chunk.toString()).format("YYYY-MM-DD HH:mm:ss")} \r\n`
    );
  },
});
createTimeStream.pipe(dateFormat).pipe(writeDataStream);
// second variant using on data event
// createTimeStream.on("data", (chunk) => {
//   writeDataStream.write(`${chunk.toString()}\r\n`);
// });
