function range(start, end) {
  if (start === end) {
    let arr = [];
    arr.unshift(start);
    return arr;
  }
  let arr = range(start+1, end);
  arr.unshift(start);
  return arr;
}

console.log(`range(3, 10) = ${range(3, 10)}`);


function sumRec(arr) {
  if (arr.length === 0){
    return 0;
  }
  if (arr.length === 1){
    return arr[0];
  }
  let sum = arr[0] + sumRec(arr.slice(1));
  return sum;
}
console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);


function exponent1(base, exp) {
  if (exp === 0){
    return 1;
  }
  let result = base * exponent1(base, exp - 1);
  return result;
}

function exponent2(base, exp){
  if (exp === 0){
    return 1;
  }
  if (exp % 2 === 0){
    let power = exponent2(base, exp/2);
    let result = power * power;
    return result;
  }
  else {
    let power = (exponent2(base, (exp-1)/2));
    let result = base * power * power;
    return result;
  }
}

console.log(`exponent1(2, 4) = ${exponent1(2, 4)}`);
console.log(`exponent2(2, 4) =  ${exponent2(2, 4)}`);
console.log(`exponent2(2, 5) =  ${exponent2(2, 5)}`);

function fibonacci(n) {
  if (n===1) {
    let arr = [1];
    return arr;
  }
  if (n===2) {
    let arr = [1,1];
    return arr;
  }
  // if (n < 3) {
  // return [0, 1].slice(0, n);
  // }

  let prevfib = fibonacci(n-1);
  let len = prevfib.length;
  let num = prevfib[len-1] + prevfib[len-2];
  prevfib.push(num);
  return prevfib;
}

console.log(`fibonacci(5) = ${fibonacci(5)}`);

function bsearch(arr, target) {
  if (arr.length===0) {
    return -1;
  }
  // if (arr.length===1) {
  //   if (arr[0]===target) {
  //     return 0;
  //   }
  //   else {
  //     return -1;
  //   }
  // }

  let len = Math.floor(arr.length/2);
  let mid = arr[len];
  if (arr[mid]===target) {
    return mid;
  }
  if (target<arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  }
  else {
    let result = bsearch(arr.slice(mid+1), target);
    if (result===-1) {
      return result;
    }
    else {
      return mid + 1 + bsearch(arr.slice(mid+1), target);
    }
  }
}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

function mergesort(arr) {
  
}
