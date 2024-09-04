let sOne = `frontEnd Web developer`;
let sTwo = `Mobile App Developer`;

let desicnation = [sOne, sTwo];

let obj = {
  firstName: "Asaduzzaman",
  lastName: "Asad",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getName: function () {
    return `${this.fullName()}`;
  },
};

let func = function () {
  const bio = `${this.getName()}  ${desicnation} `;
  return bio;
};

console.log(func.apply(obj, desicnation));

let scores = [80, 90, 70];

for (let [idx, value] of scores.entries()) {
  console.log(`${idx} and the value is ${value}`);
}

