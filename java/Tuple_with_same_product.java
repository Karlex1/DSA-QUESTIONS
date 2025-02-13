class Solution {
    public int tupleSameProduct(int[] nums) {
        int n=nums.length;
        Arrays.sort(nums); int count=0;
        for(int i=0;i<n;i++){
            for(int j=n-1;j>=i+1;j--){
                int product=nums[i]*nums[j];
                HashSet<Integer> set=new HashSet<>();
                for(int k=i+1;k<j;k++){
                    if(product%nums[k]==0){
                    int need=product/nums[k];
                    if(set.contains(need)){
                      count+=8;
                    }
                    set.add(nums[k]);
                }
            }
        }
    
    }    return count;
    }}

class Solution {

    public int tupleSameProduct(int[] nums) {
        int numsLength = nums.length;

        // Initialize a map to store the frequency of each product of pairs
        Map<Integer, Integer> pairProductsFrequency = new HashMap<>();

        int totalNumberOfTuples = 0;

        // Iterate through each pair of numbers in `nums`
        for (int firstIndex = 0; firstIndex < numsLength; firstIndex++) {
            for (
                int secondIndex = firstIndex + 1;
                secondIndex < numsLength;
                secondIndex++
            ) {
                // Increment the frequency of the product of the current pair
                pairProductsFrequency.put(
                    nums[firstIndex] * nums[secondIndex],
                    pairProductsFrequency.getOrDefault(
                        nums[firstIndex] * nums[secondIndex],
                        0
                    ) +
                    1
                );
            }
        }

        // Iterate through each product value and its frequency in the map
        for (int productValue : pairProductsFrequency.keySet()) {
            int productFrequency = pairProductsFrequency.get(productValue);
            // Calculate the number of ways to choose two pairs with the same product
            int pairsOfEqualProduct =
                ((productFrequency - 1) * productFrequency) / 2;

            // Add the number of tuples for this product to the total (each pair
            // can form 8 tuples)
            totalNumberOfTuples += 8 * pairsOfEqualProduct;
        }

        return totalNumberOfTuples;
    }
}
