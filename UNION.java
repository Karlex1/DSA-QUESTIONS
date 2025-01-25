    }
    System.out.println(hash);
  }

  public static void os(int[] arr, int[] arr1) {
    int n1 = arr.length;
    int n2 = arr1.length;
    int[] arr3 = new int[n1 + n2];
    int i = 0;
    int j = 0;
    for (int k = 0; k < arr3.length; k++) {
      if (i < n1 && j < n2) {
        if (arr[i] < arr1[j]) {
          arr3[k] = arr[i];
          i++;
        } else  {
          arr3[k] = arr1[j];
          j++;
        }
      } else if (i < n1) {
        arr3[k] = arr[i];
        i++;
      } else if (j < n2) {
        arr3[k] = arr1[j];
        j++;
      }

    }
    System.out.println(Arrays.toString(arr3));
  }
}
