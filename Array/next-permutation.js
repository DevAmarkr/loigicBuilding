/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Example:

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
Thought Process
Since we want the next greater number, we better scan from the back toward the front
When we find an element that is smaller than its right element(s) we know this location needs to be updated with a greater element, let's called this index i
However, we don't want any element that is greater. We want an element that is smallest among all the potential candidates.
To find that, we again scan from the back and locate that element and swap with index i
Now, all we have to make the remaining elements in ascending order by reversing
Time complexity O(n)
Space complexity O(1)

*/