---
title: "Types Vs Objects"
slug: "dotnet/0_c/1_object_oriented_programming/0_types_vs_objects"
stack: "C#.NET"
---

The two most basic words in object-oriented programming are object and class. Though they are often used interchangeably when speaking about object-oriented programming and when building applications, they are not the same thing.

## Class

A class is code. Here is the beginning of a customer class

![object != class](../../../../../src/images/dotnet/c/oops/oop-2.png)

- Notice the [class](../../../../0_c/0_getting_started/0_types/1_reference_types#class) keyword.
- It has `constants`, `fields`, `properties` such as EmailAddress and FirstName. Constants, fields and properties define the data managed by the class.
  - In object-oriented programming, aforesaid called as data members of class Customer
- The class also has `functions` aka `methods` such as Validate. The methods _define the actions or behaviors operating on data members managed by the class_.
  - In object-oriented programming, these methods are called member methods.
- Together the data members and member methods of a class define the **class members**.

The basic purpose of a class is to provide the definition for a particular type or blueprint or template of objects. This class defines objects of type Customer that can work with customer data and perform customer operations such as validating customer information.

## Object

An object is an instance of a class. It is created using the C# new keyword.

![object != class](../../../../../src/images/dotnet/c/oops/oop-3.png)

- The syntax creates a new instance of the customer class. That instance is an object. This variable references the resulting object, hence, it is often called an object variable. The customer object represents a specific customer.
- Use the object variable to get or set any of the properties identified in the class. The object variable holds the state of the object, meaning, it retains the values of its properties and use the object variable to call any of the methods identified in the class.
- In this case, the Validate method is called for this specific customer object.

When the application terminates, the object is gone. Any object state is gone unless it was stored somewhere such as in a database, but the class still exists because the class is defined in the code.

![Understanding class and object](../../../../../src/images/dotnet/c/oops/oop-4.png)

A common metaphor for understanding class verses object is a cookie cutter. A class defines the properties and actions for all objects created from it like this cookie cutter defines a consistent size and shape. Use the cookie cutter to create instances, each of which is an object. Each object defines its own values for the properties just like cookies created from the cookie cutter can have different decorations. Mmmm, cookies.

- The main point to get from this metaphor is that the class provides the definition of the object type. It defines the properties and actions appropriate for the thing, in this case, heart-shaped cookie.
- Once you define a class, you can create any number of unique objects from the class. Each object is created as an instance of the class and has its own values for the properties. In this example, different decorations.
- So each cookie has the same object type, heart-shaped cookie, but different values. What about other related terms such as business objects and entity?
