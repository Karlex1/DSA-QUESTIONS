class MaximumOccurence{
  public static void main(String[] args){
    int[] arr={0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,};
    int counti=0;
    int max=0;
    for(int num:arr){
      if(num==1){
        counti++;
      }else{
        counti=0;
      }
      max=(max>counti)?max:counti;
    }
    System.out.print(max);
  }
}
