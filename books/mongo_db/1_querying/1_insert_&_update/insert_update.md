---
title: "Quering- Inserts and Updates"
slug: "mongo_db/1_querying/1_insert_&_update"
stack: "MongoDB"
---

## The `_id` Field

By this point, we’ve learned the fundamentals of querying data in MongoDB. In this lesson, we’ll learn how to insert new documents, and update existing ones.

As you continue to work with documents in MongoDB, you may notice one field that exists across every document: the [\_id](https://www.mongodb.com/docs/manual/core/document/#the-_id-field/?utm_campaign=academia_partners&utm_source=codecademy&utm_medium=referral) field. It might look similar to this:

```
_id: ObjectId("5eb3d668b31de5d588f4305b")
```

The `_id` field plays a vital role in every document inside of a MongoDB collection, and it has a few distinct characteristics:

- The `_id` field is required for every document in a collection and must be unique.
- MongoDB automatically generates an `ObjectId` for the `_id` field if no value is provided.
- Developers can specify the `_id` with something other than an `ObjectId` such as a number or random string, if desired.
- The `_id` field is immutable, and once a document has an assigned `_id`, it cannot be updated or changed.

The `ObjectId` is a 12-byte data type that is commonly used for the `_id` field. When generated automatically, each `ObjectId` contains an embedded timestamp which is generally unique. This allows documents to be inserted in order of creation time (or very close to it) and for users to roughly sort their results by creation time if necessary. While we won’t explicitly need the `_id` field to update or create new documents, it’s important to note that this is how MongoDB identifies each unique document that is inserted or updated in a collection.

Let’s return to our restaurants collection to look at the `_id` fields that currently exist in our documents.

```python
# Connect to the restaurants database, then using the listingsAndReviews collection, query for all the documents in the collection using the .find() method. Take a moment to observe the _id field in each document.

> use restaurants
switched to db restaurants

restaurants> db.listingsAndReviews.find()
[
    {
        _id : ObjectId("a098s234rsafikno878"),
        address:{
            building:'2099',
            coord:[-73.122343455, 40.3452123451],
            street:'Atlantic Eve',
            zipCode:'11231'
        },
        borough:"Brooklyn"
        cuisine:"Latin"
        grades:[
            {
                date:IsoDate("2014-07-11T00:00:00.000Z"),
                grade: 'A'
                score: 37
            },
            {
                date:IsoDate("2014-09-11T00:00:00.00Z"),
                grade: 'C'
                score: 8
            }
        ],
        michelen_stars:[2008, 2009, 2010, 2020],
        name:"Bradly's",
        restaurant_id:"500000001"
    }
    …
]


```

## Inserting a Single Document

- Now that we know how MongoDB identifies each individual document, let’s focus on the Create aspect of CRUD operations.
- Specifically, how do we start adding new documents to our collections? In MongoDB, we can use the `.insertOne()` method to insert a single new document!

The syntax for the method looks as follows:

```
db.<collection>.insertOne(
  <new_document>,
  {
    writeConcern: <document>,
  }
);
```

The `.insertOne()` method has a single required parameter, the document to be inserted, and a second optional parameter named writeConcern. We won’t be working with the writeConcern parameter in this course, but more details about the parameter can be found in the official MongoDB documentation. For now, know that it’s an optional parameter that allows us to specify how we want our write requests to be acknowledged by MongoDB.

Let’s take a look at an example where we insert a single document into a videogames collection:

```
db.videogames.insertOne({
  title: "Elden Ring",
  year: 2022,
  company: "Fromsoftware"
});
```

When a document is successfully inserted with `.insertOne()`, the output is an object with a field named acknowledged (related to the writeConcern parameter we mentioned earlier) with the value true and a field named insertedId where the value is the \_id field for the newly inserted document. Here is what it looks like:

```
{
  "acknowledged": true,
  "insertedId": ObjectId("5fd989674e6b9ceb8665c63d")
}
```

✏️: that if we try to insert into a specified collection that does not exist, MongoDB will create one and insert the document into the newly created collection.

Now, let’s practice using the `.insertOne()` method by returning to our listingsAndReviews collection inside the restaurants database.

```python

# Connect to the restaurants database. Then, query the listingsAndReviews collection for all its documents to see what the structure of each document looks like.

> use restaurants
switched to db restaurants

restaurants> db.listingsAndReviews.find()
[
    {
        _id : ObjectId("a098s234rsafikno878"),
        address:{
            building:'2099',
            coord:[-73.122343455, 40.3452123451],
            street:'Atlantic Eve',
            zipCode:'11231'
        },
        borough:"Brooklyn"
        cuisine:"Latin"
        grades:[
            {
                date:IsoDate("2014-07-11T00:00:00.000Z"),
                grade: 'A'
                score: 37
            },
            {
                date:IsoDate("2014-09-11T00:00:00.00Z"),
                grade: 'C'
                score: 8
            }
        ],
        michelen_stars:[2008, 2009, 2010, 2020],
        name:"Bradly's",
        restaurant_id:"500000001"
    }
    …
]

# Use the .insertOne() method to insert a new document in the listingsAndReviews collection with the following properties:
#   name: "Elvins",
#   cuisine: "American",
#   restaurant_id: "40564243"

db.listingsAndReviews.insertOne({ name: "Elvins", cuisine: "American", restaurant_id: "40564243" })
{
  acknowledged:true,
  insertedId:ObjectId("435aaa624350ft92348")
}

# To query a collection for a single document using the findOne() method, you can use the following syntax:

restaurants> db.listingsAndReviews.findOne({restaurant_id:"40564243"})
{
    _id : ObjectId("435aaa624350ft92348"),
    cuisine:"American"
    name:"Elvins",
    restaurant_id:"40564243"
}

```

## Inserting Multiple Documents

We have just used `.insertOne()` to insert a single document into a collection, but what if we want to insert multiple documents into a collection? Here’s where the MongoDB `.insertMany()` method comes in.

As its name suggests, `.insertMany()` will insert multiple documents into a collection. Much like .insertOne(), if the collection we’ve specified does not exist, one will be created.

The syntax for the method is as follows:

```
db.<collection>.insertMany(
  [<document1>, <document2>, ...],
  {
    writeConcern: <document>,
    ordered: <boolean>
  }
);
```

This method has three parameters:

- An array of documents; the documents we want to add to the collection.
- A parameter named `writeConcern`.
- A parameter named `ordered`.

The ordered parameter can be handy since it allows us to specify if MongoDB should perform an ordered or unordered insert.

- If set to false, documents are inserted in an unordered format.
- If set to true, the default behavior, MongoDB will insert the documents in the order given in the array.

✏️: It’s worth noting that with ordered inserts, if a single document fails to be inserted, the entire insert operation will cease, and any remaining documents will not be inserted. On the other hand, unordered inserts will continue in the case of an insert failure and attempt to insert any remaining documents.

Let’s look at an example of `.insertMany()` on a collection named students:

```
db.students.insertMany([
  {
    name: "Mia Ramirez",
    age: 15
  },
  {
    name: "Kiv Huang",
    age: 17
  },
  {
    name: "Sam Soto",
    age: 16
  }
], { ordered: true })
```

The command above will insert the documents in the order specified. Below you will find the output of the command with an additional note that indicates which `_id` represents which document.

```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63054a5376742c0e5a0cfafb"), // Mia
    '1': ObjectId("63054a5376742c0e5a0cfafc"), // Kiv
    '2': ObjectId("63054a5376742c0e5a0cfafd") // Sam
  }
}
```

Let’s practice adding multiple new restaurants to our listingsAndReviews collection!

```python
# Connect to the restaurants database. Insert two new documents in an ordered fashion into the listingsAndReviews collection. The documents should have the following properties, respectively:

## // 1st document
###  name: "Boucherie",
###  borough: "Manhattan",
###  cuisine: "American",
###  restaurant_id: "49246215"

## 2nd document
### name: "Carmines",
### borough: "Manhattan",
### cuisine: "Italian",
### restaurant_id: "48259401"

> use restaurants
switched to db restaurants

restaurants>db.listingsAndReviews.insertMany([
  {
    name: "Boucherie",
    borough: "Manhattan",
    cuisine: "American",
    restaurant_id: "49246215"
  },
  {
    name: "Carmines",
    borough: "Manhattan",
    cuisine: "Italian",
    restaurant_id: "48259401"
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63054a5376742c0e5a0cfafb"), // Boucherie
    '1': ObjectId("63054a5376742c0e5a0cfafc"), // Carmines
  }
}


# Using .findOne() method, query for one of the documents that you just inserted using the name field.
restaurants> db.listingsAndReviews.findOne({name:"Boucherie"})
{
  _id: ObjectId("63054a5376742c0e5a0cfafb"),
  name: "Boucherie",
  borough: "Manhattan",
  cuisine: "American",
  restaurant_id: "49246215"
}

```

## Updating a Single Document

Now that we have explored a few Create operations, let’s look at operations that Update data.

In MongoDB, we can use the `.updateOne()` method to update a single document.

- The method finds the first document that matches specific filter criteria and applies specified update modifications.
  ✏️ : that it updates the first matching document, even if multiple documents match the criteria.

Let’s take a look at the syntax for the `.updateOne()` method:

```
db.<collection>.updateOne(<filter>, <update>, <options>)
```

The method has three parameters:

- `filter`: A document that provides selection criteria for the document to update.
- `update`: A document that specifies any modifications to be applied. This parameter gives us quite a bit of flexibility, allowing us to modify existing fields, insert new ones, or even replace an entire document.
- `options`: A document that includes any additional specifications for our update operation such as `upsert` and `writeConcern`.

To explore the importance of each of these parameters and how the `updateOne()` method works, consider a third-party retail store for used smartphones. The store keeps all their information in a collection called `products`, where each document holds information regarding a specific type of smartphone:

```
{
  _id: ObjectId("507f1fg7bcf865d799439h11"),
  title: "iPhoneX",
  price: 1000,
  stock: 25
},
{
  _id: ObjectId("507f1fg7bcf865d799439h12"),
  title: "iPhone7",
  price: 600,
  stock: 25
},
{
  _id: ObjectId("507f1fg7bcf865d799439h13"),
  title: "iPhone6",
  price: 500,
  stock: 25
}
```

To start an update operation, we must first choose our `filter`. This is similar to when we used `find()` to retrieve a document based on specific criteria. So, for example, if we wanted to update only the document with the title **"IPhoneX"**, we could specify the title as the filter:

```

db.products.updateOne({ title: "iPhoneX" }, <update>, <options> });

```

Now that we have a document we can target for the update, we can move onto the `update` parameter.

To update a document in MongoDB, we have to specify what fields we want to update and how we want to update them. This is where the update parameter comes into play. To specify how we want to update a document, we can use [MongoDB update operators](https://www.mongodb.com/docs/manual/reference/operator/update/#std-label-update-operators/). MongoDB offers us several update operators that can perform a variety of modifications to document fields. In this exercise, we’ll focus on the `$set` update operator. This operator allows us to replace a field’s value with one that we provide.

To see this in action, imagine a new phone model is launching soon, and the price of the "iPhoneX" will need to be decreased in order to remain competitive. We want to update the price from 1000 to 679. We can accomplish this by running the following command:

```
db.products.updateOne({ title: "iPhoneX" }, { $set: { price: 679 } });
```

If successful, the operation should return:

```
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

After running the previous command, we could query for the item to confirm the update was successful:

```
db.products.findOne({ title: "iPhoneX" })
```

And find our document was updated:

```
{
  _id: ObjectId("507f1fg7bcf865d799439h11"),
  title: "iPhoneX",
  price: 679
}
```

In this case, querying on the `title` field works fine, assuming the value is unique for every document. Usually, we want to be as specific as possible with our filtering criteria, so we can include multiple fields to add more specificity to our search. Remember that even if multiple documents match the filter criteria, only a single one (the first match) will be updated.

✏️: While exploring the `updateOne()` command, we didn’t cover the use of the **<options>** parameter. This is because these fields are optional and aren’t required to perform the base action of updating a record. To explore the **<options>** parameter further, visit the [MongoDB documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/) for the `updateOne()` method.

Let’s practice updating using the `updateOne()` method by returning to our restaurants database.

```python
# Connect to the restaurants database. Then, use the .findOne() method to query for the document with the restaurant_id of "50014008" from the listingsAndReviews collection.
> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.findOne({restaurant_id:"50014008"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'Atlantic Eve',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Bradly's",
  restaurant_id:"50014008"
}

# The cuisine of this restaurant is incorrect. Update the value of the restaurant’s cuisinefield to“American”`.
restaurants> db.listingsAndReview.updateOne({restaurant_id:"50014008"}, {$set:{cusine:"American"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
# Query the listingsAndReviews collection for the document to ensure it was updated!

db.listingsAndReview.findOne({restaurant_id:"50014008"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'Atlantic Eve',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"American"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Bradly's",
  restaurant_id:"50014008"
}
```

## Updates on Embedded Documents and Arrays

While updating a single document using a single field is helpful, MongoDB also stores data inside of embedded documents. So, what if we want to update a specific field in an embedded document? Consider the following document within a collection named `furniture`:

```
{
  _id: ObjectId("3ldh1fg733kf65d7994393ld"),
  name: "bedframe",
  dimensions: {
    length: 75,
    width: 38
  }
}
```

Let’s say we wanted to update the `width` field inside the `dimensions` embedded document. We could run the following command:

```
db.furniture.updateOne(
  { name: "bedframe" },
  { $set: { "dimensions.width": 54 }}
);
```

We can successfully target the `width` field inside the `dimension`s embedded document using [dot notation](https://www.mongodb.com/docs/manual/core/document/#dot-notation/).

MongoDB also stores data inside of arrays! If we instead want to update a value within an array, we can use dot notation to access the index of the element we want to update. Let’s look at the following example document for a collection named `nbateams`:

```
{
  _id: ObjectId("402h1fg73cf865d799439k42"),
  team: "Chicago Bulls",
  championships: [1991, 1902, 1993, 1996, 1997, 1998]
}
```

If we want to update the 2nd element (1902) of the `championships` array to the correct year, `1992`, we could run the following command:

```
db.nbateams.updateOne(
  { team: "Chicago Bulls" },
  { $set: {"championships.1": 1992 }}
)
```

Once again, the embedded document’s name and the array index must be wrapped in quotations for the command to be successful. Note that we’re using the index of `1` since the year `1902` is the second element of the array, and arrays start at index `0`.

Let’s practice updating embedded fields and arrays in our restaurants database!

```python
# Connect to the restaurants database. Then, using the listingsAndReviews collection, query for a document with a restaurant_id field with the value"40561796". Observe the properties of the document you find!
> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.findOne({restaurant_id:"40561796"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'36 street',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Bradly's",
  restaurant_id:"40561796"
}

# The street address for this restaurant is incorrect. Update the street value from "36 Street" to "58 street".
restaurants> db.listingsAndReview.updateOne({restaurant_id:"40561796"}, {$set:{"address.street":"58 street"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

#Query the collection using the findOne() method for the document that was just updated to confirm this information was updated correctly.
restaurants> db.listingsAndReview.findOne({restaurant_id:"40561796"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'58 street',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Bradly's",
  restaurant_id:"40561796"
}


```

## Updating an Array with New Elements

MongoDB provides different array update operators that we can use with the `.updateOne()` method. In the earlier exercises, we learned to use the $set operator to replace a value. In this exercise, we’ll look at the `$push` operator.

The `$push` operator adds (or “pushes”) new elements to the end of an array. It can be used with the `.updateOne()` method with the following syntax:

```
db.<collection>.updateOne(
  <filter>,
  { $push: { <field1>: <value1>, ... } }
);
```

Consider a collection, `vehicles`, holding a document with data regarding specific car models:

```
{
  _id: ObjectId("627934bbfd6a8619040cc287"),
  make: "Audi",
  model: "A1",
  year: [2017, 2019]
}
```

If we wanted to add a new year into the array, we could use the `$push` operator to accomplish this:

```

db.vehicles.updateOne(
  { make: "Audi" },
  { $push: { year: 2020 }}
);
```

The updated document would look as follows:

```
{
  _id: ObjectId("627934bbfd6a8619040cc287"),
  make: "Audi",
  model: "A1",
  year: [2017, 2019, 2020]
}
```

It’s important to note that if the mentioned field is absent in the document to update, the `$push` operator adds this field to the document as an array and includes the given value as its element.

For example, consider our document from the `vehicles` collection again. Let’s say we wanted to update the country that manufactures this make of vehicle using the following command:

```
db.vehicles.updateOne(
  { make: "Audi" },
  { $push: { country: "Germany" }}
);
```

Because our document did not previously have a field called country, running this command would add the new field to the document as an array and insert one element, the string **"Germany"**. Our output would look as follows:

```
{
  _id: ObjectId("627934bbfd6a8619040cc287"),
  make: "Audi",
  model: "A1",
  year: [2017, 2019, 2020],
  country: [ "Germany" ]
}
```

Let’s practice updating array fields with the `$push` operator with documents in our restaurants database!

```python
# Connect to the restaurants database. Then, using the .findOne() method on the listingsAndReviews collection, find the document with the field name with the value of "Cafe Bar". Observe the properties of the document!
> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.findOne({name:"Cafe Bar"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'36 street',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Cafe Bar",
  restaurant_id:"40561796"
}

# Cafe Bar recently got examined again and received a new grade. Insert a new element into the grades array with the following properties:
## date: new Date(),
## grade: "B",
## score: 81
restaurants> db.listingsAndReview.updateOne({name:"Cafe Bar"}, {$push:{"grades":{ date:new Date(), grade:"B", score:981}}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
# Print out the same document using the name of the restaurant in order to see the updated values.

restaurants> db.listingsAndReview.findOne({name:"Cafe Bar"})
{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'36 street',
      zipCode:'11231'
  },
  borough:"Brooklyn"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      },
      {
          date: IsoDate("2024-09-11T00:00:00.00Z"),
          grade: "B",
          score: 81
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Cafe Bar",
  restaurant_id:"40561796"
}
```

## Upserting a Document

In the previous exercises, we looked at different ways to update and insert data into a collection. Now, we’ll learn about combining both operations using [upsert](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#upsert).

The `upsert` option is an optional parameter we can use with update methods such as `.updateOne()`. It accepts a boolean value, and if assigned to true, upsert will give our `.updateOne()` method the following behavior:

- Update data if there is a matching document.
- Insert a new document if there’s no match based on the query criteria.

Let’s take a look at its syntax below:

```
db.<collection>.updateOne(
  <filter>,
  <update>,
  { upsert: <boolean> }
);
```

The `upsert` parameter is `false` by default. If the property is omitted, the method will only update the documents that match the query. If no existing documents match the query, the operation will complete without making any changes to the data.

To see the upsert option in action, consider a collection named pets, holding a large number of documents with the following structure:

```
{
  _id: ObjectId(...),
  name: "Luna",
  type: "Cat",
  age: 2
}
```

Imagine it’s Luna’s birthday, and we want to be sure that we capture her current age, but we aren’t sure whether or not we have an existing document for her. This would be an excellent opportunity to use upsert since one of two things will happen:

- If Luna does not exist in the database, our command will create the document
- If Luna does exist, the document will be updated

To `upsert` our document for Luna, we can call the `.updateOne()` command as follows:

```
db.pets.updateOne(
  { name: "Luna", type: "Cat"},
  { $set: { age: 3 }},
  { upsert: true }
)
```

✏️: this command would search our `pets` collection for a document where the `name` is **"Luna"** and the `type` is **"Cat"**. If such a document exists, its age field would be updated. Otherwise, the following document would be inserted into our collection:

```
{
  _id: ObjectId(...),
  name: "Luna",
  type: "Cat",
  age: 3
}
```

Let’s spend some time practicing using the `upsert` option with the `.updateOne()` method.

```python
# Connect to the restaurants database. Then, in the listingsAndReviews collection, find and update the restaurant with the name "Vinnys" to have the following properties. If the document does not exist, it should be added with these properties.

> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.updateOne({name:"Vinnys"}, {$push:{borough:"Queens", cuisine:"Italian"}}, {upsert:true})
{
  acknowledged: true,
  insertedId: ObjectId("a098s234rsaa3434121"),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}


# Use the .findOne() method to query the collection for the newly updated document. Use the name field as the query.
restaurants> db.listingsAndReview.findOne({name:"Vinnys"})
{
  _id : ObjectId("a098s234rsaa3434121"),
  name:"Vinnys",
  borough:"Queens",
  cuisine:"Italian"
}
```

## Updating Multiple Documents

So far, we have learned how to insert and update individual documents in a collection, but what if we want to update multiple documents simultaneously? This is where the MongoDB [.updateMany()](https://www.mongodb.com/docs/v5.0/reference/method/db.collection.updateMany/) method comes in handy.

The `.updateMany()` method allows us to update all documents that satisfy a condition. The `.updateMany()` method looks and behaves similarly to `.updateOne()`, but _instead of updating the first matching document_, **it updates all matching documents**:

Let’s examine its syntax:

```
db.<collection>.updateMany(
  <filter>,
  <update>,
  <options>
);
```

Like before, we have three main parameters:

- `filter`: The selection criteria for the update.
- `update`: The modifications to apply.
- `options`: Other options that could be applied, such as `upsert`.

Let’s see how we can apply the method to an example. Suppose a company sets a minimum salary for all employees. We want to update all employees with a salary of $75,000 to the new minimum of $80,000. Here is what our collection of employees might look like:

```
{
  _id: ObjectId(...),
  name: "Rose Nyland",
  department: "Information Technology",
  salary: 75000
},
{
  _id: ObjectId(...),
  name: "Dorothy Zbornak",
  department: "Human Resources",
  salary: 75000
},
{
  _id: ObjectId(...),
  name: "Sophia Petrillo",
  department: "Human Resources",
  salary: 75000
},
{
  _id: ObjectId(...),
  name: "Blanche Devereaux",
  department: "Sales",
  salary: 80000
}
```

We can use `.updateMany()` to target all employees with the same salary in order to increase it:

```
db.employees.updateMany(
  { salary: 75000 },
  { $set: { salary: 80000 }}
)
```

In the above example, we’re using the salary as the filter criteria: `{ salary: 75000}`. This targets any document with the `salary` set to **75000**. We can then use the second parameter (via the `$set` operator) to update the specified fields in those documents. The collection would now look like this:

```
{
  _id: ObjectId(...),
  name: "Rose Nyland",
  department: "Information Technology",
  salary: 80000
},
{
  _id: ObjectId(...),
  name: "Dorothy Zbornak",
  department: "Human Resources",
  salary: 80000
},
{
  _id: ObjectId(...),
  name: "Sophia Petrillo",
  department: "Human Resources",
  salary: 80000
},
{
  _id: ObjectId(...),
  name: "Blanche Devereaux",
  department: "Sales",
  salary: 80000
}
```

✏️: how all employees with the `salary` of **75000** had their salary increased to **80000** while the employee whose salary was already **80000** stayed the same.

Let’s jump back into the restaurants database to practice using the updateMany() method to update multiple documents simultaneously.

```python

# When inserting the information regarding the boroughs for the restaurant collection, there was a mixup between "Bronx" and "Staten Island".

# Connect to the restaurants database. Then, using the listingsAndReviews collection, update all the documents that have the borough field as "Bronx" to be "Staten Island" instead.

> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.updateMany({borough:"Bronx"}, {$push:{borough:"Staten Island"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0
}

# Query the database for all the documents with the borough of "Staten Island" to see the updated documents.
restaurants> db.listingsAndReview.find({borough:"Staten Island"})
[
  {
    _id : ObjectId("a098s234rsafikno878"),
    address:{
        building:'2099',
        coord:[-73.122343455, 40.3452123451],
        street:'36 street',
        zipCode:'11231'
    },
    borough:"Staten Island"
    cuisine:"Latin"
    grades:[
        {
            date:IsoDate("2014-07-11T00:00:00.000Z"),
            grade: 'A'
            score: 37
        },
        {
            date:IsoDate("2014-09-11T00:00:00.00Z"),
            grade: 'C'
            score: 8
        },
        {
            date: IsoDate("2024-09-11T00:00:00.00Z"),
            grade: "B",
            score: 81
        }
    ],
    michelen_stars:[2008, 2009, 2010, 2020],
    name:"Cafe Bar",
    restaurant_id:"40561796"
  }
  ...
  ...
  ...
]

```

## Modifying Documents

In MongoDB, sometimes we may want to update a document but also return the document we modified. The [.findAndModify()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findAndModify) method modifies and returns a single document. By default, the document it returns does not include the modifications made on the update. This method can be particularly useful if we want to see (or use) the state of an updated document after we perform an update operation. This method also has a lot of flexible optional parameters that aren’t available in other methods.

Let’s take a look at the syntax of the `.findAndModify()` method below:

```
db.<collection>.findAndModify({
  query: <document>,
  update: <document>,
  new: <boolean>,
  upsert: <boolean>,
  ...
});
```

✏️ : that there are four commonly used fields:

- `query`: Defines the selection criteria for which record needs modification.
- `update`: A document that specifies the fields we want to update and the changes we want to make to them.
- `new`: When **true**, this field returns the _modified document_ rather than the _original_.
- `upsert`: Creates a new document if the selection criteria fails to match a document.

✏️: In addition to these fields, the `.findAndModify()` method accepts many other options. We will not be covering them here, but more details can be found in the documentation for the [.findAndModify()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findAndModify) method.

With this method, there are a lot of scenarios that can occur. First, let’s consider a collection called `foodTrucks` containing the following document:

```
{
  _id: ObjectId(...),
  name: "Criff Dogs",
  address: "15 Bedford Ave",
  shutdown: false
},
{
  _id: ObjectId(...),
  name: "Sals Pizza",
  address: "249 Otter Place",
  shutdown: false
}
```

The first scenario we can observe is if we wanted to update a document and see the updated document state pre-modification (before it was changed). This is the default behavior of the method. So, if we were to change the `shutdown` property of the document above with the name **"Criff Dogs"**, we can run the following command:

```
db.foodTrucks.findAndModify({
  query:  { name: "Criff Dogs" },
  update: { shutdown: true }
});
```

The output of this method would be the document before it was modified. Notice the shutdown field is still false, even though we changed it to true:

```
{
  _id: ObjectId(...),
  name: "Criff Dogs",
  address: "15 Bedford Ave",
  shutdown: false
}
```

The next scenario is similar but would use the `new` field to return a different output. If we ran the following query:

```
db.foodTrucks.findAndModify({
  query:  { name: "Criff Dogs" },
  update: { shutdown: true },
  new: true
});
```

We would be able to see the new modified document as the output. Notice the value in the output for the shutdown field is true:

```
{
  _id: ObjectId(...),
  name: "Sals Pizza",
  address: "249 Otter Place",
  shutdown: true
}
```

Lastly, we can use the `upsert` field to be able to add documents if they do not currently exist in the database. So if we ran the following command:

```
db.foodTrucks.findAndModify({
  query:  { name: "Ben and Jerry", address: "17 Cliff Pl" },
  update: { shutdown: false },
  new: true,
  upsert: true
});
```

MongoDB would then search the collection foodTrucks based on the query argument, and if it didn’t find a match, it would create the document. So our new food truck would be added to the collection, and our return output would be:

```
{
  _id: ObjectId(...),
  name: "Ben and Jerry",
  address: "17 Cliff Pl",
  shutdown: false
}
```

We might notice that `.updateOne()` and `.findAndModify()` behave quite similarly. Both will update a document in our database or create one if it doesn’t exist. So **what are the main differences?**

- Well, `.findAndModify()` returns the document that you modify, whereas `.updateOne()` does not.
- Moreover, `.findAndModify()` allows us to specify whether we want to return the old or new (modified version) of the updated document with the use of the `new` parameter.

Let’s practice using the findAndModify() method with our restaurants collection!

```python
# Connect to the restaurants database. Then use the .findOne() method to query the listingsAndReviews collection for the document with the name of "Jolie Cantina". Observe the document you find!
> use restaurants
switched to db restaurants

restaurants> db.listingsAndReview.findOne({name:"Jolie Cantina"})

{
  _id : ObjectId("a098s234rsafikno878"),
  address:{
      building:'2099',
      coord:[-73.122343455, 40.3452123451],
      street:'36 street',
      zipCode:'11231'
  },
  borough:"Staten Island"
  cuisine:"Latin"
  grades:[
      {
          date:IsoDate("2014-07-11T00:00:00.000Z"),
          grade: 'A'
          score: 37
      },
      {
          date:IsoDate("2014-09-11T00:00:00.00Z"),
          grade: 'C'
          score: 8
      },
      {
          date: IsoDate("2024-09-11T00:00:00.00Z"),
          grade: "B",
          score: 81
      }
  ],
  michelen_stars:[2008, 2009, 2010, 2020],
  name:"Jolie Cantina",
  restaurant_id:"40561796"
}

# Use the findAndModify() method to change value of the "cuisine" field for restaurant named "Jolie Cantina" from "French" to "American". Make sure the output returns the new modified document.
restaurants> db.listingsAndReview.findAndModify({query:{name:"Jolie Cantina"}, update:{cuisine:"American"}, new:true })
{
  _id : ObjectId("a098s234rsafikno878"),
  cuisine:"American"
}
# We want to ensure that a restaurant named Jacobs Bagels has the correct information in our restaurants database. We are unsure if the restaurant is currently in the listingsAndReviews collection. Use .findAndModify() to add a the document (if it does not exist) to the listingsAndReviews collection with the following data:

restaurants> db.listingsAndReview.findAndModify({query:{name:"Jacobs Bagels"}, update:{name:"Jacobs Bagels", cuisine:"Jewish/Kosher", borough:"Brooklyn"}, new:true, upsert:true })
{
  _id : ObjectId("a098s234rsafikno878"),
  name:"Jacobs Bagels",
  cuisine:"Jewish/Kosher",
  borough:"Brooklyn"
}

```

## Summary

Great job! We’ve covered numerous topics regarding creating and updating documents in collections. Let’s recap some key takeaways from this lesson:

- The `_id` field is a unique identifier for documents in a collection. By default, MongoDB assigns an `ObjectId` value to the **\_id** field for each document.
- Individual documents can be added to a collection with `.insertOne()`, and the document to be inserted is provided as an argument.
- Multiple documents can be inserted into a collection with the `.insertMany()` method. An array containing all the documents to insert is passed in an argument.
- The `.updateOne()` method is used to update the first document within the collection that matches a given query.
- We can use `.updateMany()` to update multiple matching documents simultaneously.
- The `$push` operator appends a specified value to an array.
- The `.findAndModify()` method modifies and returns a single document in a collection. By default, it returns the original document, and if no matching document is found, a new one can be inserted by adding the upsert option.

In addition to the methods we’ve learned throughout this lesson, MongoDB offers us other syntax and commands that can be useful when inserting, updating, or replacing documents:

- The [ordered](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/) parameter can be provided to the .[insertMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/) method. It accepts a boolean value, and, if set to false, will insert the documents in an unordered format to increase performance.
- The [$unset](https://www.mongodb.com/docs/manual/reference/operator/update/unset) operator can be provided to the `.updateOne()` or `.updateMany()` method. It removes a particular field from a document.
- The [.findOneAndUpdate()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate) method is similar to `.updateOne()`, but `instead of returning a document acknowledging the success or failure of our operation`, `it returns either the original or updated document`.
- The [.renameCollection()](https://www.mongodb.com/docs/manual/reference/method/db.collection.renameCollection) method allows us to update the name of our collection without modifying any of its documents.
- The [.bulkWrite()](https://www.mongodb.com/docs/manual/reference/method/db.collection.bulkWrite/#definition) method allows us to perform multiple write operations (updating or inserting) with controls for order of execution.

There are many different implementations of inserting or modifying data in MongoDB, so make sure to explore the [docs](https://www.mongodb.com/docs) for more examples!

**Optional**

We have provided you with the listingsAndReviews collection. Before moving on, spend some time experimenting with writing queries using the syntax you learned throughout this lesson. If you are up for a challenge, try any of the following tasks listed below. Remember to first connect to the restaurants database to access the listingsAndReviews collection. Good luck, and click Up Next when you are ready to move on!

Optional Tasks:

- Rename the listingsAndReviews collection to a name of your choice.
- Update all the restaurants from your favorite NYC borough by removing the grades field. They are all a 'A' in your eyes!
- Use .bulkWrite() to perform the following operations in any order:
- Add three documents using insertOne.
- Update two documents using updateMany.
- Replaces a document using replaceOne.

<a  href="https://enterprise.codecademy.com/learn/emodules/emod-mongodb-inserting-and-updating/cheatsheet" target="_blank">Cheetsheet ↗️</a>
