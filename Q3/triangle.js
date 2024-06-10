exports.isEqui = function (s1, s2, s3) {
  if (s1 == s2 == s3) {
    return `Equilateral Triangle`;
  }
  return `NOT Equilateral Triangle`;
};

exports.calPeri = function (s1, s2, s3) {
  return s1 + s2 + s3;
};
