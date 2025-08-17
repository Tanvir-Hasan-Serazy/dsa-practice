function twoSum(nums, target) {
    var hashmap = new Map();
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (hashmap.has(target - num)) {
            return [hashmap.get(target - num), i];
        }
        hashmap.set(num, i);
    }
    return [];
}
console.log(twoSum([1, 2, 3, 4], 5));
