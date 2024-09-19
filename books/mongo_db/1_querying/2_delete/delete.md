---
title: "Quering- Inserts and Updates"
slug: "mongo_db/1_querying/2_delete"
stack: "MongoDB"
---

## Deleting a Document

So far we have learned how to **C**reate, **R**ead, and **U**pdate data using different methods provided by MongoDB. Let’s explore the last `CRUD` operation, **D**elete.

There are certain situations when data is no longer necessary or becomes obsolete. MongoDB provides us a couple options to permanently remove unwanted documents from a collection. In this exercise, we’ll focus on learning how to use the [.deleteOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne) method to remove a single document from a collection.

In order to use `.deleteOne()`, we must provide specific filtering criteria to find the document we want to delete. MongoDB will look for the first document in the collection that matches the criteria and delete it. Let’s take a closer look at the syntax:

```
db.<collection>.deleteOne(<filter>, <options>);
```

✏️ in the syntax above, the `.deleteOne()` method takes two arguments:

- `filter`: A document that provides selection criteria for the document to delete.
- `options`: A document where we can include optional fields to provide more specifications to our operation, such as a `writeConcern`.

To see `.deleteOne()` in action, consider a collection, `monsters`, with the following documents:

```
{
  _id: ObjectId(...),
  name: "Luca",
  age: 100,
  type: "Hydra"
},
{
  _id: ObjectId(...),
  name: "Lola",
  age: 95,
  type: "Hydra"
},
{
  _id: ObjectId(...),
  name: "Igor",
  age: 95,
  type: "Chimera"
},
```

If we want to delete a single monster with an age of 95, we can run the following command:

```
db.monsters.deleteOne({ age: 95 });
```

If the command is successful, MongoDB will confirm the document was deleted with the following output:

```
{ acknowledged: true, deletedCount: 1 }
```

The collection would then be left with these remaining documents:

```
{
  _id: ObjectId(...),
  Name: "Luca",
  age: 100,
  type: "Hydra"
},
{
  _id: ObjectId(...),
  name: "Igor",
  age: 95,
  type: "Chimera"
},
```

✏️ Only one of the documents in the collection with the age of `95` was deleted.
✏️ When the filter criteria is non-unique, the document that gets deleted is the first one that MongoDB identifies when performing the operation. Which document is found first depends on several factors which can include insertion order and the presence of indexes relevant to the filter.

In the following exercises, we’ll practice using the `.deleteOne()` method with the same collection from the previous lesson, restaurants.

```python
# Connect to the restaurants database. Then, using the listingsAndReviews collection, find a document with the name "Wakamba".
> use restaurants
swtched to db restaurants

restaurants> db.listingsNadReviews.find({name:"Wakamba"})
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
        name:"Wakamba",
        restaurant_id:"40561796"
    },
        {
        _id : ObjectId("a098s234rsafikno877"),
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
        name:"Wakamba",
        restaurant_id:"40561796"
    },
    ...

]
# Look at that! We have two documents with the same name. Delete one of them by using the name field as the filtering criteria.
restaurants> db.listingsAndReviews.deleteOne({name:"Wakamba"})
{
    acknowledged:true,
    deletedCount:1
}
# Search your collection again to confirm that you only have one document with the name Wakamba in your collection.
restaurants> db.listingsNadReviews.find({name:"Wakamba"})
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
        name:"Wakamba",
        restaurant_id:"40561796"
    }
]
```

## Deleting Multiple Documents

- We now know how to delete a single document from a collection, but what **if we want to delete multiple documents that match certain criteria**❓
- We can accomplish this with the [.deleteMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany) method.

The `.deleteMany()` method removes all documents from a collection that match a given filter. This method uses the following syntax:

```
db.<collection>.deleteMany(<filter>, <options>);
```

✏️ in the syntax above that the `.deleteMany()` method takes two arguments:

- `filter`: A document that provides selection criteria for the documents to delete.
- `options`: A document where we can include optional fields to provide more specifications to our operation, such as a `writeConcern`.

⚠️ If no filter is provided to the `.deleteMany()` method, all documents from the collection will be deleted.

