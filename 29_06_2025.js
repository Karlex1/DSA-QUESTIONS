//Find duplicate in array return first duplicate or null;
function findDuplicate(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = 1;
  }

  return null;
}
// check duplicate 
const containsDuplicate = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    }
    map[nums[i]] = 1;
  }
  return false;
};
// length of unique array
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let last = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[last]) {
      last++;
      arr[last] = arr[i];
    }
  }
  return last + 1; // length of unique array
}

// unique array(Remove duplicate  in sorted in place 
function removeDuplicates(arr) {
  let last = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[last]) {
      last++;
      arr[last] = arr[j];
    }
  }
  return arr.slice(0, last + 1);
}
// top k frequent 
var topKFrequent = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    // Convert the object to array of [num, freq]
    let arr = Object.entries(map);

    // Sort descending by frequency
    arr.sort((a, b) => b[1] - a[1]);

    // Take top k elements
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(arr[i][0]));
    }

    return result;
};
