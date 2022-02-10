const fs = require("fs");
const path = require("path");
const { argv } = require("process");

const getAllFiles = (dirPath, arrayOfFiles) => {
  let filesArr = arrayOfFiles || [];
  try {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        filesArr = getAllFiles(`${dirPath}/${file}`, filesArr);
      } else {
        filesArr.push({
          name: path.join(__dirname, dirPath, "/", file),
          size: fs.statSync(`${dirPath}/${file}`).size,
        });
      }
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
  return filesArr;
};
const result = getAllFiles(argv[2])
  .sort((a, b) => a.size - b.size)
  .map(
    (item) =>
      `${item.name} ----------- ${item.size} kb (${(
        item.size /
        (1024 * 1024)
      ).toFixed(3)} MB)`
  );
const file = fs.createWriteStream("log.txt");
file.on("error", (err) => {
  console.log(err);
});
result.forEach((v) => {
  file.write(`${v}\n`);
});
file.end();
