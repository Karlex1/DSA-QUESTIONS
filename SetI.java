Q-> Set the ith bit.
/*Brute force approach would have been convert to binary then iterate 
find kth bit then set it then convert to decimal.
In this we have used left shift to generate a no whose or with n will give a number
which would be set ith*/
class Main{
  public static void main(String[] args){
    setI(6,2);
  }
  public static int setI(int n ,int k){
    int i=1<<k;
    return (n | i);
  }
}
