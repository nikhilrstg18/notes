---
title: "Array - Data Structures"
slug: "dsa/0_data_structures/0_array"
stack: "DSA"
---

## Basics

- An array stores items or their references at `contiguous locations`.
- It offers mainly the following advantages over other data structures:
  - `Random Access` : **i<sup>th</sup>** item can be accessed in `O(1)` Time as we have the base address and every item or reference is of same size.
  - `Cache Friendliness` : Since items / references are stored at contiguous locations, we get the advantage of locality of reference.
- It is **not useful** in places where we have operations like **insert in the middle**, **delete from middle** and **search in a unsorted data**.
- It is a `fundamental` and `linear data structure` using which we build other data structures like Stack Queue, Deque, Graph, Hash Table, etc.

> Array is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming.

### Why Array ?

> The idea of an array is to represent many instances in one variable.

![Importance of Array](./../../../../src/images/dsa/a-6.png)

### Terminology

- Array `Index`: In an array, elements are identified by their indexes. Array index starts from 0.
- Array `element`: Elements are items stored in an array and can be accessed by their index.
- Array Length: The length of an array is determined by the number of elements it can contain.

### Memory Representation

In an array, all the elements are stored in contiguous memory locations. So, if we initialize an array, the elements will be allocated sequentially in memory. This allows for efficient access and manipulation of elements.

![Array in C++](./../../../../src/images/dsa/a-3.png)

![Array in Java or C#](./../../../../src/images/dsa/a-4.png)

![Array in python](./../../../../src/images/dsa/a-5.png)

### Declaration of Array

```js
// Declaration in JS
let arr = [];
```

```csharp
// Declaration in JS
// This array will store integer type element
int[] arr;

// This array will store char type element
char[] arr2;

// This array will store float type element
float[] arr3;
```

```py
# Declaration in Python
arr = []
```

### Initialization of Array

```js
// Initialization in JS
let arr = [1, 2, 3, 4, 5];
let arr = ["a", "b", "c", "d", "e"];
let arr = [1.4, 2.0, 24, 5.0, 0.0];
```

```csharp
// Initialization in C#
int[] arr = { 1, 2, 3, 4, 5 };
char[] arr = { 'a', 'b', 'c', 'd', 'e' };
float[] arr = { 1.4f, 2.0f, 24f, 5.0f, 0.0f };
```

```py
# Initialization in python
# This list will store integer type elements
arr = [1, 2, 3, 4, 5]

# This list will store character type elements (strings in Python)
arr = ['a', 'b', 'c', 'd', 'e']

# This list will store float type elements
arr = [1.4, 2.0, 24.0, 5.0, 0.0]  # All float values
```

### Applications of Array Data Structure:

- `Storing and accessing data`: Arrays store elements in a specific order and allow constant-time O(1) access to any element.
- `Searching`: If data in array is sorted, we can search an item in O(log n) time. We can also find floor(), ceiling(), kth smallest, kth largest, etc efficiently.
- `Matrices`: Two-dimensional arrays are used for matrices in computations like graph algorithms and image processing.
- `Implementing other data structures`: Arrays are used as the underlying data structure for implementing stacks and queues.
- `Dynamic programming`: Dynamic programming algorithms often use arrays to store intermediate results of subproblems in order to solve a larger problem.
- `Data Buffers`: Arrays serve as data buffers and queues, temporarily storing incoming data like network packets, file streams, and database results before processing.

### Advantages of Array Data Structure:

- `Efficient and Fast Access`: Arrays allow direct and efficient access to any element in the collection with constant access time, as the data is stored in contiguous memory locations.
- `Memory Efficiency`: Arrays store elements in contiguous memory, allowing efficient allocation in a single block and reducing memory fragmentation. -` Versatility`: Arrays can be used to store a wide range of data types, including integers, floating-point numbers, characters, and even complex data structures such as objects and pointers.
- `Compatibility with hardware`: The array data structure is compatible with most hardware architectures, making it a versatile tool for programming in a wide range of environments.

### Disadvantages of Array Data Structure:

- `Fixed Size`: Arrays have a fixed size set at creation. Expanding an array requires creating a new one and copying elements, which is time-consuming and memory-intensive.
- `Memory Allocation Issues`: Allocating large arrays can cause memory exhaustion, leading to crashes, especially on systems with limited resources.
- `Insertion and Deletion Challenges`: Adding or removing elements requires shifting subsequent elements, making these operations inefficient.
- `Limited Data Type Support`: Arrays support only elements of the same type, limiting their use with complex data types.
- `Lack of Flexibility`: Fixed size and limited type support make arrays less adaptable than structures like linked lists or trees.

## Types of Array

![Types of Array](./../../../../src/images/dsa/a-7.png)

### By Size

#### Fixed Sized Array

We cannot alter or update the size of this array. Here only a fixed size (i,e. the size that is mentioned in square brackets []) of memory will be allocated for storage. In case, we don’t know the size of the array then if we declare a larger size and store a lesser number of elements will result in a wastage of memory or we declare a lesser size than the number of elements then we won’t get enough memory to store all the elements. In such cases, static memory allocation is not preferred.

```csharp
// Fixed sized array examples
int[] arr1 = new int [5];

// Another way (Array creation and
// initialization both)
int[] arr2 = {1, 2, 3, 4, 5};
```

#### Dynamic Sized Array

The size of the array changes as per user requirements during execution of code so the coders do not have to worry about sizes. They can add and removed the elements as per the need. The memory is mostly dynamically allocated and de-allocated in these arrays.

```js
// Dynamic Sized Array
let arr = new Array();
```

### By Dimension

#### 1D Array

You can imagine a 1d array as a row, where elements are stored one after another.

![One-dimensional Array(1-D Array)](./../../../../src/images/dsa/a-8.png)

#### 2D Array

> aka **Matrix**

2-D Multidimensional arrays can be considered as an array of arrays or as a matrix consisting of rows and columns.
![Two-Dimensional Array(2-D Array or Matrix)](./../../../../src/images/dsa/a-9.png)

#### 3D Array

A 3-D Multidimensional array contains three dimensions, so it can be considered an array of two-dimensional arrays.
![Three-Dimensional Array(3-D Array)](./../../../../src/images/dsa/a-10.png)

## Operations

### Traversal
> process of accessing and processing each element of an array sequentially

#### Linear Traversal

#### Reverse Traversal

### Insertion

#### At Begin

#### At End

#### At Position

### Deletion

#### At Begin

#### At End

#### At Position

### Searching

#### Linear

#### Binary
