class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const length = nums?.length;
        if (length<0) return false
  for (let i=0;i<length;i++){
    const firstNum=nums[i]
    for(let j=i+1;j<length;j++){
      if(firstNum===nums[j]){
            return true
        }
    }
  }
  return false
}}
