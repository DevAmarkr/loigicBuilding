/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
Thought Process
Brute Force
Knowing the length of both array, we can use a counter to count the element until it reach n/2 for odd number or n/2 + 1, and taking average for the second case
Time complexity will be O(m+ n)
Space complexity will be O(1)
Optimal (Binary Search) 1. Because the question warrants O(log(m+n)), binary search is probably the desired approach 2. Looking back at the definition of median of an array, it's located in the middle 3. If we can cut an array into two puts, and call the element immediately left to the cut L, and right to the cut the R, we can find the median easily by average them 1. [2 3 / 5 7] -> median = (3+5)/2 2. [2 3 (4/4) 5 7] -> median = (4 + 4) / 2 = 4 1. The index can be listed as follow 1. ```text N Index of L / R 1 0 / 0 2 0 / 1 3 1 / 1
4 1 / 2
5 2 / 2 6 2 / 3 7 3 / 3 8 3 / 4

*/