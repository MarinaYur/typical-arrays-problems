
exports.min = function min (array) {
  if (array && array.length !== 0) {
    return Math.min.apply(Math, array);
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length !== 0) {
    return Math.max.apply(Math, array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length !== 0) {
    return array.reduce((total, item) => total + item, 0) / array.length;
  }
  return 0;
}
