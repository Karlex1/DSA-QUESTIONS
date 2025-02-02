/* 3*3
 |_|_|_|
 |_|_|_|
 |_|_|_|
*/

import java.util.ArrayList;

public class Maze {
    public static void main(String[] args) {
        System.out.println(mazepathcount(3, 3));
        mazepath(new String(), 3, 3);
        System.out.println(mazepathList(new String(), 3, 3));
        mazepathBorder(new String(), 3, 3);
    }

    public static int mazepathcount(int m, int n) {
        if (m == 1 || n == 1) {
            return 1;
        }
        int left = mazepathcount(m - 1, n);
        int right = mazepathcount(m, n - 1);
        return left + right;
    }

    public static void mazepath(String s, int m, int n) {
        if (m == 1 && n == 1) {
            System.out.println(s);
        }
        if (m > 1) {
            mazepath(s + 'D', m - 1, n);
        }
        if (n > 1) {
            mazepath(s + 'R', m, n - 1);
        }

    }

    public static ArrayList<String> mazepathList(String s, int m, int n) {

        if (m == 1 && n == 1) {
            ArrayList<String> list = new ArrayList<>();
            list.add(s);
            return (list);
        }
        ArrayList<String> list = new ArrayList<>();
        if (m > 1) {
            list.addAll(mazepathList(s + 'D', m - 1, n));
        }
        if (n > 1) {
            list.addAll(mazepathList(s + 'R', m, n - 1));
        }
        return list;
    }

    public static void mazepathBorder(String s, int m, int n) {
        if (m == 1 || n == 1) {
            System.out.println(s);
        }
        if (m > 1) {
            mazepathBorder(s + 'D', m - 1, n);
        }
        if (n > 1) {
            mazepathBorder(s + 'R', m, n - 1);
        }

    }

}
