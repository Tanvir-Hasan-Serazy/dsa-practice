function twoSum(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashmap.has(target - num!)) {
      return [hashmap.get(target - num!)!, i];
    }
    hashmap.set(num!, i);
  }
  return [];
}
