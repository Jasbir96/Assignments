# Title
Filter Anagrams


## Description 
Anagrams are words that have the same number of same letters, but in different order.

For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers


Write a function aclean(arr) that returns an array cleaned from anagrams. Keep the first occurence of anagram
## Sample Input:
["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
## Sample Output: 
[nap,teachers,ear]
 ## code 

 ```javascript
 function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}
 ```