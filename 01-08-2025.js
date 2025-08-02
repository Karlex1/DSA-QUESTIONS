var minCost = function (basket1, basket2) {
    const freq = new Map();

    // Count total frequency
    for (const x of basket1) freq.set(x, (freq.get(x) || 0) + 1);
    for (const x of basket2) freq.set(x, (freq.get(x) || 0) + 1);

    // Check if making equal is possible
    for (const [fruit, count] of freq) {
        if (count % 2 !== 0) return -1;
    }

    const count1 = new Map(), count2 = new Map();
    for (const x of basket1) count1.set(x, (count1.get(x) || 0) + 1);
    for (const x of basket2) count2.set(x, (count2.get(x) || 0) + 1);

    const extra1 = [], extra2 = [];
    for (const [fruit] of freq) {
        const diff = (count1.get(fruit) || 0) - (count2.get(fruit) || 0);
        if (diff > 0) {
            for (let i = 0; i < diff / 2; i++) extra1.push(fruit);
        } else if (diff < 0) {
            for (let i = 0; i < -diff / 2; i++) extra2.push(fruit);
        }
    }

    // Sort  arrays ascending and descending
    extra1.sort((a, b) => a - b);
    extra2.sort((a, b) => b-a);

    const minFruit = Math.min(...basket1, ...basket2);
    let cost = 0;

    for (let i = 0; i < extra1.length; i++) {
        cost += Math.min(Math.min(extra1[i], extra2[i]), 2 * minFruit);
    }

    return cost;
};
//fails because of sorting issue
// /**
//  * @param {number[]} basket1
//  * @param {number[]} basket2
//  * @return {number}
//  */
// var minCost = function (basket1, basket2) {
//     let map = new Map();
//     for (x of basket1) map.set(x, (map.get(x) || 0) + 1)
//     for (x of basket2) map.set(x, (map.get(x) || 0) + 1)
//     //we cannot swap freeq 1 fruit
//     for (let [fruit, count] of map) {
//         if (count % 2 !== 0) return -1;
//     }
//     let map1 = new Map(), map2 = new Map(), extra1 = [], extra2 = [];
//     for (let i = 0; i < basket1.length; i++) {
//         map1.set(basket1[i], (map1.get(basket1[i]) || 0) + 1)
//         map2.set(basket2[i], (map2.get(basket2[i]) || 0) + 1)
//     }
//     // console.log(map1,map2)
//     for (let [fruit, _] of map) {
//         let diff = (map1.get(fruit) || 0) - (map2.get(fruit) || 0)

//         if (diff > 0) {
//             for (let i = 0; i < diff / 2; i++)extra1.push(fruit)
//         }
//         else if (diff < 0) {
//             for (let i = 0; i < (-diff) / 2; i++)extra2.push(fruit)
//         }
//     }
//     let cost=0;
//     extra1.sort((a,b)=>a-b),extra2.sort((a,b)=>a-b);
//     let minfruit=Math.min(...basket1,...basket2)
//     for(let i=0;i<extra1.length;i++){
//        cost+= Math.min(Math.min(extra1[i],extra2[i]),2*minfruit);
//     }
//     return cost;
// };
