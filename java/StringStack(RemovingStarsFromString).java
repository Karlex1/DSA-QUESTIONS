class Solution {
    public String removeStars(String s) {
        Stack<Character> st=new Stack<>();
        for(char c: s.toCharArray()){
            if(c!='*'){
                st.push(c);
            }else if(!st.isEmpty()){
            st.pop();}
        }
        StringBuilder sb = new StringBuilder();
        while (!st.isEmpty()) {
            sb.append(st.pop());
        }
        return sb.reverse().toString();
    }
}
