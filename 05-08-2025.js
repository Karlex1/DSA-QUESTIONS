/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let res = baskets.length;
    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < baskets.length; j++) {
            if (fruits[i] <= baskets[j]) {
                res--;
                baskets[j] = 0;
                break;
            }
        }
    }
    return res;
};
