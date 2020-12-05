![JavaScript awkward penguin](./JavaScriptAwkwardPenguin.jpg)

Why are many people reserved about JavaScript? And why is JavaScript nevertheless an excellent choice for your work to get done? This blog is split into the following three parts:

- Part 1: Annoying past of JavaScript
- Part 2: Why JavaScript is definitely a cool thing
- Part 3: My personal language challenge _C_ vs _Java_ vs _Python_ vs _JavaScript_

**TL;DR:** In the beginning JavaScript development was driven proprietary and on purpose not compatible to competitors.

## Part 1: Annoying past of JavaScript

Starting with the year 1995 the internet was commercialized. Graphical user interfaces (aka browsers) made information and services from server accessible also for non technicians. A lot of money could be made through installation, support, third party licensing and custom feature implementation for those servers and browsers. With increasing popularity and user accesses advertisement in the browser became a source of revenue as well.<sup>[1](#1), [2](#2)</sup>

At first browsers offered static content only. As that lacked usability and customization for users, a need for a programming language within browsers aroused. In the mid 1995 Brendan Eich was hired by Netscape with the promise, he could implement a Scheme based language for Netscape's browser. But shortly before that Netscape also cooperated with Sun Microsystems to integrate Java into its browser. To convince his superior to bet on a scripting language, Eich created MOCHA within 10 days. As a marketing trick MOCHA was renamed to JavaScript for associating it with trendy Java. Eich described the goal of JavaScript as followed:

> We aimed to provide a “glue language” for the Web designers and part time programmers who were building Web content from components such as images, plugins, and Java applets. We saw Java as the “component language” used by higher-priced programmers, where the glue programmers — the Web page designers — would assemble components and automate their interactions using JS.<sup>[3](#3)</sup>

So in its birth JavaScript was a quick and dirty propriety invention by Netscape.

Although JavaScript was created quick and dirty, it was a huge success and competitive advantage for Netscape. To keep up Microsoft reversed engineered JavaScript in JScript for its Internet Explorer. Other competitive proprietary solution to make the browser more dynamic aroused like VBScript, Silverlight, Flash, ... 

I think everyone has heard about this competition as [browser war](https://www.google.com/search?q=browser+war). Basically JavaScript was an important weapon in this war. I like to describe the war with the following kind of repeating circle:

![circle-of-browser-war](circle-of-browser-war.png)

At the top we have a player who thinks is winning. He develops non standard language feature on purpose, as he thinks that this adds cool features and increases the vendor lock-in, which hardens its market position. But then they realise to the right, that user gets frustrated due to the many different user experiences. In addition developing becomes more and more slower, expensive and frustrating. Therefore all competitors agree to work together on some standards, provisioned by the W3C and the ECMA organization. But making a standard is a slow process. Implementing some of the standards before finalization and adding cool features on top of them, promise a competitive advantage. Sounds smarts but leads us back to the top of the circle. Luckily on each circle also some cool finalized and agreed on standardized features managed the jump out of the circle. 

To put it in a nutshell, JavaScript needed some circles to evolve from its early quick and dirty proprietary origin, to a mature open standard programming language, which it has become today. From a developer point of view, the different phases keeping backwards compatibility in mind is a lot to keep up with. [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) is a lovely article caricaturing the frustration of it.

-------------           
    - Node.js (because JS was the worst language)
    - Refactoring Vorwort "not admire to JS"


- Never bet against JS quote
- With WebAssembly no docker needed



"The appeal of Node.js for JavaScript programmers goes beyond being able to program in a familiar language; you get to use the same language on both client and server. That means you can share more code (e.g., for validating data) and use techniques such as isomorphic JavaScript. Isomorphic JavaScript is about assembling web pages on either client or server, with numerous benefits: pages can be rendered on the server for faster initial display, SEO, and running on browsers that either don’t support JavaScript or a version that is too old. But they can also be updated on the client, resulting in a more responsive user interface." ( http://speakingjs.com)

- <id name="1">(1) http://www.ecommerce-digest.com/history-of-the-internet.html, December 2020</id>
- <id name="2">(2) https://www.quora.com/How-did-Netscape-Navigator-make-money, December 2020</id>
- <id name="3">(3) Brendan Eich in interview “The A–Z of Programming Languages: JavaScript,” Computerworld, July 30, 2008</id>