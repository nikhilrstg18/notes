---
title: "Reference Types"
slug: "dotnet/fundamentals/c/beginner/types/reference_types"
stack: "C#"
prev: "../"
next: "dotnet/fundamentals/c/beginner/statements_expressions"
level: ""
date: "Wed Mar 06 2024 22:16:35 GMT+0530 (India Standard Time)"
---

## Overview

> A variable of a `reference type` contains a reference (stack) to an instance of the type (heap)

![Value Types](../../../../../../../src/images/dotnet/c/beginner/types/t2.gif)

Examples : [class](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class), [interface](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface), [delegate](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type), [record](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record), [string](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types), [object](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types), [dynamic](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types)

- Reference Types are used by a reference which holds a reference `address` to the object on `stack` but not the object itself.
- Because reference types represent the address of the variable rather than the data itself, assigning a reference variable to another doesn’t copy the data. Instead it creates a second copy of the reference, which refers to the same location of the heap as the original value.
- Reference Type variables are stored in a different area of memory called the `heap`. This means that when a reference type variable is no longer used, it can be marked for garbage collection.

<div style="display:none;">

## Built-in Reference Types

</div>

<table>
    <caption>Built-in Reference Types</caption>
    <thead>
        <tr><th>C# type</th><th>.Net Type</th><th>Description</th></tr>
    </thead>
    <tbody>
     <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type">object</a></td><td>System.Object</td><td>The object type is an alias for System.Object in .NET. In the unified type system of C#, all types, predefined and user-defined, reference types and value types, inherit directly or indirectly from System.Object.</td></tr>
    <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type:~:text=e%20s%20t-,String%20literals,-String%20literals%20are">string</a></td><td>System.String</td><td>The string type represents a sequence of zero or more Unicode characters. string is an alias for System.String in .NET.</td></tr>
    <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type:~:text=virtual%20Invoke%20method.-,The%20dynamic%20type,-The%20dynamic%20type">dynamic</a></td><td>System.Object</td><td>The dynamic type indicates that use of the variable and references to its members bypass compile-time type checking. Instead, these operations are resolved at run time</td></tr>
    </tbody>
</table>

### object

