Array.prototype.uniq = function () {
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;

};

Array.prototype.twoSum = function () {
  let twoSumArr = [];

  for (let i = 0; i< this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i]+this[j] === 0)
        twoSumArr.push([i,j]);
    }
  }
  return twoSumArr;
};

// let arr = [-1,0,1,2];
// arr.twoSum();

Array.prototype.transpose = function () {
  let transposeArr = new Array(this[0].length);
  for (let i = 0; i < transposeArr.length; i++) {
    transposeArr[i] = new Array(this.length);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      transposeArr[j][i] = this[i][j];
    }
  }
  return transposeArr;
};

let arr = [[1,2,3],[3,4,5]];
arr.transpose();
