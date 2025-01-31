---
title: "Data"
slug: "mongo_db/0_intro/0_data"
stack: "MongoDB"
---

> How data is stored in MongoDB

## Intro
By now, we know that MongoDB is a NoSQL document database and that databases like these have some distinct differences relative to relational databases. In this article, we will dive deeper into the technical aspects of the data that is stored inside of a MongoDB database.

Specifically, we will:

- Dive deeper into how MongoDB stores data via collections and documents
- Gain familiarity with two data file formats: JSON and BSON
- Examine how these data formats are related to data stored in MongoDB

Let’s get started!

## Collections and Documents

- Recall that MongoDB uses the document model i.e., that data stored in a MongoDB database resides in a `document` within a `collection`.

❓**But what does that actually look like**

To help better visualize the document model, let’s imagine we are using MongoDB to run our camera store. Naturally, we need to keep track of `purchases`, our `customers`, etc. Let’s break down each layer of the store’s database.

- At the highest level, we have our database – an instance of MongoDB that contains all the various data our store needs to operate.

- Within this instance of MongoDB are `collections`. `Collections` are subsets of our data.

- So, assuming our database contains three types of data – purchase data, inventory, and customer info – each of these would have its own collection.

- Within each collection, we store `individual records` called `documents`. These documents all belong to that particular subset of our data.

So, for example, within the customer collection, we could store personal information about each of our customers. Every customer would have their own document within the collection.

To summarize,

- A `document` is simply a record that stores information about a particular entity.
- A `collection`, in turn, is just a group of documents containing similar information.
- A `MongoDB database` is just a number of collections assembled together to store data for a specific use case – in this case running our camera store.

This is what the hierarchy would look like visually:
![MongoDB heirarchy](./../../../../src/images/mongo/b-2.png)

Now that we have a general idea of how data is stored in a MongoDB database, let’s take a closer look at documents and how the information they contain is formatted for flexible storage.

❓**Which of the following correctly describes the structure of a MongoDB database**

> A database contains collections; these collections contain documents that store individual records of data.

##  Clustered Collections

