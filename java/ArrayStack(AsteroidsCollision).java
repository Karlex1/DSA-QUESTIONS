class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> st=new Stack<>();
        for(int ass:asteroids){
            if(ass>0){
                st.push(ass);
            }
            else {while(!st.isEmpty() && st.peek()>0 && st.peek()<-ass){
                st.pop();
            }if(st.isEmpty() || st.peek()<0){
                st.push(ass);
            }
            if(st.peek()==-ass){
                st.pop();
            }}
            
        }
        
        int[] a=new int[st.size()];
        int i=st.size()-1;
        while(!st.isEmpty()){
            a[i--]=st.pop();
            
        }
 return a;   }
}
