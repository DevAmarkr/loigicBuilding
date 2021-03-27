/*
Given an array S of n integers, are there elements a, b, c in S such that a+b+c= 0? Find all unique triplets in the array which gives the sum of zero.

Note:The solution set must not contain duplicate triplets.

Example:

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
Thought Process
Brute force
Triple loop and use set to eliminate the duplicates by sorting the solution
Time complexity is O(n^3)
Space complexity is O(1)
Two Pointers
Sort the array
Loop through the elements, if the current element is equal to the last element, we skip it to avoid duplicate solution
Set the pointer to the next element and the last element of remaining elements
Time complexity is O(n^2)
Space complexity is O(1)
*/