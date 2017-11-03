Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
//
// Array.prototype.myMap = function (callback) {
//   let mappedArr = new Array(this.length);
//   for (let i = 0; i < this.length; i++) {
//     mappedArr[i] = (callback(this[i]));
//   }
//   return mappedArr;
// };

Array.prototype.myMap = function (callback) {
  let mappedArr = [];
  this.myEach(el => mappedArr.push(callback(el)));
  return mappedArr;
};


Array.prototype.myReduce = function (callback, initialValue) {

  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(el => result = callback(result, el));
  return result;
};

const NUMS = [1, 2, 3, 4, 5];
console.log(NUMS.myReduce( (total, item) => total + item ));
