var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    };

    let result = [];

    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        let letters = map[digits[index]];

        for (let ch of letters) {
            backtrack(index + 1, current + ch);
        }
    }

    backtrack(0, "");
    return result;
};
