---
title: "Advance"
slug: "dotnet/advance"
stack: ".Net"
prev: ""
next: "dotnet/advance/engine"
level: ""
date: "Wed Mar 06 2024 22:16:35 GMT+0530 (India Standard Time)"
---

## advance 

C# is *programming language*

.NET is free, open-source, secure, reliable, and high-performance *application platform*.

## Building blocks of .Net

1. CLR (Common Language Runtime)
2. Class Library (for building apps) 

## CLR (Common Language Runtime)

Before we understand CLR and what it is, we need to under a little history of C#

> History

Before C#, we have 2 popular languages  C/ C++. With either of these languages when we compile our app, the compiler translates our code into native code for the machine it was running.

Which means if I run an app in C++ on a windows machine with 8086 CPU architecture, the compiler would translate that code into native code for that machine (i.e. window machine with 8086 architecture). 

> Problem and need

In market, we have different H/W and OS, So if we compile an app on 1 set of H/W or OS, that compiled code would not run on different set of H/W or OS. Which gave the need to make it platform independent

> Solution

So, When MS was designing C#, they borrowred the idea of JVM from Java community. In Java, when code is compiled, its not directly translated to native code, its first translated into intermediate language called bytecode

And we have the exact same concept in C#, So when you compile c# code, the result is IL code which is independent of the machine on which it is running.Now we need something that should take the compiled IL code and translates to Native Code at runtime and is called as CLR

What is CLR ❓

So, CLR is essentially an application sitting in memory whose job is to translate IL code to native code

How C# is platform independent ❓

- C# is platform-independent, i.e.  compiled result is always IL code (understandable by CLR).
- CLR is platform-dependent , i.e. specific to a platform in order to translate IL code to native code understable by the machine.

## Architecture of .Net Apps

At high level your .Net app consist of building blocks called Class. These classes collaborate with themselves at runtime and provide some functionality

### Class Vs Object

![Class](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLd06aTLS2WgwAOabYLmAyV50jdPkQab6Veg69bSjbqDgNWfGEG00)


A Class is a *logical compile-time* entity/blueprint which defines 
- data/attributes (state of instance)
- methods (behavior of instance) for an instance/object at runtime. For eg. Think of a car

![Car class](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLd1EBAhcKb3GpKtCJWNJ-IcfEI16SdvEVX6NGdmyaACDrgIX2MBcvfUb0bcrN0wfUIb0Sm00)

A car has some data/attributes like Make, Model, Color i.e. state of that car and methods like start(), move() i.e. behavior of that car.

![Audi8 object](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLd0iJScqgEPIKD3DJSnE1TFvAQav84PoVav-4PT2V3oGemtMfg49OkRcbwL2MQN5cSb0PYsNGsfU2j1G0000)

eg. Think of Audi8

In real world, car doesn't exist in real world since its a classification of real world object ie. Audi 8 or Mercedes, here Audi 8 is a physical entity. 
You sit in Audi8 or drive an Audi8 i.e. in real world you don't drive a Car, you drive Audi8 which Is a Car (IS-A relationship) 

![Audi8_Is_A_Car](http://www.plantuml.com/plantuml/png/FO-_3W8X38VtFaL7ZU5cOnpkukHZ460WWaqek9oykvLmdVed_NqVh5njgIqdSCaouyEM7T1a-mh_GZuagOuI5J06y3BkJsVfCds2D7qcj-RZLRAxNDJe-cJeE5awArDNojRDuK2nDOvkwEI9UFykon3Y3PziDbZ3syilVW00)

> Here Audi8 **IS-A** car

In programming, we create audi 8 instance using Car class at runtime. When audi 8 is instantiated, their is some memory allocation (physical)

An object is *physical runtime-time* entity which honours IS-A relation with its compile-time entity.


> In Real-world applications, we have 10s 100s or even 1000s of classes, each class responsible for a piece of funtionality

### Namespace

![Namespace](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIf8JCvEJ4zLKF9Bp4qj1l9IbHIgkHGKefrp4ekB5HnZ4Mmd9BOp4jibbgkMoo4rBmLe7W00)

How to manage an app with 1000s of classes❓

As the number of classes in our app grows, we need a way to organise these classes, that's where we use *namespace* i.e. container of related classes.

for eg. in .net app, we have namespaces each of containes multiple classes. We have namepace of working with data, graphics, files, network, etc

### Assembly

![Namespace](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIf8JCvEJ4zLK78iBaxDJSgfL5Aevb9GYFPBp4qj1agcAZZ6elATqFZEQ7oNMAvQBeVKl1IWyG00)

> How to manage an app with 1000s of namespace❓

In Real world apps, contains multiple namespaces, we need a way to organize and maintain these namespaces, that's where we use *assembly* i.e. container of related namespaces, physically its a file under disk which can either be an executable (EXE) or Dynamic Linked Library (DLL)

So when to compile a .Net application, compiler build 1 or more assemblies, depending on how you are partitioned your code

![Namespace](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIf8JCvEJ4zLK78iACZ9J4uioSpFKrAevb9GY7OiBaxDJSgfL72CHU4weNATKRakiLorN0wfUIb0qm40)


## Hello World App

### Environment Setup

Download and install
- SDK - [.Net](https://dotnet.microsoft.com/en-us/download)
- Code Editor - [VS Code](https://code.visualstudio.com/download)

```csharp
using System;
					
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Hello World");
	}
}
```


```markdown markmap
# Raodmap

## Fundamentals
Heading 1 text

### Item 1

### Item 2

## Beginner

Heading 2 text

### Item 1

### Item 2

## Intermediate

Heading 3 text

### Item 1

### Item 2

## Advance

Heading 4 text

### Item 1

### Item 2

## Expert

Heading 5 text

### Item 1

### Item 2
```

