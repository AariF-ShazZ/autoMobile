const array = [3, 4, 5, 6, 64, 4, 3, 7, 8, 9, 4, 4];
let arr = [];

let left = 0, right = array.length - 2;

while (left < right) {
  let min = Infinity, max = -Infinity, temp = [], tempIndex = [];

  for (let i = 0; i < 3; i++) {
    temp.push(array[left + i]);
    tempIndex.push(left + i);

    if (array[left + i] > max) {
      max = array[left + i];
    }

    if (array[left + i] < min) {
      min = array[left + i];
    }
  }

  let mid = temp.filter((ele) => ele !== min && ele !== max);

  let obj = {
    [tempIndex[0]]: min,
    [tempIndex[2]]: max,
    [tempIndex[1]]: mid[0]
  };

  arr.push(obj);

  left += 3;
}

console.log(arr);





// [
//     {
//         0:3,
//         1:4,
//         2:5,
//     },
//     {
//         3:6
//     }
// ]