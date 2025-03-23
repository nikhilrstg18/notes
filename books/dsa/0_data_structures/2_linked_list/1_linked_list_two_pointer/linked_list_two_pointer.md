---
title: "Linked List - 2 pointers"
slug: "dsa/0_data_structures/1_linked_list/1_linked_list_two_pointer"
stack: "DSA"
---

> Learn how to approach Linked List problems with multiple iterator pointers.

## Two-Pointer Linked List Techniques

### Two Pointers Moving in Parallel

Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

In order to do this, you’ll need some way of knowing how far you are from the end of the list itself. However, in a singly linked list, there’s no easy way to iterate back through the list when you find the end.

If you want, you can try your hand at the problem directly, or we can walk through some approaches below.

#### Approaches

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
};
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

#### Implementation

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

The exact variable names aren’t important, and the internal implementation could be written in a number of ways, but the important part is that we are able to complete this problem efficiently–in `O(n)` time (we must iterate through the entire list once), and `O(1)` space complexity (we always use only three variables no matter what size the list is: two pointers and a counter).

### Pointers at Different Speeds

Another two-pointer technique involves sending pointers through the list at different iteration “speeds”.

Consider this problem:

Find the middle node of a linked list.

#### Approaches

As before, it’s possible to find a solution by iterating through the entire list, creating an array representation, and then returning the middle index. But as before, this potentially takes up lots of extra space:

```sh
create array
while the linked list has not been fully iterated through
  push the current element onto array
  move forward one node
return array[length / 2]
```

Instead, we can use two pointers to move through the list. The first pointer takes two steps through the list for every one step that the second takes, so it iterates twice as fast.

```sh
fastPointer = list head
slowPointer = list head
while fastPointer is not null
  move fastPointer forward
  if the end of the list has not been reached
    move fastPointer forward again
    move slowPointer forward
return slowPointer
```

When the first pointer reaches the end of the list, the “slower” second pointer will be pointing to the middle element. Let’s visualize the steps of the algorithm:

**Starting State**

```sh
F
S
1  2  3  4  5  6  7
```

**First Tick**

```sh
      F
   S
1  2  3  4  5  6  7
```

**Second Tick**

```sh
            F
      S
1  2  3  4  5  6  7
```

**Third Tick**

```sh
                  F
         S
1  2  3  4  5  6  7
```

**Final Tick**

```sh
                     F
         S
1  2  3  4  5  6  7  null
```

As long as we always move the fast pointer first and check to see that it is not null before moving it and the slow pointer again, we’ll exit iteration at the proper time and have a reference to the middle node with the slow pointer.

#### Implementation

Complete the `findMiddle()` function and return the middle node of `linkedList`. You can assume that the list has no cycles.

Return the right-weighted middle for even-length lists. For example, in a list of 4 elements, return the element at index `2` (which would be the element `3`).

Use `generateTestLinkedList(length)` to generate linked lists with `data` from `1 -> 2 -> .. -> length` to test out your function. For instance, `generateTestLinkedList(4)` results in `1 -> 2 -> 3 -> 4`.

```js
const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};
```
As with the nth-to-last solution, this solution has `O(n)` time complexity, and `O(1)` space complexity, since only two nodes are created no matter the size of the input list.

#### Half-Speed
Another equally valid solution is to move the fast pointer once with each loop iteration but only move the slow pointer every-other iteration.
```js
const findMiddleAlternate = linkedList => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;

  while(fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
}
```

### Conclusion
Many linked list problems can be solved with the two-pointer technique. If it seems like a linked list problem requires keeping track of multiple positions or creating other data representations (such as using an array), consider whether two pointers iterating in parallel or at different speeds could help solve the problem efficiently. We won’t cover full solutions to these here, but variations on the two-pointer technique can be used to:

- Detect a cycle in a linked list
- Rotate a linked list by k places