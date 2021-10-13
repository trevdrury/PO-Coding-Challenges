public class RotatedString {
    public RotatedString() {}

    public boolean isRotation(String inputA, String inputB) {
        return (inputA.length() == inputB.length() && (inputA + inputA).contains(inputB));
    }
}
