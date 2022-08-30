# K’th Non-repeating Character

Given a string and a number k, find the k’th non-repeating character in the string. Consider a large input string with lacs of characters and a small character set. How to find the character by only doing only one traversal of input string? 
Examples: 
 
```
Input : str = geeksforgeeks, k = 3
Output : r
First non-repeating character is f,
second is o and third is r.

Input : str = geeksforgeeks, k = 2
Output : o

Input : str = geeksforgeeks, k = 4
Output : Less than k non-repeating
         characters in input.
```


solution```

string = "save soil"


func(str, k){
    - declare array(count) with len of 256 as total no of chars
    - init every index of count with len(string)

    - loop over each char of string
    - 
      - if(count[ord(char)] == len(string)){
        - count[ord(char)] = i
      - }

      - else{
        - count[ord(char)] = len(string) + 2
      - }
    - sort array count
    - return kth element from array
}

func(string, 3)

```