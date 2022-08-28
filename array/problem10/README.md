# Merge Sort

```
•    Declare left variable to 0 and right variable to n-1 
•    Find mid by medium formula. mid = (left+right)/2
•    Call merge sort on (left,mid)
•    Call merge sort on (mid+1,rear)
•    Continue till left is less than right
•    Then call merge function to perform merge sort.
```


```
Algorithm:

step 1: start
step 2: declare array and left, right, mid variable 
step 3: perform merge function.
        mergesort(array,left,right)
        mergesort (array, left, right)
        if left > right
        return
        mid= (left+right)/2
        mergesort(array, left, mid)
        mergesort(array, mid+1, right)
        merge(array, left, mid, right)
step 4: Stop
```

```
MergeSort(arr[], l,  r)

If r > l

Find the middle point to divide the array into two halves: 
middle m = l + (r – l)/2
Call mergeSort for first half:   
Call mergeSort(arr, l, m)
Call mergeSort for second half:
Call mergeSort(arr, m + 1, r)
Merge the two halves sorted in step 2 and 3:
Call merge(arr, l, m, r)

```