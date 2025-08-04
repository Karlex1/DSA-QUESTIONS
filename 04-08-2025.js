/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let n = fruits.length;
    let map = new Map(); 
    let j = 0, max = 0;

    for (let i = 0; i < n; i++) {
       
        map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);

       
        while (map.size > 2) {
            map.set(fruits[j], map.get(fruits[j]) - 1);
            if (map.get(fruits[j]) === 0) {
                map.delete(fruits[j]);
            }
            j++;
        }

       
        max = Math.max(max, i - j + 1);
    }

    return max;
};
