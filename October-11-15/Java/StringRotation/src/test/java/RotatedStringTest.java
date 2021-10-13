import org.junit.Test;

import static org.junit.Assert.*;

public class RotatedStringTest {
    RotatedString rotatedString = new RotatedString();

    @Test
    public void testWithTrueRotation() {
        String original = "abcde";
        String rotated = "cdeab";

        assertEquals(rotatedString.isRotation(original, rotated), true);
    }

    @Test
    public void testWithFalseRotation() {
        String original = "abcde";
        String rotated = "badce";

        assertEquals(rotatedString.isRotation(original, rotated), false);
    }
}