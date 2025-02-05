class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        if(s1.equals(s2)){
            return true;
        }
        int n1=s1.length();int n2=s2.length();int count=0;int first=-1;int second=-1;
        if(n1!=n2)return false;
        for(int i=0;i<n1;i++){
            if(s1.charAt(i)!=s2.charAt(i)){
                count++;
                if(count>2)return false;
                if(first==-1){
                    first=i;
                }else{
                    second=i;
                }
            }
        }
        // if(count==2){
        //     return true;
        // }
        return count==2 && s1.charAt(first)==s2.charAt(second)&&s1.charAt(second)==s2.charAt(first);
    }
}
