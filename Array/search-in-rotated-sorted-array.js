/*

Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order ofO(logn).

If the target is not found in the array, return[-1, -1].

Example:

Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
Thought Process
A requirement for O(log n) hints the use of binary search
However because we want the range, we need to use modified binary search
We can try to find the left boundary, there are three cases here
When the mid is too small, the range starts on the right of mid, so lo = mid + 1
When the mid is too big, the range starts on the left of mid, so hi = mid -1
When the mid is equal, the range starts on the left or at mid, so hi = mid
Therefore we can combine ii and iii together and set hi = mid
On the other hand, for the right boundary, we can similar conditions, which boils down to
lo = mid
hi = mid - 1
Those above steps will make sure we are moving the pointers outward and find the border

*/