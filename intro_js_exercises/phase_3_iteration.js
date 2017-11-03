Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  let substringsArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      substringsArr.push(this.slice(i,j+1));
    }
  }
  return substringsArr;
};

console.log("abc".substrings());
