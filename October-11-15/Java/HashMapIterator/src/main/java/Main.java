import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMapIterator hashMapIterator = new HashMapIterator();
        HashMap<String, Integer> map = new HashMap<>();

        map.put("one", 1);
        map.put("two", 2);
        map.put("three", 3);

        System.out.println("Enhanced Loop Method:");
        hashMapIterator.iterateEnhancedLoop(map);
        System.out.println("\nWhile Loop Method");
        hashMapIterator.iterateWhileLoop(map);
    }
}
