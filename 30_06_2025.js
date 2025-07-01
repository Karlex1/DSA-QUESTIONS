// merge two sorted array in case of duplicate 
function merge(arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  const merged = [];

  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      // Both are equal: add both
      merged.push(arr1[i]);
      merged.push(arr2[j]);
      i++;
      j++;
    }
  }

  // Add remaining elements (if any)
  while (i < n1) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < n2) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// besttimetobuyandsell
function BestTimeToBuyAndSell(arr) {
  let minPrice = Infinity;
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else if (arr[i] - minPrice > profit) {
      profit = arr[i] - minPrice;
    }
  }
  return profit;
}
