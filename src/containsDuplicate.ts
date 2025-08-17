function containsDuplicate(nums: number[]): boolean {
  const hashmap = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(nums[i]!)) {
      return true;
    }
    hashmap.add(nums[i]!);
  }
  return false;
}

//non-null assertion operator (!)
