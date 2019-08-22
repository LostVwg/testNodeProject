class IsPalindrome {

    isSymbolPalindrome(string) {
        string = string.toString().toLowerCase().replace(/\s/g, '');

        let newString = '';

        for (let i in string) {
            newString = newString + string[string.length - i - 1];
        }

        return newString === string;
    }
}

module.exports.IsPalindrome = IsPalindrome;
