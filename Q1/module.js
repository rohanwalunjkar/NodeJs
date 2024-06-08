exports.add = function (a, b) {
    return a + b;
}

exports.sub = function (a, b) {
    return a - b;
}

exports.mul = function (a, b) {
    return a * b;
}

exports.div = function (a, b) {
    return a / b;
}

exports.square = function (a) {
    return a ** 2
}

exports.sum = function (...arr) {
    sum = 0;
    for (var a of arr) {
        sum += a;
    }
    return sum;
}


