---
title: "SQL vs NoSQL Databases"
slug: "mongo_db"
stack: "MongoDB"
---

## Intro to DB

> Get familiar with what a database is, the types of information a database can store, and two common classifications of databases.

### What is a Database?

In software engineering, databases are systems that store, modify, and access collections of information electronically. To better understand different database classifications and their usefulness to developers, this article will:

- **Discuss why we use databases** in software development and their benefits for end users.
- **Examine the various types of data** a database can store.
- **Consider the features, advantages, and disadvantages** of the two most common classes of databases: relational and non-relational.

### Why Databases?

Almost any type of software application needs a way of storing data. Whether it’s user account information for social media websites like Twitter or entire user-generated videos on platforms like YouTube, **databases** are crucial components of any application we use today. Without them, developers would have no way to meaningfully persist information essential for the application’s functionality.

To paint a picture, we can think of a database as a **bucket** that can store any type of information we want. Here is how most resources on the internet depict a database:

![Databases](./../../src/images/mongo/a-1.png)

But, how do the applications we use (or build) interact with a database❓

When we are looking to interact with a database, we are actually looking to interact with a **database management system**.

### Database Management Systems `DBMS`

Suppose a database is a **bucket** that stores our data. In that case, a `DBMS` is the software that encapsulates said **bucket** (our database(s)) and lets us work with the database using a programming language or easy-to-use graphical interface (GUI). Here is the same image from before, but now illustrating how a `DBMS` fits into the picture:

![Database Management System (DBMS)](./../../src/images/mongo/a-2.png)

✏️: _Most information on the internet doesn’t do a great job distinguishing between a database and a DBMS. In this article, when we talk about a database, we also inherently refer to its associated DBMS_.

When working with a **Database Management System (DBMS)**, we gain the ability to store multiple databases and leverage its unique features for maintaining data. Each `DBMS` allows the storage of various data types, including:

- **Strings of text**
- **Numeric data** (integers, decimals, floating-point numbers)
- **Date and time types**
- **Booleans**
- **Unique data** like images and audio files (though all data is transformed into binary)

This versatility enables `DBMS`s to support a wide range of use cases, from storing simple user information (e.g., email, name, password) to more complex data like videos.

Since each `DBMS` is unique, they offer different advantages and disadvantages. Let's explore two of the most common types of databases and their associated `DBMS`s, focusing on the key distinctions in how they store data and operate.

### Relational Databases

One of the most common classes of databases is the **relational database**, often referred to as **SQL databases**. These databases structure data in a **tabular form**, meaning data is organized into tables with rows and columns. Each table stores individual records of data, making it easy to manage and query information efficiently. 

Here is what the general structure looks like:

![Album table](./../../src/images/mongo/a-3.png)

Let’s apply the idea of a relational database to a concrete example. Imagine we launched a music streaming website where users find information about artists and their catalog of songs. How might we organize and store this content in a relational database?

We’d probably have one table that stores information about albums. Within the albums table, we’d have several columns to store specific information about each album, such as its title and release year. Additionally, we could store songs, and artist information in separate tables. Here is what our tables might look like:

![Songs table](./../../src/images/mongo/a-4.png)

![Artist table](./../../src/images/mongo/a-5.png)

Relational databases are unique because they are based on presenting data in terms of relationships. To accomplish this, relational databases enable associations between tables to be defined, the most common associations being “one-to-one”, “one-to-many”, and “many-to-many”. For example, in our music database, we could establish the following relationships between our data:

![Relationships](./../../src/images/mongo/a-6.png)

In the above image, we have established two relationships:

- A relationship between the Songs and Albums table. A song “belongs” to an album via the `album_id` field.
- A relationship between the Albums and Artists table. An album “belongs” to an artist via the `artist_id` field.

Lastly, note the following important properties of relational databases:

- **Pre-defined Schema**: Relational databases are unique because the **database schema** - the “blueprint” of the database structure - is typically determined before any data is ever inserted. This would mean we would likely decide the specific tables, and their associated relationships, before even inserting any data into them.

