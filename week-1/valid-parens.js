/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const matching = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stack.push(s[i])
        } else {
            if(stack.pop() !== matching[s[i]]) return false;
        }
    }
    if(stack.length) return false;
    return true;
};