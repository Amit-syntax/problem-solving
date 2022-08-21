Rearrange array such that even index elements are smaller and odd index elements are greater


Given an array, rearrange the array such that : 

If index i is even, arr[i] <= arr[i+1]
If index i is odd, arr[i] >= arr[i+1]
Note: There can be multiple answers.

```
Examples:  

Input  : arr[] = {2, 3, 4, 5} 
Output : arr[] = {2, 4, 3, 5}
Explanation : Elements at even indexes are
smaller and elements at odd indexes are greater
than their next elements

Note : Another valid answer
is arr[] = {3, 4, 2, 5}

Input  :arr[] = {6, 4, 2, 1, 8, 3}
Output :arr[] = {4, 6, 1, 8, 2, 3}
```