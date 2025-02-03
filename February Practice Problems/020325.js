// Solve
function twoSum(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        console.log("Position 0 ".concat(nums[i], ", Pointer Position ").concat(nums[i + 1]));
        if (nums[i] + nums[i + 1] == target) {
            result.push(nums[i], nums[i + 1]);
            console.log('Hit Break');
            break;
        }
    }
    return result;
}
console.log(twoSum([1, 5, 2], 3));
