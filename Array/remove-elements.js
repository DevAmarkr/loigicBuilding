/*
Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
Thought Process
Since we have to move non-targeted value to the front and target value to the back, we need two pointers.
One pointer track the location of non-targeted value from forward. T
The other points to the location of at the end where we can insert the target value.
Time complexity O(n)
Space complexity O(1)

*/