/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


Brute Force
Use every element as an anchor and search its right element
The time complexity is O(n^2) = (n - 1) + (n - 2) + ... + 1
The space complexity is O(1)

Optimal (Hash Map)
Leverage the power of hashmap and store the number and its index in the map
When the map contain target - curNum, we know the search is complete
The time complexity is O(n)
The space complexity is O(n)

*/

//1: O(n^2) Brute Force(worst)

function  twoSum(arr,target){
    for(let x = 0; x < arr.length; ++x){
        for(let y = x+1; y < arr.length; ++y){
            if(arr[x] + arr[y] === target){
                  return [x,y] 
            }
        }
    }
    return 'Not found'
}

//2: O(n) time comlexity(Good)
function twoSum(nums,target){
    let map = new Map();
    for (let i = 0; i < nums.length; i ++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        map[target-nums[i]] = i
        console.log(map)
    }
    return [-1, -1];
}


//3: O(n) time comlexity , expanded version of solution 2(more explanatory)
const twoSum_On_Better = (arr, target) => {
    if(!Array.isArray(arr) || typeof target !== 'number'){
        return 'Invalid type'
    }
  
    if(arr.length < 2){
        return []
    }

    let hashMapTable = new Map()
    //Loop for storing all elements of an array in hashmapTable as key and index of that element as value
    for( let x = 0; x < arr.length; ++x){
        hashMapTable[arr[x]] = x
    }
    //Loop for main logic to check if target- current value is presnt inside hashmap table or not
    for(let y = 0; y < arr.length; ++y){
        let needValue =  target - arr[y]
        if(needValue in hashMapTable && hashMapTable[needValue] !== y){
          return [y, hashMapTable[needValue]]
        }
    }
    return [-1,-1]

}










