# Title
sort library

## Description
You are given an array of object . Where each object contains details of a given 

```javascript  
   [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    }
    ];
```
Write a the code to sort the array in alphabetical order of title 
### Input Array
```javascript  
  [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    }
    ]
```
### Output Array
### Input Array
```javascript  
  [ 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    },
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    ]
```
## Solution 
```javascript
function helper(a, b) {
    if (a.title > b.title) {
        return 1
    } else if (a.title < b.title) {
        return -1
    } else {
        return 0;
    }
}
const sortedArr = library.sort(helper);
console.log(sortedArr);
```




