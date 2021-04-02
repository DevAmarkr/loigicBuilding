/*

Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
Thought Process
Because the question ask we do it in place and return the new length, we have somehow scanning through the array and insert/discard the exploring element
This hint inspires the use of two pointers, where one points to the current element and the other points to the correct position that element should be reside
Time complexity O(n)
Space complexity O(1)

*/

/*
  sorted Array_with dupplicate = [1,2,3,4,4,5,6]
  remove the duplicates in place 
  return new length

  create a funnction called remove_duplicatesinSortedArray
  it takes one argument array with integer
  create a loop that run though each element 
  create two pointers index1 will point to curent index and index2 will point next to index1
  check if both indexes value matching
  if matching remove the current index and continue the loop
  return modified array length
*/


function remove_duplicatesinSortedArray(array){
   for(var x = 0; x < array.length; ++x){
       let current = array[x], next =array[x+1]
       if(current === next){
         array.splice(x,1)
       }
   }
    return array.length
}
var result = remove_duplicatesinSortedArray([1,2,3,4,4,5,6])
console.log(result)