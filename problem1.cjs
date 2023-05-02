const data = require("./test.cjs");

let allWebDevelopers = (data) => {
  // const arr = [];
  // for (let id in data) {
  //   if (data[id]["job"].startsWith("Web")) {
  //     arr.push(data[id]);
  //   }
  // }
  // return arr;

  const arr = data.filter((obj) => n["job"].startsWith("Web"));
  return arr;
};

console.log(allWebDevelopers(data));
