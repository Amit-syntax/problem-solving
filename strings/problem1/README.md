# Decode a median string to the original string
| problem link -> https://www.geeksforgeeks.org/decode-median-string-original-string/

Given a string s written in median form, change it back to the original string. The median letter in a string is the letter that is in the middle of the string. If the string’s length is even, the median letter is the left of the two middle letters. The given string is formed by writing down the median letter of the word, then deleting it and repeating the process until there are no letters left. 

```
Examples:  

Input: eekgs
Output: geeks 
Explanation: in the original string “geeks” 
can be written in median form by picking up 
e first then, again e, then k then g and at
the end s. As these are the median when the
median letter is picked and deleted. 

Input: abc 
Output: bac 
Explanation: median of bac is a, then median
of bc is b, then median of c is c.
```


solution Approach```

function ArrangeString(string){
    - decoded_str = ''
    - remaining_temp = string


    - while(not(decoded_string.len >= string.len)){
      - get len of remaining_temp
      - get the median char of string by its length
      - decoded_str += median char
      - remaining_temp = remove median char index from string
      - 
    - }

}

```