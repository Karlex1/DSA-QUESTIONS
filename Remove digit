class Solution {
    public String removeDigit(String number, char digit) {
        int n=number.length();int index=0;
        for (int i=0;i<n;i++){
            if(digit==number.charAt(i)){
                index=i;
                if(i<n-1 && digit<number.charAt(i+1)){
                    break;
                }
            }
        }return number.substring(0,index)+number.substring(index+1);       
    }
}
