/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

Example:

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
Thought Process
Brute Force
Quadruple loop
Time complexity O(n^4)
Space complexity O(1)
Recursive solution
Use backtrack to facilitate the process
Finding 4 sum is equivalent of finding 3 sum with current element
Finding 3 sum is equivalent of finding 2 sum with the first element of remaining element
Time complexity O(n^3)
Extra space complexity O(k)

*/