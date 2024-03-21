---
title: "GradeBook"
slug: "dotnet/fundamentals/c/beginner/grade_book"
stack: "C# by Example"
prev: "../"
next: "dotnet/fundamentals/c/beginner/grade_book/syntax"
level: ""
date: "Wed Mar 06 2024 22:16:35 GMT+0530 (India Standard Time)"
---

## Introduction

In this module, we are going to start learning some of the basic syntax for the C# language. There's a lot of information in this module, but we'll revisit some of the topics in this module time and time again as we move through the course.

So open up your editor and follow along because I want to give you some small exercises to try as we move through the module. These exercises get you writing code on your own and storing knowledge about C# inside of your brain. Before we start though, let's look at some requirements for our software.

## Your Assignment
As a software developer, 
you generally write software to solve a problem for yourself or perhaps for your business. And oftentimes the problem comes to you from a manager or a customer or from an idea that strikes you in the middle of the night. 

Let's pretend we are working for a school, and the boss comes to us with the following requirements for new software. 

> We need an electrnic grade book to read the scoes of an individual student and then compute some simple statistics fromt he scores.
> The grades are entered as floating point numbers from 0 to 100, and the statistics should show us the highest grade, the lowest grade and the average grade
> - The Project Manager


Now one of the biggest challenges you'll face in software development is taking requirements like this and turning them into code. Really, the code itself is easy. It's translating the requirements from your users and customers and coming up with a good system design, those are the hard pieces. 

But when you're just starting with a language, you need to learn the basic syntax and features of that language so that you don't have to think about syntax details, and you can focus on these bigger, harder challenges. My advice is always to start small. The way to work with software is to tackle little pieces and little problems and get those little things out of the way so you can see the bigger picture. 
	
So for these requirements, let's first focus on the part that says given a collection of grades, we need to show the average grade. Averaging a collection of numbers will require some math operations. So let's first figure out how to write mathematical expressions in C# and assign those expressions to variables for storage.


## Code blocks and Statements

img 1

Something we learned in the first module of this course is that when we execute or build or run this application, we're going to be executing and running the lines of code that appear inside of this main method, which is the entry point for the application, and I also pointed out that the C# language likes to use curly braces to denote the start and the end of different things in the language. So the start of this method is this opening curly brace, and this method, technically the method body that is inside ends with this closing curly brace, and every start needs an end, that's why it's nice to have an editor like Visual Studio or Visual Studio Code that understands the C# language and can show you when two curly braces match up, either by drawing a line or by doing some highlighting. 

img 2

Now these significant pieces of code that are inside of this method, each of these are what we would call statements in the C# language. So this code on Line 9 is what we would call an if statement. This code on Line 11 is a statement that invokes the WriteLine method on the console. And something you might have already noticed and I haven't talked about is the semicolon that appears at the end of the statement. So some statements in the C# language do not require a semicolon. Obviously, this program is working well without a semicolon at the end of the if statement and in other places the C# compiler, that tool that translates my C# language into an efficient binary format, requires me to place a semicolon at the end of a statement, and the idea is that the semicolon will allow the compiler to figure out where one statement ends and the next statement begins. And the rules about semicolons can be a little bit intimidating when you first start because you might not know am I supposed to use the semicolon here or not, but don't worry too much because the tools are here to help you. 

img 3

So let's see what happens if I say, oh, I don't think I need a semicolon here on Line 11. Let me remove the semicolon and I think I do need a semicolon here on Line 9 after the if statement. Well, if I do that and I save Program.cs, at this point, I would not be able to build or run my program. There are going to be compiler errors, and the C# compiler is going to complain that there is something syntactically wrong with my program.

Let's take a look at those problems. 
1. I could do a dotnet build from the command line.

img 4

2. I can also try to do a Start Without Debugging that's going to do a dotnet build behind the scenes and I can see that errors exist.

img 5

Let me click on the button to show errors. They're going to appear here in the bottom window of VS Code under the Problems tab. 

img 6

Now this is another area where things could be a little bit frustrating trying to figure out what is syntactically wrong with the C# program as there are a lot of errors and warnings displayed. 

Click on an error, starting from top and that error line in error file will be highlighted. This directed user to exact line number in error file and user can now see red squiggly. 

img 7

When hover on error user can again see error description  

if you see problems that are listed inside of the csproj file, the project file, don't click on those problems. Instead, look for problems that are listed inside of .cs files, so Program.cs. 

And here is another point of frustration that you might have. 


If I click on this first problem, which is ;expected, it's telling me that this error occurs on Line 12

but here is a little tip, you should really try to work through the problems in your source code starting at the top of a file and working to the bottom because quite often you can have an error at the beginning of a file that is creating another error later in the file, and if you try to tackle that later error, you're going to go crazy and pull your hair out because in many cases what you have is not really an error, it's an error that's caused because of a previous problem. So the situation we have here is actually a pretty good example. 
	

img 8

