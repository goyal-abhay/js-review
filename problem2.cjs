const data = require("./test.cjs");

let salaryValues = (data) => {
  // for (let id in data) {
  //   let salary = Number(data[id]["salary"].slice(1));
  //   data[id]["salary"] = salary;
  // }
  // return data;

  data.map((obj) => (obj["salary"] = Number(obj["salary"].slice(1))));
  return data;
};

console.log(salaryValues(data));

module.exports = salaryValues;
