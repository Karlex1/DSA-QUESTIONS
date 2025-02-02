public class Main {
    public static void main(String[] args) {
        System.out.println(findUnsortedIndex(new int[]{12, 23, 34, 45, 56})); // -1
        System.out.println(findUnsortedIndex(new int[]{12, 23, 4, 45, 56}));  // 2
        System.out.println(findUnsortedIndex(new int[]{10, 8, 9, 11}));       // 0
    }

    public static int findUnsortedIndex(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return -1; // Sorted by default
        }
        return findUnsortedIndexHelper(arr, 0);
    }

    private static int findUnsortedIndexHelper(int[] arr, int index) {
        if (index == arr.length - 1) {
            return -1; // Fully sorted
        }
        if (arr[index] > arr[index + 1]) {
            return index; // Return the first index where sorting breaks
        }
        return findUnsortedIndexHelper(arr, index + 1);
    }
}
