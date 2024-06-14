area = function (r) {
  return 3.14 * r * r;
};

circumference = function (r) {
  return 2 * 3.14 * r;
};

exports.calculation = function (r) {
  str = "";
  str = `The Area of circle is ${area(r)} <br>`;
  str += `The Circumference of circle is ${circumference(r)} <br>`;

  return str;
};