Let’s revisit the original `monsters` collection from the previous exercise. Consider a new monster with the name of "Pat" was recently added:

```
{
  _id: ObjectId("629a1e8c2bf029cc101c92d4"),
  name: "Luca",
  age: 100,
  type: "Hydra"
},
{
  _id: ObjectId("629a2245b8bd9cad32a210fa"),
  name: "Lola",
  age: 95,
  type: "Hydra"
},
{
  _id: ObjectId("629a225119915a53df5b428c"),
  name: "Igor",
  age: 85,
  type: "Hydra"
},
{
  _id: ObjectId("629a226c8982a4dd04e093ff"),
  name: "Pat",
  age: 85,
  type: "Dragon"
}
```

We now want to get rid of all the monsters with a type field with the value of "Hydra". We could run the .deleteOne() method and pass in the filter {type: "Hydra"}, but we would need to execute the method multiple times. This could quickly get very tedious. Instead, let’s use `.deleteMany():`

```
db.monsters.deleteMany({ type: "Hydra" });
```

Once executed, the operation will successfully delete all documents where the type field has the value of "Hydra". MongoDB will confirm if the operation was successful and let us know how many documents were deleted with the following output:

```
{ acknowledged: true, deletedCount: 3 }
```

This would leave us with a single remaining document:

```
{
  _id: ObjectId("629a226c8982a4dd04e093ff"),
  name: "Pat",
  age: 85,
  type: "Dragon"
}
```

Now that we’ve gotten familiar with the `.deleteMany()` method, let’s get some practice with it.

```python
# Connect to the restaurants database. Then, using the listingsAndReviews collection, query the restaurants collection for restaurants in the borough of "Rhode Island".
> use restaurants
swtched to db restaurants

restaurants> db.listingsNadReviews.find({borough:"Rhode Island"})
[
    {
        _id : ObjectId("a098s234rsafikno878"),
        address:{
            building:'2099',
            coord:[-73.122343455, 40.3452123451],
            street:'36 street',
            zipCode:'11231'
        },
        borough:"Rhode Island"
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
        name:"Wakamba",
        restaurant_id:"40561796"
    },
        {
        _id : ObjectId("a098s234rsafikno877"),
        address:{
            building:'2099',
            coord:[-73.122343455, 40.3452123451],
            street:'36 street',
            zipCode:'11231'
        },
        borough:"Rhode Island"
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
        name:"Wakamba",
        restaurant_id:"40561796"
    },
    ...

]
# Uh oh! This must be a mistake. Rhode Island is a state, not a New York City borough. Delete all documents with the field borough that have the value "Rhode Island".

restaurants> db.listingsNadReviews.deleteMany({borough:"Rhode Island"})
{
    acknowledged:true,
    deletedCount:4
}

# Search the listingsAndReviews collection again to confirm that no documents are in the borough of "Rhode Island".
restaurants> db.listingsNadReviews.find({borough:"Rhode Island"})
[

]

```

## Replacing a Document

We might encounter situations where we need to delete a document and immediately replace it with another one. We could achieve this by running two separate methods, `.deleteOne()`, then `.insertOne()`. Fortunately, MongoDB provides us with a single method, [.replaceOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/), that can both delete and insert all at once!

The `.replaceOne()` method replaces the first document in a collection that matches the given filter. The syntax for this method looks as follows:

```
db.<collection>.replaceOne(
  <filter>,
  <replacement>,
  <options>
);
```

✏️ in the syntax above that the `.replaceOne()` method takes three arguments:

- `filter`: A document that provides selection criteria for the document to replace.
- `replacement`: The replacement document.
- `options`: A document where we can include optional fields to provide more specifications to our operation, such as `upsert`.

The replacement document can contain a subset of fields of the original document or entirely unique fields. To see it in action, consider a collection named employees with the following documents:

```
{
  _id: ObjectId(...),
  name: "Rohit Kohli",
  department: "Customer Analytics"
  position: "Senior Software Engineer"
},
{
  _id: ObjectId(...),
  name: "Rin Paterson",
  department: "People Operations",
  position: "Head of People Operations"
}
```

