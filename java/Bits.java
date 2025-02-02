// Q-> Set the ith bit.
/*Brute force approach would have been convert to binary then iterate 
find kth bit then set it then convert to decimal.
In this we have used left shift to generate a no whose or with n will give a number
which would be set ith*/
class Bits{
  public static void main(String[] args){
    System.out.println(setI(10,2));
    toogleI(1,2);
    clearI(1,2);
    removeLastset(13);
    System.out.println(isPowerofTwo(34));
    System.out.println(countSetBits(18));
    noOfbitstoconvert(7,5);
  }
  public static int setI(int n ,int k){
    int i=1<<k;
    n=n|i;
    return n;
  }
  public static void toogleI(int i,int k){
    System.out.println(i^(1<<k));
  }
  public static void clearI(int i,int k){
    System.out.println(i&(~(1<<k)));
  }
  public static void removeLastset(int i){
    System.out.println(i&(i-1));
  }
  public static boolean isPowerofTwo(int n){
    if((n&(n-1))==0){
      return true;
    }
    return false;
  }
  /*public static int countSetBits(int n){
    int count=0;
    while(n>1){
      count+=n&1;
      n=n>>1;
    }
    if(n==1){
      count++;
    }
  return count;
  }*/
  public static int countSetBits(int n){
    int count=0;
    for(int i=0;i<32;i++){
      if((n & (1<<i))!=0){
        count++;
      }
    }
    return count;
  }
  public static void noOfbitstoconvert(int n,int g){
    System.out.println(countSetBits(n^g));
  }
}
