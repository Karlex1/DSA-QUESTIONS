import java.util.HashMap;
import java.util.TreeMap;
import java.util.HashSet;

class NumberContainers {
    private HashMap<Integer, Integer> map; // Maps index → number
    private HashMap<Integer, TreeSet<Integer>> numberToIndices; // Maps number → sorted set of indices

    public NumberContainers() {
        map = new HashMap<>();
        numberToIndices = new HashMap<>();
    }

    public void change(int index, int number) {
        // If index already has a number, remove it from its old number's set
        if (map.containsKey(index)) {
            int oldNumber = map.get(index);
            numberToIndices.get(oldNumber).remove(index);
            if (numberToIndices.get(oldNumber).isEmpty()) {
                numberToIndices.remove(oldNumber); // Remove if empty
            }
        }

        // Update index → number mapping
        map.put(index, number);

        // Add index to the corresponding number's set
        numberToIndices.putIfAbsent(number, new TreeSet<>());
        numberToIndices.get(number).add(index);
    }

    public int find(int number) {
        // If number exists, return the smallest index
        return numberToIndices.containsKey(number) ? numberToIndices.get(number).first() : -1;
    }
}
