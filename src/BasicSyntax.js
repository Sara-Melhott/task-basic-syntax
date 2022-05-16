export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    var digits = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var prev = 0;
    var current = 0;
    var value = 0;

    for (var i = 0; i < str.length; i++) {
        current = digits[str[i]];

        if (current > prev) {
            result -= 2 * value;
        }
        if (current !== prev) {
            value = 0;
        }
        value += current; // keep adding same symbols
        result += current;
        prev = current;
    }
    return result;
}
