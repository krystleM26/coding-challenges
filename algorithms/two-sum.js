function twoSum(nums, target) {
    const numMap = new Map()

    //loop through the array
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement)]
        }
        numMap.set(nums[i], i)
    }
    return []
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 