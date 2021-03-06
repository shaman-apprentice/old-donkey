# My personal language challenge _C_ vs _Java_ vs _Python_ vs _JavaScript_

The starting point for this blog entry was, that someone claimed JavaScript is a slow language. Someone else claimed, that programs in modern JavaScript are as blazing fast as programs natively written in C. I claim myself, that performance in normal applications isn't a first class problem anymore, as long as you have a reasonable software design.

Back in my study times, I solved [ProjectEuler problems](https://projecteuler.net/about). These are mathematical problems, which should be solved programmatically. I remember that some of my solutions took quite some calculation time. So I took the fun of implementing a few problems again in C, Java, Python and JavaScript and compare the performance as well as my personal developer experience.

The source code for my solutions is available on GitHub [here](https://github.com/shaman-apprentice/project-euler/tree/language-challenge). I used the same algorithm idea for all languages, but utilizing some nice specific language features, like Python's list comprehension. I did not try to squeeze out maximal performance, but solved a problem in JavaScript and when I was satisfied with the solution, I transferred the algorithm to the other languages. The source code used for evaluation is available on GitHub [here](https://github.com/shaman-apprentice/old-donkey/tree/main/whyJSBlog/euler-evaluation).

This blog entry is split into the following two parts:
1. [Performance analysis](#Performance-analysis)
2. [My developer experience](#My-developer-experience)

## 1. Performance analysis
<details>
  <summary>Performance is a complicated topic!</summary>
  The following thoughts are just some basic reasoning about performance:

  First of all you have to define your performance goals. For example if you have a function as a service, the startup time of a Java VM might be too slow for you (and a full Java VM in general is probably also more expensive in its resource usage than an interpreted language). But if you have a server running 24/7, startup time is of no concern for you.

  Another question is, whether you are interested in the first execution time or in the average of one million executions. An algorithm A can be faster than algorithm B if they both run once, but algorithm B can be faster in average over multiple executions if it can be better optimized by a JIT compiler.

  Also, based on the version of the compiler, the runtime and underlying hardware the performance of the same program / algorithm can differ.

  In addition the input data can have huge impact on the performance. I remember reading a paper about an efficient algorithm for solving the knapsack problem during my study times. The given algorithm outperformed all other given algorithms by far with the given test data. But when I ingested random generated data, it was in general way slower than the other algorithms.

  Last but not least performance is probably not the ultimate goal. How much would some performance optimization improve the user experience? Can the revenue be increased or costs be decreased through some performance optimization? How much time does it take to optimize the performance? Does the optimization make future feature development or maintenance more difficult?
</details>

<details>
  <summary>My Setup</summary>

  My PC: Windows 10 OS build 19042.685, AMD Ryzen 5 1600X 3.6GHz, 16GB Ram

  Used language versions:
  - **C**: gcc (MinGW.org GCC Build-2) 9.2.0
  - **Java**: Java(TM) SE Runtime Environment (build 15.0.1+9-18), HotSpot(TM) 64-Bit Server VM (build 15.0.1+9-18, mixed mode, sharing)
  - **Python**: 3.9.0
  - **Node.js**: v14.15.0
</details>

_Problems 01 - 10_ shows the execution time of all languages for the first 10 ProjectEuler problems. Huh, why does Python have such a huge peak in problem 5 and 10? The solutions [5](https://github.com/shaman-apprentice/project-euler/blob/master/python/_05/main.py#L8) and [10](https://github.com/shaman-apprentice/project-euler/blob/master/python/_10/main.py#L3) use a huge loop. C is of course already optimized at compile time and Java and JavaScript have a great JIT compiler. I didn't know until this comparison that Python ships without a JIT compiler.

![Problems 01 - 10](./euler-evaluation/screenshots/problems01-10.png)

If we exclude problem 5 and 10, we can see that Python is very very marginal faster than JavaScript but in those with a big loop, where JavaScript's JIT compiler can kick in, JavaScript manage to reduce execution time. 

![Problems 01 - 10](./euler-evaluation/screenshots/withoutProblem01And10.png)

If we plot problems 1 to 10 without Python, we see that in general Java is about 0.5s slower than JavaScript. C and JavaScript are close to each other, with C in most cases 0.05s faster. I find the differences in problem 5 interesting, where JavaScript clearly outperforms C, but Java doesn't. I guess JavaScript's JIT compiler does great here, but for Java the overhead for its stream api for the short array is to much for [its implementation](https://github.com/shaman-apprentice/project-euler/blob/master/java_/_05/Main.java#L12).

![Problems 01 - 10 without Python](./euler-evaluation/screenshots/problems01-10WithoutPython.png)

In the next diagram I measured the startup time for each language through executing an empty program (see problem _00_ of each language), and subtracted it from the total execution time. That brings Java's execution time closer to JavaScript's with JavaScript still being a little faster. But in problem 10 now Java even is a little faster than C. I assume the reason is, that Java's stream api [here](https://github.com/shaman-apprentice/project-euler/blob/master/java_/_10/Main.java#L7) can shine. 

![Problems 01 - 10 with average startup time subtracted](./euler-evaluation/screenshots/problems01-10WithAverageStartupTimeSubtracted.png)

In general I was surprised, that all of the problems were so fast. I remember that my solutions were way slower back at my studies time without being more sophisticated. Back then, I didn't even calculate the primes myself but used precalculated primes. Now I can calculate all primes below 2 million and add them up in less than 2 seconds. On the other side it's not too surprising as I have upgraded my PC multiple times since then. 

I was curious in a longer executing problem, so I solved [problem 70](https://projecteuler.net/problem=70) as well, evaluated in below diagram. Python once again is outpaced by its lack of a JIT compiler. Java and JavaScript outperform C by roughly 20%. To be fair, I am not an experienced C programmer and did no fancy optimizing stuff C probably enables you to do. 

![Problems 70](./euler-evaluation/screenshots/problem70.png)

**For me the key result here is, that JavaScript as a language compared to other languages has obviously no performance problem.**

## My developer experience
This section is a short reflection about my personal developer experience. It is split into a section for language specific features I enjoyed / missed and another section for language specific pitfalls I ran into.

As a general experience I noticed, that switching languages is exhausting. Even if my Java and JavaScript skills would be equal, I would still be more productive, if I can develop frontend and backend both in JavaScript, as this allows me to skip an annoying language switch in my head.

### Feature comparison

Some marks in table below have additional information described by a footnote like  <sup>1<sub>J</sub></sup>.

|     	| &nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;Python&nbsp;&nbsp;     	| JavaScript 	|
|:---------------------------------------- 	|:---:	|:----------:	|:----------:	|:----------:	|
|         Lines of Code                    	|  344 	|      336   |      123   	|     230    	|
|         Runs without compilation         	|  ✗    |      ✗     	|      ✓     |      ✓     	|
| Write once, run anywhere                 	|  ✗  	|      ✗/✓<sup>1<sub>J</sub></sup>   	|      ✗     	|      ✓     	|
|               Strong types               	|  ✓  	|      ✓     	|      ✗     	|      ✗/✓<sup>2<sub>JS</sub></sup> 	|
| First class functions                    	| ✗   	| ✗ / ✓<sup>3<sub>J</sub></sup> 	| ✓     	| ✓          	|
| Classes                                  	| ✗   	| ✓<sup>4<sub>J</sub></sup> ☹        	| ✓          	| ✓          	|
| Generators                               	| ✗   	| ✓          	| ✓          	| ✓          	|
| Generics                                 	| ✗/✓<sup>5<sub>C</sub></sup> 	| ✓          	| ✓          	| ✓          	|
| Default parameters                       	| ✗   	| ✗/✓<sup>6<sub>J</sub></sup>        	| ✓          	| ✓          	|
| No restrictions in file and folder names 	| ✓   	| ✗<sup>7<sub>J/P</sub></sup>   	| ✗<sup>7<sub>J/P</sub></sup>   	| ✓          	|
| JIT compiler                            	|  ✗  	|      ✓     	|      ✗     	|      ✓     	|

1. <sub>J</sub>: [Write once, run anywhere](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) was a slogan advertising Java cross-platform compatibility in 1995. For that reason I like to call JavaScript the new Java. In contrast to Java JavaScript runs e.g. also natively on the web or you can create React Native apps for Android and iPhone.
2. <sub>JS</sub>: As all valid JavaScript is also valid TypeScript migrating to strong types as prudent is a simple task. This comes with only marginal cost of using [ts-node](https://github.com/TypeStrong/ts-node) or transpiling your TypeScript back into JavaScript.
3. <sub>J</sub>: Java's stream api has many functional features. But it felt clumsy to me, as it needs a lot of boiler code and type converting. Surprisingly for me runtime exceptions, which could be detected by static source analysis, are still possible, as shown in [this unit-test](https://github.com/shaman-apprentice/old-donkey/tree/main/JavaStreamTypeRuntimeError). In addition function closure works only for final or effectively final variables, what was an unexpected restriction for me.
4. <sub>J</sub>: In general I think classes are a nice and useful abstraction feature. But that in Java everything has to live within a class (and a package declaration) feels to me like unnecessary enforcing of boiler code, which doesn't always provide value. 
5. <sub>C</sub>: Implementing a [generic array with dynamic length through macros](https://github.com/shaman-apprentice/project-euler/blob/master/c/utilities/dArray.c) was fun for me from an academical point of view. But it also felt error prone. I am glad that it is easier to implement and use generic typed utilities in the other languages. 
6. <sub>J</sub>: Java supports function overloading. Wether this is a good or bad feature is not topic of this blog. But it is something you can utilise for default parameter handling.
7. <sub>J/P</sub>: Originally I wanted my folder structure to look like _language/problemNumber/main.extension_. But as packages must be valid identifiers in Java and Python and neither _java_ nor _01_ are valid identifiers, I had to change the Java pattern to _java\_/\_01/Main.java_. The python pattern had to change to _python/\_01/main.py_. This restriction annoyed me, as I think it is unnecessary.


### Possible pitfalls

The following is a short list of pitfalls I stumbled over, which are not possible by all languages. The luxury of not having to worry about those, comes with a small cost in performance, which is in my opinion not of relevance in most programs. 

- C:
  - Pointer errors and accidentally changing "random" data stored at some memory position are possible.
  - Last character of a string (pointer to chars) is always "`\0`".
- Python:
  - As variables don't have to be declared before first usage, typos in variable usage are valid and lead to unexpected results.
- C and Java
  - Silent number overflows when doing arithmetics. The size of intermediate results must be known upfront, to prevent this.
  - Annoying casting of float to double and similar is necessary.

## Summary

To be fair I might be JavaScript biased. I have used C only a little during my study times. For my Bachelor thesis I developed a Java Android application with a Python server. I did my Master thesis in Python. At work I work with some Java and mainly JavaScript. So I definitely have the most experience with JavaScript.

**Nevertheless I think it is very fair to say, that JavaScript as a language does not lack behind regarding performance and does well regarding productivity. This language challenge has reinforced JavaScript as my language of choice.**

In a future post I might execute the JavaScript solutions of ProjectEuler problems not with Node.js but within different browsers. To compile them into WebAssembly and evaluate the performance impact also intrigues me.
