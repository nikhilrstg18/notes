---
title: "Statements"
slug: "dotnet/0_fundamentals/0_c/0_getting_started/2_building_blocks/2_statements"
stack: "C#.NET"
---

The actions of a program are expressed using `statements`. C# supports several different kinds of statements, a number of which are defined in terms of embedded statements.

- A _block_ permits multiple statements to be written in contexts where a single statement is allowed. A block consists of a list of statements written between the delimiters `{` and `}`.

- _Declaration statements_ are used to declare local variables and constants.
- _Expression statements_ are used to evaluate expressions. Expressions that can be used as statements include method invocations, object allocations using the new operator, assignments using `=` and the `compound assignment` operators, `increment` and `decrement` operations using the `++` and `--` operators and `await` expressions.
- _Selection statements_ are used to select one of a number of possible statements for execution based on the value of some expression. This group contains the `if` and `switch` statements.
- Iteration statements are used to execute repeatedly an embedded statement. This group contains the `while`, `do`, `for`, and `foreach` statements.

- _Jump statements_ are used to transfer control. This group contains the `break`, `continue`, `goto`, `throw`, `return`, and `yield` statements.

- The `try...catch` statement is used to catch exceptions that occur during execution of a block, and the `try...finally` statement is used to specify finalization code that is always executed, whether an exception occurred or not.

- The _checked and unchecked statements_ are used to control the overflow-checking context for integral-type arithmetic operations and conversions.

- The _lock statement_ is used to obtain the mutual-exclusion lock for a given object, execute a statement, and then release the lock.
- The _using statement_ is used to obtain a resource, execute a statement, and then dispose of that resource.

The following lists the kinds of statements that can be used:

## Declaration statement
### Local variable.
### Local constant.
## Expression statement.
### **if** - statement.
### **switch** - statement.
### **while** - statement.
### **do** - statement.
### **for** - statement.
### **foreach** - statement.
### **break** - statement.
### **continue** - statement.
### **goto** - statement.
### **return** - statement.
### **yield** - statement.
### **throw** & **try** - statements.
### **checked** & **unchecked** - statements.
### **lock** - statement.
### **using** -  statement.