- **SQL Use**: Developers communicate with a relational database using SQL (Structured Query Language). SQL is an industry-standard database language that has been used for decades. Extensive documentation and readable syntax make it approachable for beginners. The dependence of relational databases on SQL is why some developers and documentation sometimes refer to relational databases as SQL databases.

- **Relational Database Management System**: Any relational database is managed by a relational database management system (RDBMS). This type of DBMS allows the data to follow a relational model (e.g., setup relationships) and manage the data using SQL. Two of the most popular RDBMSs are [PostgreSQL](https://www.postgresql.org/) and [MySQL](https://www.mysql.com/).

- **Unique Disadvantages**: At the enterprise level, where data sets are massive, setting up a relational database can be costly, and the expenses required to maintain and scale it can compound significantly over time. Furthermore, rows and columns consume a great deal of physical space which can lead to implications for performance and cost.

### Non-Relational Databases

The second most common class of databases is **non-relational databases**, commonly referred to as **NoSQL databases**. These databases do not follow the relational model, meaning they typically don’t store data in tables, and data isn’t strictly represented with relationships. Under the umbrella of non-relational databases, there are many different types, each with its own framework for organizing data. Some examples include:

- [**Document databases**]((https://en.wikipedia.org/wiki/Document-oriented_database))
- [**Graph databases**](https://en.wikipedia.org/wiki/Graph_database)
- [**Key-value databases**](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)

Collectively, non-relational databases specialize in storing unstructured data that doesn’t fit neatly into rows and columns.

To visualize the difference, let’s return to our music database and examine what the data would look like in a NoSQL format. Here is the same database but stored inside a document database, a special category of NoSQL database where data is stored as JSON:

![JSON format](./../../src/images/mongo/a-7.png)

Additionally, note the following properties of non-relational databases:

- **Flexibility and Scalability**: The unstructured nature of non-relational databases facilitates the design of flexible schemas (schemas that do not need to be defined beforehand) and makes these types of databases highly adaptable to the changing needs of an application. They are also well-suited for expansion or scalability and are relatively inexpensive to maintain compared to relational databases.

- **Custom Query Language**: Unlike relational databases that all use SQL as a standard query language, most NoSQL databases have their own custom language.

- **Unique Disadvantages**: Since the data in non-relational databases is mainly unstructured, it can often become hard to maintain and keep track of. Additionally, since every NoSQL database uses its own custom query language, there is a new learning curve for each one we choose to work with.

## Intro to NoSQL

In the world of databases, there are many different ways to organize and store data. We are already familiar with relational databases, which store data in rows, form relationships between tables, and use SQL for querying. However, a new type of database, **NoSQL**, began to rise in popularity in the early 21st century.

**NoSQL** stands for "not-only SQL" and is also commonly referred to as "non-relational" or "non-SQL". Any database technology that stores data differently from relational databases can be categorized as a NoSQL database. To get a good grasp on NoSQL, this article will:

- **Cover a brief overview** of how we arrived at NoSQL technology.
- **Examine distinct reasons** to choose or not choose a NoSQL database.
- **Explore common types** of NoSQL databases and how each type structures data.

Let’s dive in!

### Arriving at NoSQL

The need to store and organize data records dates back to way before the term “database” was coined. It wasn’t until around the late 1960s (although there were [methods of data storage](https://en.wikipedia.org/wiki/Punched_card) long before then) that the first implementation of a computerized database came into existence. Relational databases gained popularity in the 1970s and have remained a staple in the database world ever since. However, as datasets became exponentially larger and more complex, developers began to seek a flexible and more scalable database solution. This is where NoSQL came in. Let’s examine some of the notable reasons developers may choose a NoSQL database.

### Is NoSQL the Right Option?

When considering what database suits an application’s needs, it’s important to note that relational and non-relational (NoSQL) databases each offer distinct advantages and disadvantages. While not an exhaustive list, here are some notable benefits that a NoSQL database may provide:

- **Scalability**: NoSQL was designed with scalability as a priority. NoSQL can be an excellent choice for massive datasets that need to be distributed across multiple servers and locations.
- **Flexibility**: Unlike a relational database, NoSQL databases don’t require a schema. This means that NoSQL can handle unstructured or semi-structured data in different formats.
- **Developer Experience**: NoSQL requires less organization and thus lets developers focus more on using the data than on figuring out how to store it.

While these are important benefits, NoSQL databases do have some drawbacks:

- **Data Integrity**: Relational databases are typically [ACID](https://en.wikipedia.org/wiki/ACID) compliant, ensuring high data integrity. NoSQL databases follow BASE principles (basic availability, soft state, and eventual consistency) and can often sacrifice integrity for increased data distribution and availability. However, some NoSQL databases do offer ACID compliance.
- **Language Standardization**: While some NoSQL databases do use the Structured Query Language (SQL), typically, each database uses its unique language to set up, manage, and query data.

Now that we have a better idea about why we may choose or not choose a NoSQL solution, let’s explore our choices for data organization by exploring a few different types of NoSQL databases.

### Types of NoSQL Databases

There are four common types of NoSQL databases that store data in slightly different ways. Each type will provide distinct advantages and disadvantages depending on the dataset. In the examples below, we will be using an e-commerce website to illustrate how each database may store the data.

#### Key-Value

A key-value database consists of individual records organized via key-value pairs. In this model, keys and values can be any type of data, ranging from numbers to complex objects. However, keys must be unique. This means this type of database is best when data is attributed to a unique key, like an ID number. Ideally, the data is also simple, and we are looking to prioritize fast queries over fancy features. For example, let’s say we wanted to store shopping cart information for customers who shop in an e-commerce store. Our key-value database might look like this:

| Key          | Value                                             |
| ------------ | ------------------------------------------------- |
| customer-123 | { “address”: “…”, name: “…”, “preferences”: {…} } |
| customer-456 | { “address”: “…”, name: “…”, “preferences”: {…} } |

Amazon [DynamoDB](https://aws.amazon.com/dynamodb/) and [Redis](https://redis.com/) are popular options for developers looking to work with key-value databases.

#### Document

A document-based (also called document-oriented) database consists of data stored in hierarchical structures. Some supported document formats include JSON, BSON, XML, and YAML. The document-based model is considered an extension of the key-value database and provides querying capabilities not solely based on unique keys. Documents are considered very flexible and can evolve to fit an application’s needs. They can even model relationships!

For example, let’s say we wanted to store product information for customers who shop in our e-commerce store. A products document might look like this:

```json
[
    {
        "product_title": "Codecademy SQL T-shirt",
        "description": "SQL > NoSQL",
        "link": "https://shop.codecademy.com/collections/student-swag/products/sql-tshirt"
        "shipping_details": {
            "weight": 350,
            "width": 10,
            "height": 10,
            "depth": 1
        },
        "sizes": ["S", "M", "L", "XL"],
        "quantity": 101010101010,
        "pricing": {
            "price": 14.99
        }
    }
]
```

[MongoDB](https://www.mongodb.com/?utm_campaign=academia_partners&utm_source=codecademy&utm_medium=referral) is a popular option for developers looking to work with a document database.

#### Graph

A graph database stores data using a [graph structure](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)>). In a graph structure, data is stored in individual nodes (also called vertices) and establishes relationships via edges (also called links or lines). The advantage of the relationships built using a graph database as opposed to a relational database is that they are much simpler to set up, manage, and query. For example, let’s say we wanted to build a recommendation engine for our e-commerce store. We could establish relationships between similar items our customers searched for to create recommendations.

![Graph DB](./../../src/images/mongo/a-8.png)

In the graph above, we can see that there are four nodes: “Neo”, “Hiking”, “Cameras”, and “Hiking Camera Backpack”. Because the user, “Neo”, searched for “Hiking” and “Cameras”, there are edges connecting all 3 nodes. More edges are created after the search, linking a new node, “Hiking Camera Backpack”.

[Neo4j](https://neo4j.com/) is a popular option for developers looking to work with a graph database.

#### Column Oriented

A column-oriented NoSQL database stores data similar to a relational database. However, instead of storing data as rows, it is stored as columns. Column-oriented databases aim to provide faster read speeds by being able to quickly aggregate data for a specific column. For example, take a look at the following e-commerce database of products:

![Row Oriented Vs Column Oriented](./../../src/images/mongo/a-9.png)

If we wanted to analyze the total sales for all the products, all we would need to do is aggregate data from the sales column. This is in contrast to a relational model that would have to pull data from each row. We would also be pulling adjacent data (like size information in the above example) that isn’t relevant to our query.

Amazon’s [Redshift](https://aws.amazon.com/redshift/) is a popular option for developers looking to work with a column-oriented database.

### Summary

**Databases**
- Systems that store, modify, and access structured collections of information electronically.
- Database Management Systems (DBMS) allow developers to interact with databases via code or a graphical user interface.
- Can store a wide range of data types, including text, numbers, dates, times, and various file types.

**Relational Databases**
- Organize data into tables with rows and columns, relying on relationships to structure data.
- Typically use a pre-defined schema before data entry.
- Use SQL for querying and managing data.
- Can be costly to set up and scale, with performance and cost being significant factors.

**Non-Relational Databases (NoSQL)**
- Do not follow the relational model and typically have a more flexible schema.
- Include various types such as key-value, document, graph, and column-oriented databases.
- Grew in popularity due to the increasing size and complexity of datasets.
- Offer flexibility, scalability, and speed advantages but may lack data integrity and standardization across different NoSQL databases.
- Use custom query languages, leading to a learning curve for each type.

**Relational Database Relationship Types**
- **One-to-One**: Each record in one table is linked to one record in another table (e.g., book and its ISBN).
- **One-to-Many**: One record in a table is linked to multiple records in another table (e.g., publisher and books).
- **Many-to-Many**: Multiple records in one table are linked to multiple records in another table (e.g., books and authors).

**Document-based NoSQL Database**
- Stores data as objects in formats like JSON, YAML, or XML.

**Key-Value NoSQL Database**
- Uses records consisting of a key (name) and a value (data).

**Relational Database: Predefined Schema**
- Follows predefined schemas where tables and relationships are outlined before data insertion.

When choosing a database for a project, consider the trade-offs between relational and NoSQL databases to select the one that best suits your use case.

## IQ

### General Database Concepts:

- What is a database and why are they important in software development❓
- What is the difference between a database and a Database Management System (DBMS)❓
- What types of data can a DBMS store❓

### Relational Databases (SQL):

- What is a relational database and how does it organize data❓
- What are the key properties of a relational database❓
Can you explain the different types of relationships in a relational database (e.g., one-to-one, one-to-many, many-to-many)❓
- What is a database schema, and why is it important in relational databases❓
- What are some disadvantages of relational databases, particularly in enterprise-level applications❓
- What is an RDBMS and which popular systems are examples of it❓
How does SQL interact with relational databases❓

### Non-Relational Databases (NoSQL):

- What is a non-relational (NoSQL) database, and how does it differ from relational databases❓
- What are some common types of NoSQL databases and how do they store data❓
- Why might a developer choose a NoSQL database over a relational database❓
- Can you explain the flexibility and scalability benefits of NoSQL databases❓
- What are some disadvantages of NoSQL databases, particularly regarding data integrity and language standardization❓
- What is the BASE principle in NoSQL databases, and how does it differ from the ACID principle in relational databases❓

### NoSQL Types and Use Cases:

- What is a key-value NoSQL database, and in what scenarios might it be most useful❓
- What is a document-based NoSQL database, and how does it store data❓
- What is a graph database, and how does it represent data relationships❓
- How does a column-oriented NoSQL database differ from a row-oriented relational database❓

### Choosing Between SQL and NoSQL:

- In what scenarios would you recommend using a relational database versus a non-relational database❓
- What are the performance and cost considerations when choosing between SQL and NoSQL databases❓
- What factors influence the decision to use SQL or NoSQL for a large-scale application❓

