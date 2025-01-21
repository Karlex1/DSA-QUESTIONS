class BTOD{
  public static void main(String[] args){
    System.out.println(binarytodecimal("101"));
  }
  public static int binarytodecimal(String n){
    int decimal=0;
    int m=n.length();
    for(int i=0;i<m;i++){
      decimal+=n.charAt(i)*Math.pow(2,m-i-1);
    }
    return decimal;
  }

  public static int binaryToDecimal(String n) {
    int decimal = 0;
    for (int i = 0; i < n.length(); i++) {
      decimal = (decimal << 1) | (n.charAt(i) - '0');
    }
    return decimal;
  }
}

}