![System.Object](http://www.icodeguru.com/dotnet/core.c.sharp.and.dot.net/0131472275/images/0131472275/graphics/02fig02.gif)

- In the unified type system of C#, all types, predefined and user-defined, reference types and value types, inherit directly or indirectly from `System.Object`

- You can assign values of any type to variables of type `object`. Any object variable can be assigned to its default value using the literal `null`.

`.Net Performance Tip`

> It is best to avoid using value types in situations where they must be boxed a high number of times, for example in non-generic collections classes such as `System.Collections.ArrayList`. You can avoid boxing of value types by using generic collections such as `System.Collections.Generic.List<T>`.

Boxing and unboxing are computationally expensive processes. When a value type is boxed, an entirely new object must be created. This can take up to 20 times longer than a simple reference assignment. When unboxing, the casting process can take four times as long as an assignment.

`Boxing` Vs `Unboxing`

The concept of boxing and unboxing underlies the C# unified view of the type system in which a

> value of any type can be treated as an object.

When a variable of a `value type` is converted to `object`, it's said to be `boxed`. When a variable of type object is converted to a value type, it's said to be `unboxed`. [read more](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing)

#### Boxing

- Process of converting a `value type` to the type `object` or to any interface type implemented by this value type.
- When the `CLR` boxes a value type, it wraps the value inside a `System.Object` instance and stores it on the `garbage collected` or `managed` heap.
- Boxing is _implicit_

e.g. the integer variable `i` is boxed and assigned to object `o`:

```csharp{7-8}
using System;

class Program
{
    static void Main()
    {
        int i = 123;
        object o = i;  // implicit boxing
    }
}
```

The result of this statement is creating an object reference `o`, on the stack, that references a value of the type int, on the heap. This value is a copy of the value-type value assigned to the variable `i`. The difference between the two variables, `i` and `o`, is illustrated in the following image of boxing conversion:

![boxed](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/media/boxing-and-unboxing/boxing-operation-i-o-variables.gif)

#### Unboxing

- Process of extracting the value type from the object is called `Unboxing`
- Unboxing is _explicit_. An unboxing operation consists of:
  1. _Checking the object instance_ to make sure that it is a boxed value of the given value type.
  2. Copying the value from the instance into the value-type variable.
- Attempting to unbox null causes a `NullReferenceException`
- Attempting to unbox a reference to an incompatible value type causes an `InvalidCastException`.

e.g. The object `o` can then be unboxed and assigned to integer variable `i`:

![Unboxing](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/media/boxing-and-unboxing/unboxing-conversion-operation.gif)

```csharp{7-8, 12}
using System;

class Program
{
    static void Main()
    {
        int i = 123;
        object o = i;  // implicit boxing

        try
        {
            int j = (int)o;  // attempt to unbox

            System.Console.WriteLine("Unboxing OK.");
        }
        catch (System.InvalidCastException e)
        {
            System.Console.WriteLine("{0} Error: Incorrect unboxing.", e.Message);
        }
    }
}
```

#### Safely cast with pattern matching

- Because objects are polymorphic, it's possible for a variable of a base class type to hold a derived type. To access the derived type's instance members, it's necessary to cast the value back to the derived type.
- However, a cast creates the risk of throwing an InvalidCastException.
- C# provides pattern matching statements that perform a cast conditionally only when it will succeed.
- C# also provides the `is` and `as`operators to test if a value is of a certain type.

The following example shows how to use the pattern matching `is` statement:

```csharp
var g = new Giraffe();
var a = new Animal();
FeedMammals(g);
FeedMammals(a);
// Output:
// Eating.
// Animal is not a Mammal

SuperNova sn = new SuperNova();
TestForMammals(g);
TestForMammals(sn);

static void FeedMammals(Animal a)
{
    if (a is Mammal m)
    {
        m.Eat();
    }
    else
    {
        // variable 'm' is not in scope here, and can't be used.
        Console.WriteLine($"{a.GetType().Name} is not a Mammal");
    }
}

static void TestForMammals(object o)
{
    // You also can use the as operator and test for null
    // before referencing the variable.
    var m = o as Mammal;
    if (m != null)
    {
        Console.WriteLine(m.ToString());
    }
    else
    {
        Console.WriteLine($"{o.GetType().Name} is not a Mammal");
    }
}
// Output:
// I am an animal.
// SuperNova is not a Mammal

class Animal
{
    public void Eat() { Console.WriteLine("Eating."); }
    public override string ToString()
    {
        return "I am an animal.";
    }
}
class Mammal : Animal { }
class Giraffe : Mammal { }

class SuperNova { }
```

- The `if (a is Mammal m)` statement combines the test with an initialization assignment.
- The assignment occurs only when the test succeeds.
- The variable m is only in scope in the embedded if statement where it has been assigned. You can't access m later in the same method.
- The preceding example also shows how to use the as operator to convert an object to a specified type.
- You can also use the same syntax for testing if a nullable value type has a value

The following code shows how to use the is and as statements that were part of the C# language before pattern matching was introduced to test if a variable is of a given type

```csharp
// Use the is operator to verify the type.
// before performing a cast.
Giraffe g = new();
UseIsOperator(g);

// Use the as operator and test for null
// before referencing the variable.
UseAsOperator(g);

// Use pattern matching to test for null
// before referencing the variable
UsePatternMatchingIs(g);

// Use the as operator to test
// an incompatible type.
SuperNova sn = new();
UseAsOperator(sn);

// Use the as operator with a value type.
// Note the implicit conversion to int? in
// the method body.
int i = 5;
UseAsWithNullable(i);

double d = 9.78654;
UseAsWithNullable(d);

static void UseIsOperator(Animal a)
{
    if (a is Mammal)
    {
        Mammal m = (Mammal)a;
        m.Eat();
    }
}

static void UsePatternMatchingIs(Animal a)
{
    if (a is Mammal m)
    {
        m.Eat();
    }
}

static void UseAsOperator(object o)
{
    Mammal? m = o as Mammal;
    if (m is not null)
    {
        Console.WriteLine(m.ToString());
    }
    else
    {
        Console.WriteLine($"{o.GetType().Name} is not a Mammal");
    }
}

static void UseAsWithNullable(System.ValueType val)
{
    int? j = val as int?;
    if (j is not null)
    {
        Console.WriteLine(j);
    }
    else
    {
        Console.WriteLine("Could not convert " + val.ToString());
    }
}
class Animal
{
    public void Eat() => Console.WriteLine("Eating.");
    public override string ToString() => "I am an animal.";
}
class Mammal : Animal { }
class Giraffe : Mammal { }

class SuperNova { }
```

### string

The string type represents a `sequence of zero or more Unicode characters (UTF-16)`. string is an alias for [System.String](https://learn.microsoft.com/en-us/dotnet/api/system.string) in .NET.

Although string is a reference type, the equality operators `==` and `!=`are defined to compare the values of string objects, not references. Value based equality makes testing for string equality more intuitive. For example

```csharp
using System;

class Program
{
    static void Main()
    {
        string a = "hello";
        string b = "h";
        // Append to contents of 'b'
        b += "ello";
        Console.WriteLine(a == b);
        Console.WriteLine(object.ReferenceEquals(a, b));
    }
}
```

The previous example displays "True" and then "False" because the content of the strings is equivalent, but a and b don't refer to the same string instance

The [+ operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/addition-operator#string-concatenation) concatenates strings

```csharp
using System;

class Program
{
    static void Main()
    {
        string a = "good " + "morning";
        Console.WriteLine(a);
    }
}
```

The preceding code creates a string object that contains "good morning".

`Strings are immutable`--the contents of a string object can't be changed after the object is created. For example, when you write this code, the compiler actually creates a new string object to hold the new sequence of characters, and that new object is assigned to b. The memory that had been allocated for b (when it contained the string "h") is then eligible for garbage collection.

```csharp
using System;

class Program
{
    static void Main()
    {
        string b = "h";
        b += "ello";
    }
}
```

The [[] operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#indexer-operator-) can be used for readonly access to individual characters of a string. Valid index values start at 0 and must be less than the length of the string

```csharp
using System;

class Program
{
    static void Main()
    {
        string str = "test";
        char x = str[2];  // x = 's';
    }
}
```

In similar fashion, the [] operator can also be used for iterating over each character in a string:

```csharp
using System;

class Program
{
    static void Main()
    {
        string str = "test";
        for (int i = 0; i < str.Length; i++)
        {
            Console.Write(str[i] + " ");
        }
        // Output: t e s t
    }
}
```

`string literals` can be written in 3 forms

1.  raw (available in C# 11)
    - Raw string literals can contain arbitrary text without requiring escape sequences.
    - Raw string literals can include whitespace and new lines, embedded quotes, and other special characters.
    - Raw string literals are enclosed in a minimum of three double quotation marks (`"""`):

```csharp
"""
This is a multi-line
    string literal with the second line indented.
"""
```

2.  quoted
    - Quoted string literals are enclosed in double quotation marks ("):

```csharp
"good morning"  // a string literal
```

3.  verbatim
    - Verbatim string literals start with @ and are also enclosed in double quotation marks. For example.

```csharp
@"good morning"  // a string literal
```

4.  UTF-8 string literals
    - Strings in .NET are stored using UTF-16 encoding.
    - UTF-8 is the standard for Web protocols and other important libraries.
    - Beginning in C# 11, you can add the u8 suffix to a string literal to specify UTF-8 encoding.
    - `UTF-8` literals are stored as `ReadOnlySpan<byte>` objects.
    - UTF-8 string literals aren't compile time constants; they're runtime constants. Therefore, they can't be used as the default value for an optional parameter.
    - UTF-8 string literals can't be combined with string interpolation. You can't use the $ token and the u8 suffix on the same string expression
    - Using a UTF-8 string literal creates a more clear declaration than declaring the equivalent System.ReadOnlySpan<T>, as shown in the following code:

```csharp
ReadOnlySpan<byte> AuthStringLiteral = "AUTH "u8;
```

### delegate

The declaration of a delegate type is similar to a method signature. It has a return value and any number of parameters of any type

```csharp
public delegate void MessageDelegate(string message);
public delegate int AnotherDelegate(MyType m, long num);
```

In .NET, System.Action and System.Func types provide generic definitions for many common delegates. You likely don't need to define new custom delegate types. Instead, you can create instantiations of the provided generic types.

- A delegate is a reference type that can be used to encapsulate a named or an anonymous method. Delegates are similar to function pointers in C++; however, delegates are type-safe and secure
- Delegates are the basis for Events. A delegate can be instantiated by associating it either with a named or anonymous method
- The delegate must be instantiated with a method or lambda expression that has a compatible return type and input parameters.

### dynamic

- The `dynamic` type indicates that use of the variable and references to its members bypass compile-time type checking. Instead, these operations are resolved at run time.
- The `dynamic` type simplifies access to COM APIs such as the Office Automation APIs, to dynamic APIs such as IronPython libraries, and to the HTML Document Object Model (DOM).
- Type `dynamic` behaves like type `object` in most circumstances. In particular, any non-null expression can be converted to the dynamic type.
- The `dynamic` type differs from `object` in that operations that contain expressions of type dynamic aren't resolved or type checked by the compiler. The compiler packages together information about the operation, and that information is later used to evaluate the operation at run time.
- As part of the process, variables of type `dynamic` are compiled into variables of type `object`. Therefore, type dynamic exists only at compile time, not at run time.

The following example contrasts a variable of type `dynamic` to a variable of type `object`. To verify the type of each variable at compile time, place the mouse pointer over `dyn` or `obj` in the `WriteLine` statements. Copy the following code into an editor where IntelliSense is available. IntelliSense shows dynamic for dyn and object for obj.

```csharp
class Program
{
    static void Main(string[] args)
    {
        dynamic dyn = 1;
        object obj = 1;

        // Rest the mouse pointer over dyn and obj to see their
        // types at compile time.
        System.Console.WriteLine(dyn.GetType());
        System.Console.WriteLine(obj.GetType());
    }
}
```

The WriteLine statements display the run-time types of dyn and obj. At that point, both have the same type, integer. The following output is produced:

```csharp
System.Int32
System.Int32
```

---

<div style="display:none;">

## User-defined Reference Types

</div>

<table>
    <caption>User-defined Reference Types</caption>
    <thead>
        <tr><th>C# type</th><th>.Net Type</th><th>Description</th></tr>
    </thead>
    <tbody>
    <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class">class</a></td><td>System.Object</td><td>Classes are declared using the keyword class</td></tr>
     <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record">record</a></td><td>System.Object</td><td>You use the record modifier to define a reference type that provides built-in functionality for encapsulating data</td></tr>    
    <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface">interface</a></td><td>System.Object</td><td>An interface defines a contract. Any class, record or struct that implements that contract must provide an implementation of the members defined in the interface</td></tr>
        <tr><td><a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/collections">Collections</a></td><td>System.Collections.Generic</td><td>The .NET runtime provides many collection types that store and manage groups of related objects</td></tr>
    </tbody>
</table>

### class

- Classes are declared using the keyword `class`, as shown in the following example:

```csharp
class TestClass
{
    // Methods, properties, fields, events, delegates
    // and nested classes go here.
}
```

> Only single inheritance is allowed in C#.

In other words, a class can inherit implementation from one base class only. However, a class can implement more than one interface

| Inheritance                      | Example                                          |
| -------------------------------- | ------------------------------------------------ |
| None                             | `class ClassA { }`                               |
| Single                           | `class DerivedClass : BaseClass { }`             |
| None, implements two interfaces  | `class ImplClass : IFace1, IFace2 { }`           |
| Single, implements one interface | `class ImplDerivedClass : BaseClass, IFace1 { }` |

- Classes that you declare directly within a namespace, not nested within other classes, can be either public or internal. Classes are internal by default.

- Class members, including nested classes, can be public, protected internal, protected, internal, private, or private protected. Members are private by default.

A class can contain declarations of the following members:

- Constructors
- Constants
- Fields
- Finalizers
- Methods
- Properties
- Indexers
- Operators
- Events
- Delegates
- Classes
- Interfaces
- Structure types
- Enumeration types

###

###

###
