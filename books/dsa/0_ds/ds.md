---
title: "Data Structures"
slug: "dsa/0_ds"
stack: "DSA"
---

## What is Data Strucuture

> A data structure is a way of organizing and storing data in a computer so that it can be accessed and used efficiently. It refers to the logical or mathematical representation of data, as well as the implementation in a computer program.


### Applications:
DS are used in a wide range of computer programs and applications, including:

- **Databases**: DS are used to organize and store data in a database, allowing for efficient retrieval and manipulation.
- **Operating systems**: DS are used in the design and implementation of operating systems to manage system resources, such as memory and files.
- **Computer graphics**: DS are used to represent geometric shapes and other graphical elements in computer graphics applications.
- **Artificial intelligence**: DS are used to represent knowledge and information in artificial intelligence systems.

### Advantages of DS:
The use of DS provides several advantages, including:

- **Efficiency**: DS allow for efficient storage and retrieval of data, which is important in applications where performance is critical.
- **Flexibility**: DS provide a flexible way to organize and store data, allowing for easy modification and manipulation.
- **Reusability**: DS can be used in multiple programs and applications, reducing the need for redundant code.
- **Maintainability**: Well-designed DS can make programs easier to understand, modify, and maintain over time.

### Data Structure Vs Type
|Data Type|Data Structure|
|-|-|
|The data type is the form of a variable to which a value can be assigned. It defines that the particular variable will assign the values of the given data type only.|Data structure is a collection of different kinds of data. That entire data can be represented using an object and can be used throughout the program.|
|It can hold value but not data. Therefore, it is dataless.|It can hold multiple types of data within a single object.|
|The implementation of a data type is known as abstract implementation.|Data structure implementation is known as concrete implementation.|
|There is no time complexity in the case of data types.|In data structure objects, time complexity plays an important role.|
|In the case of data types, the value of data is not stored because it only represents the type of data that can be stored.|While in the case of data structures, the data and its value acquire the space in the computer’s main memory. Also, a data structure can hold different kinds and types of data within one single object.|
|Data type examples are int, float, double, etc.|Data structure examples are stack, queue, tree, etc.|

### Classification

Different data structures that are used to solve different mathematical and logical problems. By using data structure, one can organize and process a very large amount of data in a relatively short period

```markdown markmap
- Data Structure
  - Linear
    - Static
      - Array
      - Matrix
    - Dynamic
      - Stack
      - Queue
      - LinkedList
  - Non-Linear 
    - Tree
    - Graph
```

#### Linear DS:
DS in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear DS. 
Examples of linear DSs are `array`, `stack`, `queue`, `linked list`, etc.
- **Static DS**: Static DS has a fixed memory size. It is easier to access the elements in a static DS. e.g. `array`.
- **Dynamic DS**: In the dynamic DS, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code. 
Examples of this DS are `queue`, `stack`, `linked list`, etc.
#### Non-linear DS: 
- DSs where data elements are not placed sequentially or linearly are called non-linear DSs. 
- In a non-linear DS, we can’t traverse all the elements in a single run only. 
e.g. are `trees` and `graphs`.

### Need of DS
- The structure of the data and the synthesis of the algorithm are relative to each other. 
- Data presentation must be easy to understand so the developer, as well as the user, can make an efficient implementation of the operation.
- DSs provide an easy way of **organizing**, **retrieving**, **managing**, and **storing** data.
- Here is a list of the needs for data.

1. DS modification is easy. 
2. It requires less time. 
3. Save storage memory space. 
4. Data representation is easy. 
5. Easy access to the large database.