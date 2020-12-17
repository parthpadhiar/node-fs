const fs = require("fs");

fs.readFile("demo1.txt", (err, data) => {
  if (err) {
    return err;
  }
  console.log(data.toString());
});

fs.open("demo1.txt", "r", (err, data) => {
  if (err) {
    return err;
  }
  console.log(data);
});

fs.appendFile("demo1.txt", "Hello world", (err) => {
  if (err) {
    return err;
  }
});

fs.writeFile("demo1.txt", "Hello world", (err) => {
  if (err) {
    return err;
  }
});

fs.unlink("demo1.txt", (err) => {
  if (err) {
    return err;
  }
  console.log("File deleted!");
});

fs.rename("demo1.txt", "test.txt", (err) => {
  if (err) {
    return err;
  }
  console.log("File deleted!");
});
