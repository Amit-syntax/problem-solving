Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed

Difficulty Level : Medium
Last Updated : 22 Jul, 2022
Given an array arr[] of size N, the task is to find the maximum possible sum of i*arr[i] when the array can be rotated any number of times.

```
Examples :  

Input: arr[] = {1, 20, 2, 10}
Output: 72.We can get 72 by rotating array twice.
{2, 10, 1, 20}
20*3 + 1*2 + 10*1 + 2*0 = 72

Input: arr[] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9}
Output: 330
We can get 330 by rotating array 9 times.
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
0*1 + 1*2 + 2*3 … 9*10 = 330
```