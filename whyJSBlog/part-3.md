# My personal language challenge _C_ vs _Java_ vs _Python_ vs _JavaScript_

The starting point for this blog entry was, that someone claimed JavaScript is a slow language. Someone else claimed, that programs in modern JavaScript are as blazing fast as native written programs in C. Back in my study times I solved [ProjectEuler problems](https://projecteuler.net/about). This are mathematical problems, which should be solved programmatically. I remember that some of my quick solutions took quite some calculation time. So I took the fun to implement a view problems again in C, Java, Python and JavaScript and compare the performance as well as my personal developer experience.

## Performance comparison
<details>
  <summary>Performance is a complicated topic!</summary>
  The following are just some basic thoughts about performance:

  First of all you have to define your performance goals. For Example if you have a function as a service, the startup time of a Java VM might be to slow for you (and a full Java VM in general is probably also more expensive in its resource usage than an interpreted language). But if you have a server running 24/7 startup, time is of no concern for you.

  Another question is, if you are interested in the first execution time or on the average of one million executions. An algorithm A can be faster than algorithm B if they both run once, but algorithm B can be faster in average over multiple executions, if it can be better optimized by a JIT compiler.

  This leads me to the next point - compilers. Thinking about optimizing your source code I always remember my mathematical numeric professor. He spent quite some time in optimizing his source source code. But when he compiled and measured the difference, he had to admit, that the program has became slower. The moral is, that human optimization can reduce optimization possible by the compiler.

  Also based on the version of the compiler and runtime the performance of the same program can differ.

  In addition the input data can have a huge impact on the performance. I remember reading a paper about an efficient algorithm for solving the knapsack problem during my study times. The given algorithm outperformed all other algorithm by far with the given test data. But when I ingested random generated data, it was in general way slower than the other algorithm.

  Last but not least performance is probably not the ultimate goal. How much would some performance optimization improve the user experience? Can the revenue be increased or costs be decreased through some performance optimization? How much time does it take to optimize the performance (remember that development time is expensive). Does the optimization make future feature development or maintenance more difficult? ...

  **To put it in a nutshell** when reasoning about performance you should always
  - **measure**
  - think about the tradeoff of code **quality vs performance**.
</details>

<details>
  <summary>My Setup</summary>

  My PC: Windows 10 OS build 19042.685, AMD Ryzen 5 1600X 3.6GH, 16GB Ram

  Used language versions:
    - C: gcc (MinGW.org GCC Build-2) 9.2.0
    - Java: Java(TM) SE Runtime Environment (build 15.0.1+9-18), HotSpot(TM) 64-Bit Server VM (build 15.0.1+9-18, mixed mode, sharing)
    - Python: 3.9.0
    - Node.js: v14.15.0
</details>

- todo: chart with subtracted startup time

## Personal Developer experience
No academic language comparision - Just features I enjoyed missed during solving

### Nice Features
Everything could be implemented - Most fun dynamic prime generator (coolest in JS, hardest in C)

Switching language is hard between probs -> doing one languange in row (+JS as backend and frontend)

todo: add rLoC

|     	| &nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;Python&nbsp;&nbsp;     	| JavaScript 	|
|:---------------------------------------- 	|:---:	|:----------:	|:----------:	|:----------:	|
|         Runs without compilation         	|  ✗  	|      ✗     	|      ✓     	|      ✓     	|
|         Runs everywhere                 	|  ✗  	|      ✗/✓   	|      ✗     	|      ✓     	|
|               Strong types               	|  ✓  	|      ✓     	|      ✗     	|      ✗     	|
| First class functions                    	| ✗   	| ✗ / ✓      	| ✗/✓        	| ✓          	|
| Classes                                  	| ✗   	| ✓          	| ✓          	| ✓          	|
| Generators                               	| ✗   	| ✓          	| ✓          	| ✓          	|
| Generics                                 	| ✗/✓ 	| ✓          	| ✓          	| ✓          	|
| Default parameters                       	| ✗   	| ✗/✓        	| ✓          	| ✓          	|
| Native List with dynamic length          	| ✗   	| ✓          	| ✓          	| ✓          	|
| No restrictions in file and folder names 	| ✓   	| ✗          	| ✗          	| ✓          	|
|                    JIT                   	|  ✗  	|      ✓     	|      ✗     	|      ✓     	|

✗
✓
✗/✓

### Possible Pitfalls
- Compiler / compile for system (C - win / linux) (C)
- C pointer 
  	- realloc(self->array, !sizeof!(self->capacity)); // error an anderer stelle je nach run :D / segmented fault - sehr hilfreich, danke
- number overflow
- int + long needs converting
- C: - last char of string is `\0`
## Summary
- With clean Architecture 99% performance irrelevant
  - Refactorign quote: "Programmars are bad at performance judging"


