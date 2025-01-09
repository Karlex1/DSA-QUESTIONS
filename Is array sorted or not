public class Main {
    public static void main(String[] args) {
        System.out.println(isSorted(new int[]{12, 23, 34, 45, 56})); // true
        System.out.println(isSorted(new int[]{12, 23, 4, 45, 56}));  // false
    }

    public static boolean isSorted(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return true; // An empty or single-element array is sorted
        }
        return isSortedHelper(arr, 0);
    }

    private static boolean isSortedHelper(int[] arr, int index) {
        if (index == arr.length - 1) {
            return true; // Reached the end, so it's sorted
        }
        return arr[index] <= arr[index + 1] && isSortedHelper(arr, index + 1);
    }
}
