# Seriously? Bad source code! Again?!

When I dig into new projects for the first time, I always find code smells like classes with more than 500 lines of code, duplicated logic, untested features, logic deeply baked in into an UI component which easily could have been a pure lovely testable function. Is clean code complex rocket science, only mastered by very few in the 21st century? Or is clean code just not important? Let's reflect about this:

## What should good source code in the free market do?

When we consider something as bad, it doesn't match our expectations. When I work with bad source code, my expectation to rapidly implement new features gets disappointed. This makes me feel the company is not earning as much money as it could, due to previous sloppy work.

This leads me directly to the point, **what good source code in the free market should do: Its purpose is simply to earn as much money as possible.**

How does our source code earn money? Mostly some company sells a product. The source code is like a lot of other important stuff part of the product. And in the end our customers and stakeholder have hopefully given us more money, than we have spent on salaries, licenses, marketing, etc., so some money stays in our company.

![code2money.png](./code2money.png)

But wait, so far there wasn't anything about clean code in this section. Is this stuff just not important?

## Some thought experiments

Let's have three simple thought experiments. In the following tables the numbers represent an abstract unit of earned money per release. The exact amount is not relevant but only their ratio.

### 1.

Assume we ship a new product. The first team does rapid prototyping and produces a lot of features with sh\*ty code. The second team spends time for building a clean codebase but doesn't ship as many features due to it. Customers pay for the product and not for the internal source code. Meaning the company will likely earn more with the first team.

|                        | Release 1 | Total earned money |
| :--------------------- | :-------: | :----------------: |
| Team shi\*ty code      |     2     |         2          |
| Team clean source code |     1     |         1          |

### 2.

But our product hopefully lives longer than one release. The second team can likely release new features on a regular basis. Thus increasing customers base and existing customers are willing to pay more. Both increases revenue steadily. But the first team must fix some bugs, new features take longer time. So, they aren't able to ship as many new features.

|                   | Release 1 | Release 2 | Release 3 | Release 4 | Release 5 | Total earned money |
| :---------------- | :-------: | :-------: | :-------: | :-------: | :-------: | :----------------: |
| Team shi\*ty code |     2     |     2     |     3     |     3     |     4     |         14         |
| Team clean code   |     1     |     2     |     3     |     4     |     5     |         15         |

### 3.

Naturally we decide to be the second team. But after our first release there appears a similar product on the market. We start to lose customers 🤯

|                 | Release 1 | Release 2 | Release 3 | Release 4 | Release 5 | Total earned money |
| :-------------- | :-------: | :-------: | :-------: | :-------: | :-------: | :----------------: |
| Team clean code |     1     |     2     |     0     |    -1     |    -1     |         1          |
| Competitor      |     -     |     ?     |     ?     |     ?     |     ?     |         ?          |

Why could the competitor outperform us on the market?

- Did he write cleaner code, allowing him to implement features faster?
- Did he cut short on clean code for having more times for features? In that case he will probably have to fix a lot of bugs and will need ages for new features in the near future. Not unlikely, frustrated developers will start quitting as well. Nevertheless, for now he has beaten us and it is unclear, if customers will come back later. If we are still in the market at all then.
- Or maybe they have a better DevOps culture, allowing their overall organization to perform more efficient.
- Or maybe they have implemented less features but their features hit the market better.
- Or maybe they have a bigger team, taking away our customers, but losing money for now.
- Or maybe ...

## Final thoughts

Software Development is complex. It is not pure math with a clear correct answer. There are a lot of building bricks you can invest into and it will never be clear what will be the exact outcome of which investment. So you will always have to make best effort trade offs.

Code quality is an important building brick as it helps to ship new features regularly. But overall **I believe the limiting resource of a developer is time. We haven't enough time to invest into everything.** 

  E.g. we could improve code quality reducing average feature cycle time from two to one weeks. That would increase future productivity about 50%.
  
  We could also introduce some user data evaluation. If the insights of those enables us to make every second instead of every fourth feature hit, we have increased productivity about 50% as well. In addition that also helps the code quality, as we have to maintain less features.

So the existing bad source code might have been a reasonable trade off of a smart team. Regardless it is up to us to find benefitting trade offs now, whether or not the previous trade offs were smart.
