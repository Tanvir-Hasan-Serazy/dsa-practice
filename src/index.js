// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) {
//     return false;
//   }
//   const s1 = s.split("").sort().join();
//   const s2 = t.split("").sort().join();
//   if (s1 == s2) {
//     return true;
//   }
//   return false;
// }
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var count = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every(function (val) { return val === 0; });
}
console.log(isAnagram("anagam", "nagaram"));
