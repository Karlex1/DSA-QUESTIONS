class Main {
    public static void main(String[] args) {
        System.out.println(noOfZero(1010200));
    }

    public static int noOfZero(int n) {
        // Base case: if n is 0, there's one zero.
        if (n == 0) return 1;

        // Recursive case: if n is not zero, count zeros in the remaining digits.
        return countZeros(n, 0);
    }

    private static int countZeros(int n, int count) {
        if (n == 0) return count;

        // Increment count if the last digit is zero.
        if (n % 10 == 0) count++;

        // Continue with the remaining digits.
        return countZeros(n / 10, count);
    }
}
