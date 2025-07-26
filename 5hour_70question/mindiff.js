/*Brute Force):
Generates all pairs in the array.

Calculates absolute differences.

Stores pairs in a map where the key is the difference.

Finds and returns pairs with the minimum absolute difference.

Time Complexity: O(n²)
(Good for small inputs, slow for large ones.)

🚀 Optimized Approach (Recommended):
Sorts the array first.

Only checks adjacent elements, since sorted pairs yield smallest differences.

Tracks the minimum difference and collects all such pairs.

Time Complexity: O(n log n)
(Much faster, works well for large arrays.)*/

// /**
//  * @param {number[]} arr
//  * @return {number[][]}
//  */
// var minimumAbsDifference = function(arr) {
//     let map={}
//     let i=0;
//     while(i<arr.length-1){
//         let j=i+1;
//         while(j<arr.length){
//             let curr=Math.abs(arr[i]-arr[j]);
            
//             if(!map[curr]){
//                 map[curr]=[]
//             }
//             map[curr].push([arr[i],arr[j]]);j++;
//         }
//         i++;
//     }
//     console.log(map)
//     let min=Math.min(...Object.keys(map).map(Number));
//     return map[min];
// };


var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let minDiff=Infinity,result=[];
    for(let i=1;i<arr.length;i++){
        let diff=arr[i]-arr[i-1];
        if(diff<minDiff){
            minDiff=diff;
            result=[[arr[i-1],arr[i]]]

        }else if(minDiff===diff){
            result.push([arr[i-1],arr[i]])
        }
    }
    return result;
}
