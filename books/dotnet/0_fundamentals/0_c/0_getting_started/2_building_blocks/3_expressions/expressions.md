---
title: "Expressions"
slug: "dotnet/0_fundamentals/0_c/0_getting_started/2_building_blocks/3_expressions"
stack: "C#.NET"
---

## Overview

> Expressions are constructed from operands and operators.

- The operators of an expression indicate which operations to apply to the operands. Examples of operators include `+`, `-`, `*`, `/`, and `new`. Examples of operands include `literals`, `fields`, `local variables`, and `expressions`.

- When an expression contains multiple operators, the precedence of the operators controls the order in which the individual operators are evaluated.

For example,
the expression `x + y * z` is evaluated as `x + (y * z)` because the `*` operator has higher precedence than the `+` operator.

- When an operand occurs between two operators with the same precedence, the associativity of the operators controls the order in which the operations are performed:

- Except for the _assignment_ and _null-coalescing_ operators, all binary operators are left-associative, meaning that operations are performed from left to right. For example, `x + y + z` is evaluated as `(x + y) + z`.

- The assignment `=`operators, the null-coalescing `??` and `??=` operators, and the conditional operator `?:` are right-associative, meaning that operations are performed from right to left.
  For example, `x = y = z`is evaluated as `x = (y = z)`.

- Precedence and associativity can be controlled using parentheses.
  For example, `x + y * z` first multiplies `y` by `z` and then adds the result to `x`, but `(x + y) * z` first adds `x` and `y` and then multiplies the result by `z`.

Most operators can be [overloaded](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading). Operator overloading permits user-defined operator implementations to be specified for operations where one or both of the operands are of a user-defined class or struct type.

- The simplest C# expressions are literals (for example, [integer](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types#integer-literals) and [real](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types#real-literals) numbers) and names of variables.

