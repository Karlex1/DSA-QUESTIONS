class Solution {
    public int equalPairs(int[][] grid) {
        int n=grid.length;
        HashMap<List<Integer>,Integer> map=new HashMap<>();
        int last=0;
        for(int i=0;i<n;i++){
            List<Integer> list=new ArrayList<>();
            for(int j=0;j<n;j++){
                list.add(grid[i][j]);
            }
            map.put(list,map.getOrDefault(list,0)+1);
        }
        for(int i=0;i<n;i++){
            List<Integer> list=new ArrayList<>();
            for(int j=0;j<n;j++){
                list.add(grid[j][i]);
            }
            if(map.containsKey(list)){
                last+=map.get(list);
            }
        }
        return last;
    }
}
