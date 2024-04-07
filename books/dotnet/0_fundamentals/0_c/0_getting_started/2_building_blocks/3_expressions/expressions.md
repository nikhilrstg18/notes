---
title: "Building Blocks"
slug: "dotnet/0_fundamentals/0_c/0_getting_started/2_building_blocks/3_expressions"
stack: "C#.NET"
---


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

C# provides operators to perform [arithmetic](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators), [logical](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators), [bitwise and shift](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators) operations and [equality](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators) and [order](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/comparison-operators) comparisons.
