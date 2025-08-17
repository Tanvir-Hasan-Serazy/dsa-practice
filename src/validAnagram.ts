function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const count: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]!++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]!--;
  }
  return count.every((val: number) => val === 0);
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const s1 = s.split("").sort().join();
  const s2 = t.split("").sort().join();

  if (s1 == s2) {
    return true;
  }
  return false;
}
