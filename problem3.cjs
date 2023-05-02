const data = require("./test.cjs");

let correctedSalary = (data) => {
  // for (let id in data) {
  //   const salary = Number(data[id]["salary"].slice(1)) * 10000;
  //   data[id]["corrected_salary"] = salary;
  // }
  // return data;

  data.map(
    (obj) => (obj["corrected_salary"] = Number(obj["salary"].slice(1) * 10000))
  );
  return data;
};

console.log(correctedSalary(data));
