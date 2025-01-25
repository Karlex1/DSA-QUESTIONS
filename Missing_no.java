class Missing_no {
  public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5, 7, 8, 9, 10, 12 };
    int n = arr.length;
    int i = 1;  // Start with the first expected number

    for (int num : arr) {
      if (num == i) {
        i++;  // Move to the next expected number
      }
    }
    System.out.print(i);  // i will be the missing number
  }
}

// class Missing_no {
//   public static void main(String[] args) {
//     int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 };
//     int n = arr.length;
//     int xora=0;
//     int xorb=0;
//     for(int j=1;j<=n+1;j++){
//     xora^=j;
//     }
//     for(int j=0;j<n;j++){
//     xorb^=arr[j];
//     }
//     System.out.print(xora^xorb);
    
//   }

// }