There is another problem that is occurring on Line 9, this is not an error, it's a warning, and up here, I also want to point out in the editor I receive little red squigglies when there is an error detected at that location, and I receive little yellow squigglies when there is a warning at that location and what I want to do is start on Line 9 because that's the first place inside of this file that indicates there might be a problem. 

img 9

And here is the problem on Line 9. The C# compiler is smart enough to say you probably don't want to have a semicolon in this location. You've possibly made a mistake by giving me an empty statement. 

Now what the C# compiler is trying to point out is that when you have an if statement, the C# compiler is trying to figure out what code do I execute when the expression inside the if statement returns true. Well, without the semicolon here, the C# compiler can easily see that there is a block of code that comes after the if statement, and again, this is the start of that block, and this is the end of that block, and inside of that block right now is a single statement, but this is the code that should execute this block of code, the entire block of code. 

So even if I have multiple Console.WriteLine statements inside of here, all the code inside of that block will execute. The C# compiler can easily see that, but if I have a semicolon at this location, technically what I'm trying to tell the C# compiler is that if this expression returns true, execute the statement that happens between that if statement and the semicolon, so code that would appear here, but there is no code there. There is no statement there, so I have an empty statement. 

Now the C# compiler is trying to tell me that you probably don't want to check this condition and then execute nothing, you probably want to check this condition and execute the following statement or block of code that you have here, so get rid of the semicolon that appears there. That is a mistake. 

img 10

Now you'll notice as soon as I remove that semicolon, a couple of things changed in my problem list
	
And in fact, my red squiggly moved from being on Line 12 to being up here on Line 11 and the problem on Line 11 is that a semicolon is expected. So I do need to have a semicolon at the end of line 11, and you'll notice this entire time there really was no problem on Line 12. The problem on Line 12 was that my syntax had some issues higher up in the source code file.

img 11

So we just fixed two compiler errors in the program, and everything is back into a state where I should be able to run the program and see hello world or hello Scott, whatever I pass as a parameter. 
	
Now another type of statement that you can have is what we call a variable declaration. 

img 12

So we know from our requirements that ultimately we're going to need to work with floating point numbers so that is numbers that have some value after the decimal point. And in the C# language, there is some built‑in data types that I can use to hold floating point numbers in a variable So in a statement where I declare a variable, I'm declaring a storage location to hold some value, and just like this parameter here on the main method, every variable declaration consists of a name for a variable and a type. So if I want to declare a variable X to hold a floating point value, I also have to give this variable a type and the type float in C# can hold a floating point number. There is also a double type in the C# language, this holds a double precision floating point number. So this double type is twice as precise as the float type that I had typed in earlier, it also takes up more storage space, but that's okay. If we want to be as precise as we can, we'll use this double type, and right now I can see a warning. 

img 13

If I hover over the little yellow squiggly, I can see that access declared, but never used that's simply the C# compiler telling me, are you sure you really need this X? You're not doing anything with it, 

img 14

So let's try to do something with X. One thing I can do with X is assign a value to it. So I can say that X = 34.1, that's a floating point value, or I could just say X = 34, that's an integer value. And I just want to point out that if I were to declare X as an integer, so only hold values that don't use numbers after the decimal point, then I cannot assign the value 34.1 to the integer value because the C# compiler just refuses to automatically convert a number that is of type double to an integer because it's going to lose some information. 
	


img 15

So let's go back to declaring X as a double and I just want to show you that another thing I can do is just have this initialization expression immediately after I declare the variable, so double X = 34.1. 

Now what I'd like you to try is to define to floating point variables X and Y, and then add those two variables together to place into a result, then I want you to write the result. So add two floating point numbers and write the result and, by the way, how do you add numbers? Well, the basic mathematical operators in the C# language are addition, which is the plus sign, so I can say X + 2.1, and I can assign that to another variable by saying some variable = X + 2.1. There is also subtraction with the minus sign, multiplication with an asterisk, and division with a slash. So I want you to try to add two numbers together and WriteLine the result.

## Adding Numbers and Creating Arrays

Let's do some addition. What I want to do is add another floating point variable to the program. 
	
Let's name it y and set that equal to 10.3. And then I want to add x and y and place that into a result. 

img 16

But before I do that, let me introduce you to another feature of C# and a new keyword known as the var keyword. So any time you have an initialization expression like 34.1 and you're assigning that value to a variable at the same time you're declaring the variable, you can take advantage of a feature and C# known as implicit typing. 

And you can do this with the var keyword. Essentially, what you're telling the C# compiler is that I know you can figure out the type of this variable based on the context and what's happening in the code. I know you'll be able to figure out that x is a double. 
	
And indeed, if I hover over x with the mouse, I can see it really is being treated as a double. But the benefit here is that I don't need to provide an explicit type every time I create a variable.

- Now some people love the var keyword because they think it keeps the code clean and simple. 
- Other people do not like the var keyword. They want to see explicit types everywhere through the program so they don't have to guess what the type is. 
- So feel free to use the var keyword or not use the var keyword. 
- I prefer the var keyword myself, so I'm going to be using it a lot during the course. 


img 17

