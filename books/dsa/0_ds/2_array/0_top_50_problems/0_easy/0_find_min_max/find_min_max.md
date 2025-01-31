---
title: "Find the Minimum and Maximum Element in an Array"
slug: "dsa/0_ds/0_array/0_top_50_problems/0_level_1/0_p1"
stack: "DSA-Array"
---

> Given an array of size `N`. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

**Examples:**

```
Input: arr[] = {3, 5, 4, 1, 9}
Output:
Minimum element is: 1
Maximum element is: 9


Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:
Minimum element is: 3
Maximum element is: 35
```

## Algorithm :

### Solution 1

```javascript
// brute-force

function getMini(A) {
  let min = Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
  }
  return min;
}

function getMaxi(A) {
  let max = -Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}

function main() {
  const A = [4, 9, 6, 5, 2, 3];
  console.log("Minimum element is: " + getMini(A));
  console.log("Maximum element is: " + getMaxi(A));
}

main();
// Output
// Minimum element is: 2
// Miximum  element is: 9
```

Time Complexity: **O(N)**

Auxiliary Space: **O(1)**

### Solution 2

```javascript{4-6}
// using sorting
function main() {
  const A = [4, 9, 6, 5, 2, 3];
  A.sort((a, b) => a - b);
  console.log("Minimum element is: " + A[0]);
  console.log("Maximum element is: " + A[A.length - 1]);
}
main();
// Output
// Minimum element is: 2
// Miximum  element is: 9
```
Time complexity: **O(n log n)**, where n is the number of elements in the array, as we are using a sorting algorithm.
Auxilary Space: is **O(1)**, as we are not using any extra space.