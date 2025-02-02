class dtob {
    public static void main(String[] args) {
        int n = 5;
        System.out.println(dtob(n));
        System.out.println(dtobr(n));
      
    }
//binary
    static String dtobr(int n) {
        StringBuilder s = new StringBuilder();
      
        while (n>0) {
            int r = n % 2; // Calculate remainder
            s.append(r);
        // Append the binary digit
            n = n / 2;
        }
        return s.reverse().toString();
    }
//count ones
    static int dtob(int n) {
        StringBuilder s = new StringBuilder();
        int count = 0;
        while (n>0) {
            int r = n % 2; // Calculate remainder
            s.append(r);
            if (r == 1) {
                count++;
            } // Append the binary digit
            n = n / 2;
        }
       
        return count;
    }
}
