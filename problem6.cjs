const data = require("./test.cjs");

let avgOfSalaryBasedOnCountry = (data) => {
  // const result = {};
  // const countLocation = {};
  // let count = 0;
  // for (let id in data) {
  //   const salary = Number(data[id]["salary"].slice(1)) * 10000;
  //   const location = data[id]["location"];
  //   result[location] = (result[location] || 0) + salary;
  //   countLocation[location] = (countLocation[location] || 0) + 1;
  // }
  // for (let location in result) {
  //   result[location] /= countLocation[location];
  // }
  // return result;

  const result = {};
  const countLocation = {};
  const ans = {};
  data.map((obj) => {
    const salary = Number(obj["salary"].slice(1)) * 10000;
    const location = obj["location"];
    result[location] = (result[location] || 0) + salary;
    countLocation[location] = (countLocation[location] || 0) + 1;
  });

  Object.keys(result).map((item) => {
    ans[item] = result[item] / countLocation[item];
  });

  return ans;
};

console.log(avgOfSalaryBasedOnCountry(data));
