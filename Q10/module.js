exports.Prime = function (num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return `The given number ${num} is not prime `;
    }
  }
  return `The given number ${num} is prime `;
};
