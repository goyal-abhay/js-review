const data = require("./test.cjs");

let sumOfSalaries = (data) => {
  // let s = 0;
  // for (let id in data) {
  //   s += Number(data[id]["salary"].slice(1)) * 10000;
  // }
  // return s;

  const s = data.reduce(
    (acc, obj) => acc + Number(obj["salary"].slice(1)) * 10000,
    0
  );
  return s;
};

console.log(sumOfSalaries(data));
