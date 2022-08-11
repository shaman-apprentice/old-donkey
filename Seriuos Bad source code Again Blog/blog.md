# Seriously? Bad source code! Again?!

When I dig into new projects for the first time, I always find code smells like classes with more than 500 lines of code, duplicated logic, untested features, logic deeply baked in into an UI component which easily could have been a pure (lovely testable) function. Is clean code complex rocket science, only mastered by very few in the 21st century? Or is clean code just not important? Let's reflect about this:

## What should good source code in the free market do?

When we consider something as bad, it doesn't match our expectations. When I work with bad source code, my expectation to rapidly implement new features gets disappointed. This makes me feel the company is not earning as much money as it could, due to previous sloppy work.

This leads me directly to the point, what **good source code in the free market should do: Its purpose is simply to earn as much money as possible.**

How does our source code earn money? Some company sells a product. The source code is, like a lot of other important stuff, part of the product. And in the end our customers and stakeholder have hopefully given us more money, than we have spent on salaries, licenses, marketing and other costs, so some money stays in our company.

![code2money.png](./code2money.png)

But wait, so far there wasn't mentioned anything like clean code in this section. Is this stuff just not important?

## Some thought experiments

Let's have some simple thought experiments. In the following tables the numbers represent an abstract unit of earned money per release. The exact amount is not relevant but only their ratio.

### 1.

Assume we ship a new product. The first team does rapid prototyping and produces a lot of features with sh\*ty code. The second team spends time for building a clean codebase but doesn't ship as many features due to it. Customers pay for the product and not for the internal source code. Meaning the company will likely earn more with the first team.

|                        | Release 1 | Total earned money |
| :--------------------- | :-------: | :----------------: |
| Team shi\*ty code      |     2     |         2          |
| Team clean source code |     1     |         1          |

### 2.

But our product hopefully lives longer than one release. The second team can likely release new features on a regular basis. Thus increasing customers base and existing customers are willing to pay more. Both increases revenue steadily. But the first team must fix some bugs, new features take longer time. So, they are not able to ship as many new features.

|                        | Release 1 | Release 2 | Release 3 | Release 4 | Release 5 | Total earned money |
| :--------------------- | :-------: | :-------: | :-------: | :-------: | :-------: | :----------------: |
| Team shi\*ty code      |     2     |     2     |     3     |     3     |     4     |         14         |
| Team clean source code |     1     |     2     |     3     |     4     |     5     |         15         |

### 3.

Naturally we decide to be the second team. But after our first release there appears a similar product on the market. The competitor ships more features than us. Probably they don't give a f\*ck about clean source code. I surely don't want to be a developer in their team in 2 years, only having to fix bugs and spending ages for new simple features. Nevertheless, customers don't see the source code. They see all the new features of the competitor and we lose our customers.

|                        | Release 1 | Release 2 | Release 3 | Release 4 | Release 5 | Total earned money |
| :--------------------- | :-------: | :-------: | :-------: | :-------: | :-------: | :----------------: |
| Team clean source code |     1     |     2     |     0     |    -1     |    -1     |         1          |
| Competitor             |     -     |     ?     |     ?     |     ?     |     ?     |         ?          |

## TODO What is important

- Why competitor better?
- Time limiting resource
- Developer Happiness

Looking at source code without context is meaningless. Clean code helps us to regularly ship new features over a long time. But the success of the company, which includes the success of our source code, depends on a lot of things. Therefore, we should not be upset about bad source code and not just improve the code quality. We should connect with our project manager, marketing, etc. and find out, how we can ensure the success of the company. Depending on the market situation this can mean to improve the code quality enabling a regular feature flow in the future. Or it can mean to implement features as hell, to catch up to a competitor. Or implement some user evaluation first, to better guess which features are needed. Or fix bugs as hell to prevent the acute danger of losing a key customer (while hopefully increasing code quality to banish them permanently). Or ...