- You can combine them into complex expressions by using operators. Operator [precedence](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/#operator-precedence) and [associativity](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/#operator-associativity) determine the order in which the operations in an expression are performed. You can use parentheses to change the order of evaluation imposed by operator precedence and associativity.

## Kinds of expressions that C# provides

### assignment expressions

- where expressions are at the right-hand side of

```csharp
int a, b, c;
a = 7;
b = a;
c = b++;
b = a + b * c;
c = a >= 100 ? b : c / 10;
a = (int)Math.Sqrt(b * b + c * c);

string s = "String literal";
char l = s[s.Length - 1];

List<int> numbers = [..collection];
b = numbers.FindLast(n => n > 1);
```

Typically, an expression produces a result and can be included in another expression. A [void](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void) method call is an example of an expression that doesn't produce a result. It can be used only as a [statement](../../2_statements), as the following example shows:

```csharp
Console.WriteLine("Hello, world!");
```

### [Interpolated string expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)

- that provide convenient syntax to create formatted strings:

```csharp{2}
var r = 2.3;
var message = $"The area of a circle with radius {r} is {Math.PI * r * r:F3}.";
Console.WriteLine(message);
// Output:
// The area of a circle with radius 2.3 is 16.619.
```

### [Lambda expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

- that allow you to create anonymous functions:

```csharp{2}
int[] numbers = { 2, 3, 4, 5 };
var maximumSquare = numbers.Max(x => x * x);
Console.WriteLine(maximumSquare);
// Output:
// 25
```

### [Query expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/query-keywords)

- that allow you to use query capabilities directly in C#:

```csharp{2-5}
int[] scores = { 90, 97, 78, 68, 85 };
IEnumerable<int> highScoresQuery =
    from score in scores
    where score > 80
    orderby score descending
    select score;
Console.WriteLine(string.Join(" ", highScoresQuery));
// Output:
// 97 90 85
```

### [Expression body definition](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members)

- to provide a concise definition for a method, constructor, property, indexer, or finalizer.


### [Default value expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)

A default value expression produces the default value of a type. There are two kinds of default value expressions: the default operator call and a default literal.

You also use the `default` keyword as the default case label within a `switch` statement.

## default operator
The argument to the default operator must be the name of a type or a type parameter, as the following example shows:

```csharp
Console.WriteLine(default(int));  // output: 0
Console.WriteLine(default(object) is null);  // output: True

void DisplayDefaultOf<T>()
{
    var val = default(T);
    Console.WriteLine($"Default value of {typeof(T)} is {(val == null ? "null" : val.ToString())}.");
}

DisplayDefaultOf<int?>();
DisplayDefaultOf<System.Numerics.Complex>();
DisplayDefaultOf<System.Collections.Generic.List<int>>();
// Output:
// Default value of System.Nullable`1[System.Int32] is null.
// Default value of System.Numerics.Complex is (0, 0).
// Default value of System.Collections.Generic.List`1[System.Int32] is null.
```

## default literal
You can use the `default` literal to produce the default value of a type when the compiler can infer the expression type. The `default` literal expression produces the same value as the `default(T)` expression where `T` is the inferred type. You can use the default literal in any of the following cases:

- In the assignment or initialization of a variable.
- In the declaration of the default value for an [optional method parameter](https://learn.microsoft.com/en-us/dotnet/csharp/methods#optional-parameters-and-arguments).
- In a method call to provide an argument value.
- In a `return` statement or as an expression in an [expression-bodied member](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members).

The following example shows the usage of the default literal:

```csharp
T[] InitializeArray<T>(int length, T initialValue = default)
{
    if (length < 0)
    {
        throw new ArgumentOutOfRangeException(nameof(length), "Array length must be nonnegative.");
    }

    var array = new T[length];
    for (var i = 0; i < length; i++)
    {
        array[i] = initialValue;
    }
    return array;
}

void Display<T>(T[] values) => Console.WriteLine($"[ {string.Join(", ", values)} ]");

Display(InitializeArray<int>(3));  // output: [ 0, 0, 0 ]
Display(InitializeArray<bool>(4, default));  // output: [ False, False, False, False ]

System.Numerics.Complex fillValue = default;
Display(InitializeArray(3, fillValue));  // output: [ (0, 0), (0, 0), (0, 0) ]
```
💡: Use .NET style rule [IDE0034](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/ide0034) to specify a preference on the use of the default literal in your codebase.

### [nameof expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof)
A nameof expression produces the name of a variable, type, or member as the string constant. A nameof expression is evaluated at compile time and has no effect at run time. When the operand is a type or a namespace, the produced name isn't fully qualified. The following example shows the use of a nameof expression:

C#

Copy

Run
Console.WriteLine(nameof(System.Collections.Generic));  // output: Generic
Console.WriteLine(nameof(List<int>));  // output: List
Console.WriteLine(nameof(List<int>.Count));  // output: Count
Console.WriteLine(nameof(List<int>.Add));  // output: Add

List<int> numbers = new() { 1, 2, 3 };
Console.WriteLine(nameof(numbers));  // output: numbers
Console.WriteLine(nameof(numbers.Count));  // output: Count
Console.WriteLine(nameof(numbers.Add));  // output: Add
You can use a nameof expression to make the argument-checking code more maintainable:

C#

Copy
public string Name
{
    get => name;
    set => name = value ?? throw new ArgumentNullException(nameof(value), $"{nameof(Name)} cannot be null");
}
Beginning with C# 11, you can use a nameof expression with a method parameter inside an attribute on a method or its parameter. The following code shows how to do that for an attribute on a method, a local function, and the parameter of a lambda expression:

C#

Copy
[ParameterString(nameof(msg))]
public static void Method(string msg)
{
    [ParameterString(nameof(T))]
    void LocalFunction<T>(T param) { }

    var lambdaExpression = ([ParameterString(nameof(aNumber))] int aNumber) => aNumber.ToString();
}
A nameof expression with a parameter is useful when you use the nullable analysis attributes or the CallerArgumentExpression attribute.

When the operand is a verbatim identifier, the @ character isn't the part of a name, as the following example shows:

C#

Copy

Run
var @new = 5;
Console.WriteLine(nameof(@new));  // output: new
### [switch expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression)

### [with expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/with-expression)
