function longestCommonPrefix(strs) {
    if (!strs.length) {
        return "";
    }
    strs.sort();
    var first = strs[0];
    var last = strs[strs.length - 1];
    var result = "";
    for (var i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            result = result + first[i]; // result += first![i]
        }
        else {
            break;
        }
    }
    return result;
}
