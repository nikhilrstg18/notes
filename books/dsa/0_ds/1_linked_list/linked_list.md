---
title: "Linked List - Data Structures"
slug: "dsa/0_ds/1_linked_list"
stack: "DSA"
---

## Linked List

![Linked List](./../../../../src/images/dsa/n-3.png)

Linked lists are one of the basic data structures used in computer science. They have many direct applications and serve as the foundation for more complex data structures.

The list is comprised of a series of nodes as shown in the diagram. The head node is the node at the beginning of the list. Each node contains data and a link (or pointer) to the next node in the list. The list is terminated when a node’s link is null. This is called the tail node.

Consider a one-way air travel itinerary. The trip could involve traveling through several airports (nodes) connected by air travel segments (links). In this example, the initial departure city is the head node and the final arrival city is the tail node.

Since the nodes use links to denote the next node in the sequence, the nodes are not required to be sequentially located in memory. These links also allow for quick insertion and removal of nodes as you will see in future exercises.

Common operations on a linked list may include:

- adding nodes
- removing nodes
- finding a node
- traversing (or traveling through) the linked list

Linked lists typically contain unidirectional links (next node), but some implementations make use of bidirectional links (next and previous nodes).

### Concept

![Linked List Concept](./../../../../src/images/dsa/n-4.png)

As an example, we added values to the linked list diagram from the introduction.

This linked list contains three nodes (`node_a`, `node_b`, and `node_c`).

Each node in this particular list contains a string as its data. As the sequence is defined, the order is "cats", "dogs", and "birds".

The list ends at `node_c`, since the link within that node is set to `null`.

❓**What links would need to be established to add a new head node to this list**

❓**What about the tail?**

### Adding and Removing Nodes

With linked lists, because nodes are linked to from only one other node, you can’t just go adding and removing nodes willy-nilly without doing a bit of maintenance.

Adding a new node
Adding a new node to the beginning of the list requires you to link your new node to the current head node. This way, you maintain your connection with the following nodes in the list.

Removing a node
If you accidentally remove the single link to a node, that node’s data and any following nodes could be lost to your application, leaving you with orphaned nodes.

To properly maintain the list when removing a node from the middle of a linked list, you need to be sure to adjust the link on the previous node so that it points to the following node.

Depending on the language, nodes which are not referenced are removed automatically. “Removing” a node is equivalent to removing all references to the node.

![Add and Remove Node](./../../../../src/images/dsa/n-5.png)

Look at the image to see the proper manner of removing a node.
In order to remove `node_b`, you must first link `node_a` to `node_c` (where `node_b` was linking).
Then you can remove `node_b`.

❓**How would you represent the process of adding a new node to the beginning of a linked list**

### Review

Linked Lists:

- Are comprised of nodes
- The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
- Can be unidirectional or bidirectional
- Are a basic data structure, and form the basis for many other data structures
- Have a single head node, which serves as the first node in the list
- Require some maintenance in order to add or remove nodes
- The methods we used are an example and depend on the exact use case and/or programming language being used

## Linked List in JS

### Constructor and Adding to Head

Let’s implement a linked list in JavaScript. As you might recall, a linked list is a sequential chain of nodes. Remember that a node contains two elements:

**data**
a link to the next node
We are going to use a provided Node class, which you can find in Node.js. Make sure to use the proper Node methods throughout the lesson instead of accessing properties directly (ex. use someNode.getNextNode() instead of someNode.next).

Depending on the end-use of the linked list, there are a variety of methods that we can define. For our use, we want to be able to:

- add a new node to the beginning (head) of the list
- add a new node to the end (tail) of the list
- remove a node from the beginning (head) of the list
- print out the nodes in the list in order from head to tail

To start, we are going to create the LinkedList‘s constructor and `.addToHead()` method.

```js
//node.js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("Next node must be a member of the Node class");
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;
```

```js
//linkedlist.js
const Node = require("./Node");

class LinkedList {}

module.exports = LinkedList;
```

1. The only property we need our linked list to have is a head, which we will add in our constructor. Inside the `LinkedList` class, define the constructor. It should take no parameters, and should set the list’s head to `null`.

```js{5-7}
//linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
}

module.exports = LinkedList;
```

2. Define an `.addToHead()` method that takes one parameter called `data`. Inside the method, create a `Node` const variable named `newHead`, and pass `data` as an argument.

```js{9-11}
//linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
  }
}

module.exports = LinkedList;
```

3. Inside your `.addToHead()` method, create a `const` variable named `currentHead`, and set it equal to the list’s head. Then change the list’s head to equal `newHead`.
4. Finally, still in your `.addToHead()` method, check if there is a current head to the list. If there is, set the list’s head’s next node to `currentHead`.

```js{11-15}
//linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
}

module.exports = LinkedList;
```

### Adding to Tail

Now that we can add to the head of the linked list, the next step is to be able to add to the tail. This will require a few more steps since we don’t have a `tail` property in our linked list data structure.

To do this, we are going to start with a temporary tail variable that will be set equal to the list’s head. If there is no head, that means that the list is empty, and we will add the node to the head of the list. Otherwise, we will iterate through the list until we find the last node. Once we’ve found the current tail, we will add a pointer from that node to our new tail.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
}

module.exports = LinkedList;
```

1. Define an `.addToTail()` method for the `LinkedList` that has one parameter called `data`. Create a variable named `tail`, and set it equal to the list’s head. `tail` is going to change throughout the method, so make it a `let` variable.

```js{17-19}
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
  }
}

