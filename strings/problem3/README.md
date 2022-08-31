# Python Program to Check if Two Strings are Anagram

Question:

Given two strings s1 and s2, check if both the strings are anagrams of each other.

Examples: 

Input : s1 = "listen"
        s2 = "silent"
Output : The strings are anagrams.


Input : s1 = "dad"
        s2 = "bad"
Output : The strings aren't anagrams.


solution```

function(string1, string2){
    if (string1.length != string2.length){
        return -1
    }

    - declare arr1 for string1 to store asccii values of chars in order
    - declare arr2 for string2 to store asccii values of chars in order

    - loop each char string1:
      - arr1.append -> asccii value of char
    
    - loop each char string2:
      - arr2.append -> asccii value of char

    - return arr1.sort == arr2.sort
    

}

```