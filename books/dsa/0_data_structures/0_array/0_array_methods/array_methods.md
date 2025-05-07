---
title: "Array - Data Structures"
slug: "dsa/0_data_structures/0_array/0_array_methods"
stack: "DSA"
---

## Mutating Methods

> Modify the Original Array

### [push()](https://www.geeksforgeeks.org/what-are-the-important-array-methods-of-javascript/?ref=lbp#1-javascript-push-method)


> The `push()` method adds one or more elements to the end of an array and returns the new length.

```js
let a = ["Hello", "GFG", "JS"];
a.push("React");
console.log(a); // ['Hello','GFG','JS','React']
```

### [pop()](https://www.geeksforgeeks.org/what-are-the-important-array-methods-of-javascript/?ref=lbp#2-javascript-pop-method)

> The `pop()` method removes the last element from an array and returns it.

```js
let a = ["Hello", "GFG", "JS"];
let ele = a.pop();
console.log(ele); // "JS"
console.log(a); // ["Hello", "GFG"]
```

### [shift()](https://www.geeksforgeeks.org/what-are-the-important-array-methods-of-javascript/?ref=lbp#3-javascript-shift-method)

> The `shift()` method removes the first element from an array and returns it.

```js
let a = ["Hello", "GFG", "JS"];
let ele = a.shift();
console.log(ele); // "Hello"
console.log(a); // ["GFG", "JS"]
```

### [unshift()](https://www.geeksforgeeks.org/what-are-the-important-array-methods-of-javascript/?ref=lbp#4-unshift-method)

> The `unshift()` method is used to add the elements in the array from the front side.

```js
let a = ["Hello", "GFG", "JS"];
a.unshift("React");
console.log(a); // [ 'React', 'Hello', 'GFG', 'JS' ]
```

### [fill() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-fill-method)

- The Array `fill()` method is used to fill the array with a given static value.
- The value can be used to fill the entire array or it can be used to fill a part of the array.

```js
// JavaScript code for fill() function
let arr = [1, 23, 46, 58];

// Here value = 87, start index = 1 and
// and last index = 3
arr.fill(87, 1, 3);
console.log(arr); // [ 1, 87, 87, 58 ]
```

### [sort() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-sort-method)

- The Array `sort()` method is used to sort the array. An array can be of any type i.e. string, numbers, characters, etc.

```js
// Original array
let numbers = [88, 50, 25, 10];

// Performing sort method
let sub = numbers.sort(geeks);

function geeks(a, b) {
  return a - b;
}

console.log(sub); // [ 10, 25, 50, 88 ]
```

### [reverse()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-reverse-method)

- The Array `reverse()` method is used for in-place reversal of the array.
- The first element of the array becomes the last element and vice versa.

```js
//Original Array
let arr = [34, 234, 567, 4];
console.log("Original array: " + arr);

//Reversed array
let new_arr = arr.reverse();

// Display the result
console.log("Newly reversed array: " + new_arr);
// Original array: 34,234,567,4
// Newly reversed array: 4,567,234,34
```

## Accessor Methods

> Do Not Modify Original Array

### [concat()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-concat-method)

- The Array `concat()` method is used to merge two or more arrays together.
- This function does not alter the original arrays passed as arguments.

```js
// JavaScript code for concat() function
let num1 = [11, 12, 13],
  num2 = [14, 15, 16],
  num3 = [17, 18, 19];

console.log(num1.concat(num2, num3));
// [ 11, 12, 13, 14, 15,  16, 17, 18, 19]
```

### [includes() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-includes-method)

- The Array `includes()` method is used to know whether a particular element is present in the array or not and accordingly, it returns `true` or `false` i.e, if the element is present, then it returns `true` otherwise `false`

```js
// Taking input as an array A
// having some elements.
let A = [1, 2, 3, 4, 5];

// Include() function is called to
// test whether the searching element
// is present in given array or not.
let a = A.includes(2);

// Printing result of function.
console.log(a); // true
```

## Iteration Methods

> Looping and Processing

### [forEach()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-foreach-method)

- The Array `forEach()` method calls the provided function once for each element of the array.
- The provided function may perform any kind of operation on the elements of the given array.

```js
// Original array
const items = [1, 29, 47];
const copy = [];

items.forEach(function (item) {
  copy.push(item * item);
});

console.log(copy); // [ 1, 841, 2209 ]
```

### [some()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-some-method) && [every()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-every-method)

The `some()` method checks the user-specified conditions on some elements of an array (i.e. it checks for a few elements only), whereas `every()` method checks the user-specified conditions on every element of an array then returns the results in true or false.

```js
let a = [1, 2, 3, 4, 5];
let n1 = a.every(function (elem) {
  return elem > 0;
});
let n2 = a.some(function (elem) {
  return elem < 0;
});
console.log(n1); // true
console.log(n2); // false
```

### [map() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-map-method)

The `map()` method iterates over an array, transforms the array according to user-specified conditions and returns a new array.

```js
let a1 = [1, 2, 3, 4, 5];
console.log(a1); // [ 1, 2, 3, 4, 5 ]

let a2 = a1.map(function (elem) {
  return elem * 5;
});
console.log(a2); // [ 5, 10, 15, 20, 25 ]
```

### [filter() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-filter-method)

The Array `filter()` method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument function.

```js
function isPositive(value) {
  return value > 0;
}

function func() {
  let filtered = [112, 52, 0, -1, 944].filter(isPositive);
  console.log(filtered); // [ 112, 52, 944 ]
}

func();
```

### [find()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-find-method)

The Array `find()` method is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever the first element satisfies the condition is going to print.

```js
// Input array contain some elements.
let array = [10, 20, 30, 40, 50];

// Function (return element > 10).
let found = array.find(function (element) {
  return element > 20;
});

// Printing desired values.
console.log(found); // 30
```

### [findindex() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-findindex-method)

The Array `findIndex()` method returns the index of the first element in a given array that satisfies the provided testing function. Otherwise, -1 is returned.

```js
let array = [10, 20, 30, 110, 60];

function finding_index(element) {
  return element > 25;
}

console.log(array.findIndex(finding_index)); // 2
```

## Transformation & Reduction Methods

### [reduce()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-reduce-method)

The `reduce()` method uses a reducer function that reduces the results into a single output.

```js
let a1 = [1, 2, 3, 4, 5];
console.log(a1); // [ 1, 2, 3, 4, 5 ]

let sum = a1.reduce(function (acc, elem) {
  return acc + elem;
});

console.log(sum); // 15
```

### [flat()](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-flat-method)

The Array `flat()` method creates a new array that contains more than arrays. Basically creates a simple array from an array that contains multiple arrays.

```js
//Original array
let arr = [[11, 89], [23, 7], 98];

// Performing flat method
let geeks = arr.flat();

console.log(geeks); // [ 11, 89, 23, 7, 98 ]
```

### [flatMap() ](https://www.geeksforgeeks.org/best-known-javascript-array-methods/?ref=lbp#array-flatmap-method)

- This Array `flatMap()` method is used to flatten the input array element into a new array.
- This method first of all map every element with the help of a mapping function, then flattens the input array element into a new array.

```js
const myAwesomeArray = [[1], [2], [3], [4], [5]];

let geeks = myAwesomeArray.flatMap((arr) => arr * 10);
console.log(geeks); // [ 10, 20, 30, 40, 50 ]
```

## MyArray Implementation

coming soon...
