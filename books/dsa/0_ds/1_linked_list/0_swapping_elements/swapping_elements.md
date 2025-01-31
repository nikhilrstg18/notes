---
title: "Swapping Elements - Linked List"
slug: "dsa/0_ds/1_linked_list/0_swapping_elements"
stack: "DSA"
---

> Learn how to swap two nodes in a singly linked list in JavaScript.

Since singly linked lists only have pointers from each node to its next node, swapping two nodes in the list isn’t as easy as doing so in an array (where you have access to the indices). You not only have to find the elements, but also reset the pointers around them to maintain the integrity of the list. This means keeping track of the two nodes to be swapped as well as the nodes preceding them.

Given an input of a linked list, `data1`, and `data2`, the general steps for doing so is as follows:

1. Iterate through the list looking for the node that matches `data1` to be swapped (`node1`), keeping track of the node’s previous node as you iterate (`node1Prev`)
2. Repeat step 1 looking for the node that matches `data2` (giving you `node2` and `node2Prev`)
3. If `node1Prev` is null, `node1` was the head of the list, so set the list’s head to `node2`

- Otherwise, set `node1Prev`‘s next node to `node2`

4. If `node2Prev` is null, set the list’s head to `node1`

- Otherwise, set `node2Prev`‘s next node to `node1`

5. Set `node1`‘s next node to `node2`‘s next node
6. Set `node2`‘s next node to `node1`‘s next node

### Finding the Matching and Preceding Nodes

Let’s look at what implementing steps 1 and 2 looks like. In order to swap the two nodes, we must first find them. We also need to keep track of the nodes that precede them so that we can properly reset their pointers. (We will use the Node class’s .getNextNode() method in order to access the next node.)

We will start by setting node1 equal to the head of the list, and then creating a while loop that runs while node1 isn’t null. Inside the loop, we will check if node1‘s data matches data1. If so, we break out of the loop as we have found the correct node. If there is no match, we update node1Prev to be node1 and move node1 to its next node:

```js
function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
}
```

At the end of this, we have found our matching node, and also saved its previous node, which we will use in the next step.

```js
function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
}
```

### Updating the Preceding Nodes’ Pointers

Our next step is to set `node1Prev` and `node2Prev`‘s next nodes, starting with `node1Prev`. We will start by checking if `node1Prev` is `null`. If it is, then the `node1` is the head of the list, and so we will update the head to be `node2`. If `node1Prev` isn’t `null`, then we set its next node to `node2`:

```js
function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }
}
```

After this step, we have finished updating the pointers that point to our swapped nodes. The next step will be to update the pointers from them.

```js
function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }
}
```

### Updating the Nodes’ Next Pointers

The last step is to update the pointers from `node1` and `node2`. This is relatively simple, and mirrors a swapping function for an array in that we will use a temporary variable.

```js
function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}
```

### Edge Cases

- We have completed the basic swap algorithm in JavaScript! However, we haven’t accounted for some edge cases. What if there is no matching node for one of the inputs? The current `swapNodes()` function will not run because we will try to access the next node of a node that is `null`. (Remember that our initial `while` loop only breaks if the matching node is found. Otherwise, it runs until the node is `null`.) Thankfully this has a quick fix. We can put in an `if` that checks if either `node1` or `node2` is `null`. If they are, we can print a statement that explains a match was not found, and `return` to end the method. We can put this right after the `while` loops that iterate through the list to find the matching nodes:

```js
if (node1 === null || node2 === null) {
  console.log("Swap not possible - one or more element is not in the list");
  return;
}
```

- The last edge case is if the two nodes to be swapped are the same. While our current implementation will run without error, there’s no point in executing the whole function if it isn’t necessary. We can add a brief check at the beginning of the function that checks if the `data1` is the same as `data2`, and then `return` to end the function:

```js
if (data1 === data2) {
  console.log("Elements are the same - no swap needed.");
  return;
}
```

## Finishded `SwapNodes()`

```js
function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made");
    return;
  }

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}
```

### Time and Space Complexity

- The worst case for time complexity in `swapNodes()` is if both `while` loops must iterate all the way through to the end (either if there are no matching nodes, or if the matching node is the tail). This means that it has a linear big O runtime of `O(n)`, since each `while` loop has a `O(n)` runtime, and constants are dropped.

- There are four new variables created in the function regardless of the input, which means that it has a constant space complexity of `O(1)`.