Imagine `"Rohit Kohli"` leaves the company. We still want to store their name, and update their position to **"N/A"** but no longer need a `department` field and value. We’d then need to replace Rohit’s current document with a new document that only contains two fields: `name`, and `position`. We can accomplish this with `.replaceOne()`:

```
db.employees.replaceOne(
  { name: "Rhoit Kohli" },
  { name: "Rohit Kohli", position: "N/A" }
);
```

If successful, this would produce the following output:

```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

After running this command, we’d be left with the following collection:

```
{
  _id: ObjectId(...),
  name: "Rohit Kohli",
  position: "N/A"
},
{
  _id: ObjectId(...),
  name: "Gary Paterson",
  department: "HR",
  position: "Head of Human Resources"
}
```

✏️ how the other fields were completely removed. This is the key difference between `.replaceOne()` and .updateOne(). Whereas .updateOne() updates specific fields based on the update modifiers provided, `.replaceOne()` replaces the entire document and will only include fields specified in the **<replacement>** parameter.

Now let’s practice what we’ve learned about `.replaceOne()` with the following exercises.

```python
#Connect to the restaurants database. Then, using the listingsAndReviews collection, query for all the documents with the name "Tasty House".

> use restaurants
swtched to db restaurants

restaurants> db.listingsNadReviews.find({name:"Tasty House"})
[
    {
        _id : ObjectId("a098s234rsafikno878"),
        address:{
            building:'2099',
            coord:[-73.122343455, 40.3452123451],
            street:'36 street',
            zipCode:'11231'
        },
        borough:"Rhode Island"
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
        name:"Tasty House",
        restaurant_id:"40561796"
    }
]
# Unfortunately the restaurant has recently shut down. Replace the document with the following information:

restaurants> db.listingsAndReviews.replaceOne({name:"Tasty House"}, {name:"Tasty House", shut_down:true})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
# Query the listingsAndReviews collection again for all the documents with the name "Tasty House" to confirm our document changed and the restaurant was successfully marked as shut down.

restaurants> db.listingsNadReviews.find({name:"Tasty House"})
[
    {
        _id : ObjectId("a098s234rsafikno878"),
        name:"Tasty House",
        shut_down: true
    }
]
```

## Summary

Great job! Let’s go over a quick summary of what we’ve learned about deleting in MongoDB:

- The `.deleteOne()` method deletes a single document from a collection.

  - It accepts a filter document specifying which document to delete as the first parameter.
  - It method will only delete the first matching document in the collection.

- The `.deleteMany()` method deletes all matching documents from a collection.

  - It accepts a filter document specifying which document to delete as the first parameter.

- The `.replaceOne()` method replaces an entire document from a collection.
  - It takes in filtering criteria specifying the document to replace as the first parameter and a replacement document as the second one.
  - It will only replace the first matching document in the collection.
  - Since `.replaceOne()` replaces an entire document, only fields included in the second parameter will be present in the document after the operation executes.

In addition to the syntax we’ve learned throughout this lesson, MongoDB offers us other syntax and commands that can be useful when deleting or replacing documents:

- The [.findOneAndReplace()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndReplace/) method is very similar to .replaceOne(). It replaces a document in a collection based on filter criteria, but instead of returning a document that acknowledges the operation, it returns either the original document or the replacement document.
- The [.findOneAndDelete()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndDelete) method deletes a document, and returns the deleted document.

Congrats! You’ve learned a lot in the past exercises. Now you can use your knowledge and experiment with the provided collection!

**Optional Tasks**

- Delete any restaurants that have received a **"C"** grade via the grades field. After all, we have to keep our standards high!
- Replace the cuisine of a restaurant of your choosing.
- Choose a restaurant with multiple grades of **"A"**. Replace the document, so it no longer has a grades field but instead has a field named `top_restaurant` with the value of `true`.

<a  href="https://enterprise.codecademy.com/learn/emodules/emod-mongodb-delete/cheatsheet" target="_blank">Cheetsheet ↗️</a>
