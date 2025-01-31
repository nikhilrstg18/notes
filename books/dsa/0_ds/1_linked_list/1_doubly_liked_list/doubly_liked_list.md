---
title: "Doubly- Linked List"
slug: "dsa/0_ds/1_linked_list/1_doubly_list_list"
stack: "DSA"
---

> Learn how to approach Linked List problems with multiple iterator pointers.

## Two-Pointer Linked List Techniques

Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

In order to do this, you’ll need some way of knowing how far you are from the end of the list itself. However, in a singly linked list, there’s no easy way to iterate back through the list when you find the end.

If you want, you can try your hand at the problem directly, or we can walk through some approaches below.

Approaches
One thing that might first come to mind is to use an array to store a representation of the linked list. While this approach results in an easy-to-read implementation, it could also use up lots of memory maintaining a dual representation of the same data. If the linked list has one million nodes, we’ll need one million pointers in an array to keep track of it! An approach like this results in an extra O(n) space being allocated.

```js
const arrayNthLast = (list, n) => {
  const linkedListArray = [];
  let currentNode = list.removeHead();
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  return linkedListArray[linkedListArray.length - n];
}
```

Instead of creating an entire parallel list, we can solve this problem by using two pointers at different positions in the list but moving at the same rate. As in the previous example, we will use one pointer to iterate through the entire list, but we’ll also move a second pointer delayed n steps behind the first one.
```js
nthLastNodePointer = null
tailPointer = linked list head
count = 0

while tail pointer exists
  move tail pointer forward
  if count >= n
    set nthLastNodePointer to head if it's', still null or move it forward
  increment count

return nthLastNodePointer
```
### Implementation

Complete the nthLastNode() function so that it returns the correct Node instance (or null if the linkedList is shorter than n elements). Do this without creating any additional new data structures (such as an array).

You can use the testLinkedList to experiment yourself. It contains a 50-length linked list with data values from 50 -> 49 -> ... 2 -> 1

```js
const LinkedList = require('./',LinkedList');',
const testLinkedList = require('./',testLinkedList.js');',
// Complete this function
const nthLastNode = ( linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
};

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 4));
```