But I do just want you to know that this is still a strongly typed variable.
- So this is not like the var keyword in JavaScript where I can go on to say on the next line of code that y = a string. 
- That's going to be illegal because I cannot assign a value of type string into a variable that can only hold a double, a floating point number. So that's illegal. Another place I could use the var keyword is when I define a result. 

• But in order for the var keyword to work, I have to have some initialization expression. I have to say that result equals something. 
Otherwise, when the C# compiler looks at this line of code, there's not enough information to tell the compiler what is result. 

img 18


So that's the first error that you see in the pop‑up window. Implicitly typed variables must be initialized. 
• When you're using the var keyword, you're allowing an implicit type for that variable. But if I say result = x + y and then a semicolon, now the C# compiler knows that result is going to need to be a double because we're adding two doubles together. So obviously the result has to be placed into a double. 

img 19

• If I were to try to place that into an integer, that will be an error because an integer doesn't have enough precision to hold a floating point value. If I tried to place it into a string, that's an obvious type mismatch is what we would call that, trying to put a number into a sequence of characters


So I'm going to leave this implicitly typed as a double using the var keyword. 

And then what I want to do is a Console.WriteLine and display the result. So here's a little quick tip in Visual Studio Code. Visual Studio Code does include some code snippets for common expressions and common statements that you write in the C# language. So one way I could do a ConsoleWriteLine is to type out Console.WriteLine. 

img 20

But another way to add a Console.WriteLine statement is to type just cw. And I can see in this pop‑up window that cw is going to be short for Console.WriteLine. 

img 21

And in order to expand the snippet, what I do is just press the Tab key, and I now have a Console.WriteLine, and we're using the full namespace to get to the console, which I don't like and also its using System namespace already . I would prefer just Console.WriteLine as below

img 22

And now what does WriteLine actually take? Does WriteLine require a string like the string that we're passing down here? 
Well no, it turns out that WriteLine can take any number of parameters of any type, and we can pass in integers and floating point values and strings, and we'll talk about how that works a little later in the course. 

img 23


But right now, I just want to say result, and this should print out our result. Let's test it real quick. I want to start without bugging. I'm going to watch the output scroll by down here in the debug console, and I see the result, 44.4 That looks correct. 

Now if we look back at our requirements, we know we're going to have to do an averaging of numbers. 
But according to the requirements, we really don't know if there's going to be 1 grade or 10 grades or 1,000 grades or 0 grades. No one said your students will produce exactly 10 grades. 

So we're going to have to have some sort of collection of floating point numbers that we can manage and that can grow as we add more grades. Obviously, we don't want to do that by declaring a variable for each grade because we don't know how many grades there's going to be. 

img 24

And that's where we can turn to a collection like an array. The parameter that is passed to this Main method is an array of string. It's named args. 


If I wanted to declare an array of floating point numbers, I could use that same syntax, which is double, and then square brackets and call this variable numbers. 
And once I do that, I could walk up to numbers, and I could try to read values out of numbers by going to numbers sub 0. 

img 25

Just like down here, we have an expression that goes to args sub 0 to get the first string in the args array. Numbers sub 0 would be the first element in the numbers array, so the first floating point number. And I could also assign a value to that position. 

So if I wanted to write into the first position there, I could say that number sub 0 equals 34.1. As you can see though, I currently have an error. 

And if I hover over the red squiggly, I will see that I'm using an unassigned local variable, numbers. So the C# compiler is not going to allow you to use an unassigned local variable because that typically leads to errors inside of a program. You're doing something with this variable that you've never assigned to. In this case, that array doesn't actually exist. 

All you have is a variable that is pointing to an array that doesn't exist, and we'll talk a little more about pointers and references later in the course. The same is true with explicitly typed variables, by the way. 

img 26
	
So if I just say double x, so I know x is of type double, but then I try to use double in some sort of expression, like x = x + 3.1, that is also going to be a compiler error because I haven't assigned a value into x. So I need to initialize variables one way or another. 


And the way to initialize an array if I don't already have an array available is to create a new array to assign to this variable. And I do that with the new keyword. So you can think of this as creating a new array, instantiating an array, and I have to use an expression that says this is going to be an array of double, and I also have to provide a number inside of the square brackets that represents the size of that array. 

img 27

So this syntax where I just have double and square brackets, that's fine for declaring a variable and for defining a parameter. I'm just saying, yes, this is going to be an array. I don't know the explicit size of that array, and that's okay. 

img 28

But down here when I'm creating an array, I have to provide an explicit size. How large is this going to be? How many numbers is it going to hold? Let's use the value 3. 

img 29

So our array can now hold three floating point numbers. And once I have this full initialization expression here on the right‑hand side, once again, I can use implicit typing to simplify these lines of code. 
	
And now what I'd like you to do is add two more numbers into the array, so there are three floating point numbers inside, and then compute the sum of those three numbers and write out the result. In the next clip then, I want to introduce you to some new syntax that will hopefully make those tasks easier.

## Looping

## Computing and Formatting the Result





