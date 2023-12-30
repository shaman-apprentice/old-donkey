# ADR exemplary applied to the choice of frontend framework

What the heck is an ADR? Do we really need to deal with another buzz word? Why should we create yet a further document?

## Motivation 

Let's consider the following fictitious and simplified scenario as motivation: After 15 years a customer wants to have his desktop application available as web page. This is an huge project. Even a new dev is hired for this and upcoming web projects. There is a kickoff with the customers dev and PO, as well as sales and the new dev from your company. Among others, there is this little dialog:

<pre>
Customer PO: In which framework will you implement the web page?
Sales: Angular, right?
New dev: Yes.
Customer's Dev: Really? But Angular is old and &ltinsert your favorite framework&gt is much better nowadays!
Sales: Yeah, but Angular is a great fit for our needs, because *he looks intensively at the new dev
New dev: Uhm, we already have two internal application written in Angular, right? So we will use Angular for this project as well.
</pre>

Probably no one is really satisfied with this answer. The new dev asks his colleagues afterwards about the choice of Angular:

<pre>
Colleague 1: I don't care about the Framework, just as long as you get the job done. And using another framework than the one we already use needs probably time. So I don't think it is feasible to use another one.
Colleague 2: We have always used Angular. But I am not too happy with it and I would love to try out another, newer framework.
Colleague 3: I don't like frontend development in general. I don't want to work with Angular and I don't know why we have chosen it. The guy who picked it, has already left the company.
</pre>

All this **feels** frustrating. Although there weren't any real arguments against Angular so far. Let's make an ADR (Architectural Decision Record) and see how it helps us.

## ADR 2023-12-30: Choice of frontend framework

**Status: Accepted**<br/>
**Decision: We will use [Angular](#angular)**

### Context

We need to chose a frontend framework for the new project. Further web projects are expected in near future. All those web projects will be long-lived products, meaning we expect to add features and maintain them for the next 10 years at least.

Our team has already developed two small to medium sized Angular applications.

### Decision's reasoning and consequences

Angular is a modern frontend framework with stability and long-time support at its core. We already have Angular know-how in our team. It is easy to extract code from our existing Angular applications into a shared library for code reuse in new projects. The existing applications will likely also benefit from the development of new code for the new project, which can be done in a shared library as well.

That React has more third-party libraries available is not a concern for us. Our customers have very specific requirements and we expect that we have to develope most components by ourselves for maximal customization.

We are excited about [Angular’s upcoming renaissance](https://blog.angular.io/introducing-angular-v17-4d7033312e4b). If the renaissance will defend [Angular's current second place as most used frontend framework](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/) is too early to tell. However, based on the long road of Angular so far, we bet that Angular will continue to release new features, which will be easy to integrate in our code and keep our web development competitive for a long time.

We accept a high learning curve for new colleagues, which can be neglected compared to overall project time.

### Options

#### Angular

Angular is around since 2010 and new versions are released regularly. It is OpenSource although it is developed by Alpha. Backwards compatibility / upgradeability were always an important goal of Angular. It has a big community and is adopted by many big companies. Its two-way data binding and dependency injection model provide good modularity and testability.

Regarding interest by Developers, Angular wasn't the most famous in [2022](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/). It has a high learning curve for beginners. Angular 17 tackles a lot of recent critics. Angular's default testing framework Karma was deprecated and there is no stable official replacement yet.

#### React

React is around since 2013 and new versions are released regularly. It is OpenSource although it is developed by Meta. It has a huge community and probably the most third party libraries of all frontend frameworks. Its JSX based syntax is easy to learn. As Facebook is build upon React, it is obvious possible to build a large long-lived application with it.

Besides a component-based approach, architectural decision are left to developers. State has to live within the React lifecycle, which can make separation of logic harder. The hook based API is elegant to write but can become challenging to debug and maintain. Backwards compatibility between versions is not a major concern.

#### Other frameworks

We are aware that there are many other frameworks such as Vue, Svelte, Qwik, Preact, LitElement, ... Each has its own advantages and disadvantages. We don't want to invest much time in them for now, because: First, we believe that every modern frontend framework has the features we need for our projects. And secondly, long-term support is very important to us. Regarding the second, React and Angular are the longest available modern frontend frameworks and therefore the most interesting fits on first sight.

## What have we gained through above ADR?

So we invested time in creating the ADR and added another document to our pile of documents somewhere. Let's evaluate the return to make sure this was a good investment.

An ADR makes a decision explicit. Furthermore, it gives everyone the opportunity to contribute, as it is a public document forged by or at least accepted by the full team. The dialogs from the motivation section will not bother much. The "feel" that maybe it wasn't a good choice, becomes a well informed decision, that everyone can look up. 

It also helps with future evaluation. When the expected advantages don't materialize, or the context changes, you can do a new ADR superseding the previous one, based on your learnings.

## Two final things to note

First, the options were obviously not complete nor a too deep analysis. The question of how much time you should invest is difficult to answer and depends on the context. E.g. frontend technologies are rapidly developing. New hyped frameworks occur frequently. If you spent too much time in your research, chances are high, that a new framework was published in the meantime. Jokes aside, depending on the context, expected gain and your resources, I think it is OK to spent a view hours for an ADR or even a full sprint.

Second, when searching the internet, there are tons of different templates for ADRs. Some state ADRs should be in plain texts. Other prefer tables and yet others bullet points. I think it is nice to have a common template, as it will help you to read them faster - just stick with a format that suits you.

## Interesting Sources

- https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- https://www.ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html
- https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/
- https://survey.stackoverflow.co/2023/#overview
- https://www.imaginarycloud.com/blog/best-frontend-frameworks/
