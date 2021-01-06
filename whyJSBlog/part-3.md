# My personal language challenge _C_ vs _Java_ vs _Python_ vs _JavaScript_

The starting point for this blog entry was, that someone claimed JavaScript is a slow language. Someone else claimed, that programs in modern JavaScript are as blazing fast as native written programs in C. Back in my study times I solved [ProjectEuler problems](https://projecteuler.net/about). This are mathematical problems, which should be solved programmatically. I remember that some of my quick solutions took quite some calculation time. So I took the fun to implement a view problems again in C, Java, Python and JavaScript and compare the performance as well as my personal developer experience.

## Performance comparison
How measured...
<details>
  <summary>Important note about performance</summary>

- TODO refind blog entry about performance / goals is difficult
- what measured?
  - java cloud functions startup?
  - first or 1000 execution?
- JIT
- Runtime can change and depends on data: filter + sum vs reduce (filter and sum in same reduce) (maybe in chrome, firefox and Node.js?) 
- Compiler can optimise some code and some not (Börm)
- Trade off development costs and maintenance costs vs speed
</details>

## Personal Developer experience
No academic language comparision - Just features I enjoyed missed during solving

### Nice Features
Everything could be implemented - Most fun dynamic prime generator (coolest in JS, hardest in C)

Switching language is hard between probs -> doing one languange in row (+JS as backend and frontend)

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