module.exports = LinkedList;
```

2. Now that `tail` is equal to the head of the list, we want to check if it has any value. If `tail` has no value, then that means the list was empty, and we will be creating the head and `tail` with the `data` passed in. To do this, check if `tail` has no value. If so, set the list’s head equal to a new `Node` that takes `data` as an argument.

```js{19-21}
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    }
  }
}

module.exports = LinkedList;
```

3. If `tail` does have a value, that means the list is not empty. In that case, we want to iterate through the list until we find the end, so we can add `tail` to the end of the list. To do this, create an else after your if statement. Inside it, make a while loop that runs while `tail` has a next node. Inside the loop, set `tail` equal to its next node. (If you accidentally create an infinite loop and your code won’t stop running, you can reload the page to stop it.)

```js{21-25}
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
    }
  }
}

module.exports = LinkedList;
```

4. Finally, inside the same `else` block, but outside the `while` loop, set `tail‘s` next node equal to a new `Node` that takes `data` as an argument.

```js{25}
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
}

module.exports = LinkedList;
```

### Removing the Head

So far we can:

- create a new `LinkedList` using its `constructor`
- add to the head of the list using `.addToHead()`
- add to the tail of the list using `.addToTail()`

Now we’re going to learn how to remove from the head of the list. To do this, we are first going to check to see if the list has a head. If it doesn’t, there is nothing to return. If there is a head, we will remove it by setting the list’s head equal to the original head’s next node, and then return that original head.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
}

module.exports = LinkedList;
```

1. Define a `.removeHead()` method that takes no parameters. Inside the method, create a `const` variable named `removedHead` and set it equal to the list’s head. We will use this to keep track of the original head of the list.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
  }
}

module.exports = LinkedList;
```

2. If removedHead has no value, return to end execution of the .removeHead() method.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
  }
}

module.exports = LinkedList;
```

3. Outside the if statement, set the list’s head equal to removedHead‘s next node.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
  }
}

module.exports = LinkedList;
```

4. Finally, return removedHead’s data.

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
}

module.exports = LinkedList;
```

### Printing

Nice! Now we have a bunch of helpful LinkedList methods under our belt. Our next step is to create a .printList() method so we can see our list as it changes.

While it’s possible to just use console.log() on the list (try it!), we want to print it in a more understandable and readable way. console.log() will print the pointers of each node as well as the data, but we’re just going to print the data while maintaining the order of the list.

To do this, we will create a String that holds the data from every node in the list. We’ll start at the list’s head and iterate through the list, adding to our String as we go.

For example, if we had a list for the days of the week, starting with Sunday, .printList() would print it as follows:

```py
<head>Sunday Monday Tuesday Wednesday Thursday Friday Saturday<tail>

```

Given

```js
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
}

module.exports = LinkedList;
```

1. Define a method named `.printList()`. Inside it, create:

- A let variable named `currentNode`, and set it equal to the list’s head
- Another let variable named `output`, and set it equal to `'<head> '`
  Then, log `output` to the console

2. While `currentNode` doesn’t equal `null`, add its `data` and a `' '` to `output`. Then update `currentNode` to be its next node. Do this above your `console.log()` statement.

3. Finally, outside of the `while` loop, but before your `console.log()`, set `output` equal to itself concatenated with `'<tail>'`.

```js{39-48}
// linkedlist.js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode != null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
```

### Using the Linked List

You finished your LinkedList class! Now we’re going to create an instance of that class and create a linked list of the seasons. We will add to it, remove from it, and finally print it out to check what we’ve done.

1. In seasons.js, define a LinkedList named seasons. Print it out – what do you expect to see?

```js
// season.js
const LinkedList = require("./LinkedList");

const seasons = new LinkedList();
seasons.printList(); //<head> <tail>
```

2. Add **'summer'** to the head of the `seasons`, then add **'spring'** to the `head`. Print the list again.

```js{6-7}
// season.js
const LinkedList = require("./LinkedList");

const seasons = new LinkedList();

seasons.addToHead("summer");
seasons.addToHead("spring");
seasons.printList(); //<head> spring summer <tail>
```

3. Add **'fall'** to the `tail` of `seasons`. Then add **'winter'** to the `tail` and print the list again.

```js
// season.js
const LinkedList = require("./LinkedList");

const seasons = new LinkedList();

seasons.addToHead("summer");
seasons.addToHead("spring");
seasons.addToTail("fall");
seasons.addToTail("winter");
seasons.printList(); //<head> spring summer fall winter <tail>
```

4. Finally, remove the element at the head of the list. Print the list to check that the correct element was removed.

```js
// season.js
const LinkedList = require("./LinkedList");

const seasons = new LinkedList();

seasons.addToHead("summer");
seasons.addToHead("spring");
seasons.addToTail("fall");
seasons.addToTail("winter");
seasons.removeHead();
seasons.printList(); //<head> summer fall winter <tail>
```

## review

Congratulations, you have created and implemented a linked list class in JavaScript!

We did this by:

- Using our Node class to hold the data and links between nodes
- Implementing a LinkedList class to handle external operations on the list, like adding and removing nodes
- Creating an instance of our list, and using our .printList() method to track the changes we made

Feel free to play around a bit with your code. Here are some ideas:

- Create a few nodes and add them to both ends of a new linked list
- Print your linked list out using your .printList() method
- Use console.log() on your list to see how it’s different from your .printList() method
- Remove your linked list’s head node
- Print your list again — was your original head node removed?

- So far you’ve built a method to remove the head of the list. How do you think you would remove a node that has a specific data? Try building a method to do that!
