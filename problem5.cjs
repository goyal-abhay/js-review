const data = require("./test.cjs");

let sumOfSalaryBasedOnCountry = (data) => {
  // const result = {};
  // for (let id in data) {
  //   const salary = Number(data[id]["salary"].slice(1)) * 10000;
  //   const location = data[id]["location"];
  //   result[location] = (result[location] || 0) + salary;
  // }
  // return result;

  const result = {};
  data.map((obj) => {
    const salary = Number(obj["salary"].slice(1)) * 10000;
    const location = obj["location"];
    result[location] = (result[location] || 0) + salary;
  });
  return result;
};

console.log(sumOfSalaryBasedOnCountry(data));