> [Clustered collections](https://www.mongodb.com/docs/manual/core/clustered-collections/) are created with a clustered index. The clustered index specifies the order in which documents are stored.

### Benefits

- **Faster Queries**: Clustered collections enable faster queries without needing a secondary index, especially for range scans and equality comparisons on the clustered index key.
- **Lower Storage Size**: They have a lower storage size, improving performance for queries and bulk inserts.
- **TTL Index Integration**: Clustered collections can eliminate the need for a secondary TTL (Time To Live) index. A clustered index can also serve as a TTL index if the `expireAfterSeconds` field is specified.
- **Improved Delete Performance**: Using a clustered index as a TTL index enhances document delete performance and reduces storage size.
- **Performance Improvements**: Clustered collections offer additional performance benefits for inserts, updates, deletes, and queries.
- **Efficient Indexing**: All collections have an `_id` index. In non-clustered collections, the `_id` index is stored separately, requiring two writes for inserts, updates, and deletes, and two reads for queries. In clustered collections, the index and documents are stored together in `_id` value order, requiring only one write and one read for these operations.

### Behavior

- **Document Ordering**: Clustered collections store documents ordered by the clustered index key value, which must be `{ _id: 1 }`.
- **Single Clustered Index**: Only one clustered index is allowed per collection, as documents can only be stored in one order.
- **Sorted Data Storage**: Only collections with a clustered index store data in sorted order.
- **Secondary Indexes**: You can add secondary indexes to a clustered collection, but clustered indexes differ from secondary indexes in several ways:
  - A clustered index can only be created when the collection is created.
  - Clustered index keys are stored with the collection, and the collection size includes the clustered index size.
- **Query Planning**: 
  - Starting in MongoDB 6.0.7, the query planner evaluates the clustered index against secondary indexes during query planning. If a query uses a clustered index, MongoDB performs a bounded collection scan.
  - Prior to MongoDB 6.0.7, the query planner would select a secondary index over a clustered index by default if the secondary index was usable. In MongoDB 6.1 and earlier, you must provide a hint to use the clustered index, as the query optimizer does not automatically select it.

### Limitations

- **Clustered Index Key**: Must be `{ _id: 1 }`.
- **Transformation Restrictions**: You cannot transform a non-clustered collection to a clustered collection, or vice versa. Instead, you can:
  - Read documents from one collection and write them to another using an aggregation pipeline with an `$out` or `$merge` stage.
  - Export collection data with `mongodump` and import it into another collection with `mongorestore`.
- **Hidden Indexes**: Clustered indexes cannot be hidden.
- **Storage Size**: Secondary indexes on a clustered collection may result in a larger storage size, especially if the clustered index keys are large.
- **Capped Collections**: Clustered collections may not be capped collections.


### Setting Your Own Clustered Index Key Values

- **Default Values**: By default, clustered index key values are unique document object identifiers.
- **Custom Key Requirements**:
  - **Unique Values**: The key must contain unique values.
  - **Immutability**: The key must be immutable.
  - **Sequential Values**: While not required, sequentially increasing values improve insert performance.
  - **Size Consideration**: The key should be as small as possible. Although a clustered index supports keys up to 8 MB, smaller keys are preferable.
- **Impact of Large Keys**:
  - Large clustered index keys increase the size of the clustered collection and secondary indexes, reducing performance and storage benefits.
  - Secondary indexes on clustered collections with large keys may use more space compared to those on non-clustered collections.

⚠️: Randomly generated key values may decrease a clustered collection's performance.

❓ **db.runCommand** to create a clustered collection named `stocks`:

```py
db.runCommand({
   create: "products",
   clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "products clustered key" }
});
```

❓ **db.createCollection** to create a clustered collection named `stocks`:

```py
db.createCollection(
   "stocks",
   { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "stocks clustered key" } }
);
```

❓ **db.createCollection** to create a clustered collection named `orders`:

```py
db.createCollection(
   "orders",
   { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "orders clustered key" } }
);
```

❓ **db.orders.insertMany** to add documents to the `orders` collection:

```py
db.orders.insertMany([
   { _id: ISODate("2022-03-18T12:45:20Z"), "quantity": 50, "totalOrderPrice": 500 },
   { _id: ISODate("2022-03-18T12:47:00Z"), "quantity": 5, "totalOrderPrice": 50 },
   { _id: ISODate("2022-03-18T12:50:00Z"), "quantity": 1, "totalOrderPrice": 10 }
]);
```

❓ **db.orders.find** to query orders where the order date is greater than a specific date:

```py
db.orders.find({ _id: { $gt: ISODate("2022-03-18T12:47:00.000Z") } });
```

❓ **db.runCommand** To check if a collection is clustered, use the `listCollections` command:

```py
db.runCommand({ listCollections: 1 });
```

For clustered collections, the output will include the `clusteredIndex` details, such as:

```json
{
   name: 'orders',
   type: 'collection',
   options: {
      clusteredIndex: {
         v: 2,
         key: { _id: 1 },
         name: 'orders clustered key',
         unique: true
      }
   }
}
```

## Clustered Collections

## Data as JSON

- One of the main advantages of using a `document database` is the flexibility it provides with respect to how data is stored.
- In the case of MongoDB, this flexibility comes partly from a data format called **J**ava**S**cript **O**bject **N**otation aka `JSON`. JSON is simply a text format for storing data.
  Here is what JSON looks like:

```json
{
  "name": "Rodney",
  "occupation": "photographer",
  "years_of_experience": 7
}
```

In the above example, we have JSON that stores information about a job applicant for a position at our camera store.

✏️:that JSON stores data as what is known as “key-value” pairs, which are always within a pair of curly braces (“{ }“).

MongoDB and various online resources also refer to these pairs as `field-value` or `name-value` pairs. For simplicity, we will refer to them as “field-value” pairs. Here is a breakdown of what fields and values mean in the context of JSON:

### Fields

> A field is a unique identifier for a data point; it tells us what kind of data is being stored.

In the job application JSON we just examined, the fields are `"name"`, `"occupation"`, and `"years_of_experience"`. Note that JSON field names must be double-quoted (""). There are a number of opinions with respect to how these names should be formatted.

### Values

> Every field has an associated value. The values are the data points themselves.

In our camera store applicant example, the values are `"Rodney"`, `"photographer"`, and `7`, each of which corresponds to their respective field. Note that JSON can host a variety of data types in value fields such as `strings`, `numbers`, `arrays`, or even `nested data`. Additionally, each of these field-value pairs must be separated by a comma `,`.

- The primary advantage of JSON is readability and flexibility. Data is stored in an easily editable format that is totally comprehensible to humans as well as our computers.

However, convenience ultimately comes at a price. There are three main drawbacks to storing data as JSON:

- JSON is inefficient from a computational perspective as text is time-consuming to parse.

- Its readability as text also means that it is not efficient storage-wise. For example, it might be helpful for us to have descriptive names of fields, but they tend to be longer and, for that reason, take up more space.

- JSON only supports a very limited number of data types – dates, for instance, are not supported natively.

> While there are some clear advantages to using JSON to format data, these drawbacks make JSON a poor choice as a primary storage format inside databases. i.e., why MongoDB invented BSON.

## Data as BSON

**B**inary Java**S**cript **O**bject **N**otation, aka `BSON`, is the format that MongoDB uses to store data.

`BSON` is different than JSON in three fundamental ways:

- `BSON` is not human-readable.
- `BSON` is far more efficient storage-wise.
- `BSON` supports a number of data formats that JSON does not like dates.

Our same JSON object from earlier looks like this in BSON:

```
\x00\x00\x00\x02name\x00\a\x00\x00\x00Rodney\x00\x02occupation\x00\r\x00\x00\x00photographer\x00\x10year_of_experience\x00\a\x00\x00\x00\x00
```

- While it may not be legible, MongoDB wrote the [BSON specification](https://bsonspec.org/) and invented the format to _bridge the gap between_ JSON’s **flexibility** and **readability** and the **required performance** of a large database.
- MongoDB **stores data** as `BSON` internally but allows users to **create and manipulate data** as `JSON`. i.e., `efficient data storage` and a `great developer experience`!

## IQ

We learned some of the basics of how data is stored in MongoDB. Specifically, we learned:

- A `MongoDB instance` can contain many `database(s)`,

  - `database` are `collection(s)` of similar data.
  - `collection` contain `individual record(s)`
  - `individual record` aka `document` that are stored as field-value pairs.

- `JSON` is a **human-readable** but **inefficient format for storing data**; conversely, `BSON` is **not human-readable** but is **highly efficient**.

- MongoDB **users** can **easily store and manipulate data as JSON** – **even though internally, that data is stored as BSON**.

- MongoDB’s use of the document model, combined with its dual use of `JSON` and `BSON`, makes it a highly efficient and usable option for storing data. To continue learning and get a more in-depth overview of MongoDB data, check out the following two guides on JSON/BSON from MongoDB:

  - [JSON and BSON Guide](https://www.mongodb.com/json-and-bson)
  - [Explaining BSON with Examples](https://www.mongodb.com/basics/bson)

**❓**

1. What type of database is MongoDB and how is data stored in it?
2. Explain the document model in MongoDB.
3. What is a MongoDB collection, and how does it relate to documents?
4. Can you describe the hierarchy of how data is stored in MongoDB?
5. What is JSON and how is it used in MongoDB?
6. What are the advantages and disadvantages of using JSON for data storage?
7. What are field-value pairs in JSON? Can you give an example?
8. What are some limitations of JSON as a data format in databases?
9. What is BSON and why does MongoDB use it over JSON for internal storage?
10. How is BSON different from JSON in terms of efficiency and data types?
11. Can you describe a scenario where BSON provides advantages over JSON?
12. Why is BSON considered more storage-efficient than JSON in MongoDB?
13. How does MongoDB handle the conversion between JSON and BSON for developers?
14. What are the key differences between how JSON and BSON store data?