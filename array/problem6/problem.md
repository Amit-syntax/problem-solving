## Positive elements at even and negative at odd positions (Relative order not maintained)


###### You have been given an array and you have to make a program to convert that array such that positive elements occur at even numbered places in the array and negative elements occur at odd numbered places in the array. We have to do it in place.

There can be unequal number of positive and negative values and the extra values have to left as it is.

```
Examples:  

Input : arr[] = {1, -3, 5, 6, -3, 6, 7, -4, 9, 10}
Output : arr[] = {1, -3, 5, -3, 6, 6, 7, -4, 9, 10}

Input : arr[] = {-1, 3, -5, 6, 3, 6, -7, -4, -9, 10}
Output : arr[] = {3, -1, 6, -5, 3, -7, 6, -4, 10, -9}
```


solution
```

funciton main(){
    - if odd count and even count is not equal:
        - return false
    
    loop each element with index:
        - check current value is +ve and index is odd:
            - replce current index value with next index value
        - check current value is -ve and index is even:
            - replce current index value with next index value
}
```