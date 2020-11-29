# Why JavaScript is my personal language of choice - Part 1

![JavaScript awkward penguin](./JavaScriptAwkwardPenguin.jpg)

When I talk with friends about programming languages, I often hear things like _"yuck, JavaScript - how can you really like it?"_. I wonder why so many people have negative feelings about JavaScript, because yeah, I really like it. So the following is some reasoning about JavaScript. It is split into the following three parts and in the end JavaScript is still my language of choice.

- Part 1: "Maybe not 100% optimal" past of JavaScript
- Part 2: Why JavaScript is definitely a cool thing
- Part 3: My personal language challenge _C_ vs _Java_ vs _Python_ vs _JavaScript_

## Part 1: "Maybe not 100% optimal" past of JavaScript

Starting with the year 1995 the internet was commercialized. Graphical user interfaces (browsers) made information and services from server available everywhere even for non technicians. A lot of money could be made through installation, support and custom feature implementation for those servers and browsers. Third party licencing of browsers ( Netscape in IBM xxx money?). With increasing popularity and user accesses advertisements became a source of revenue as well. (http://www.ecommerce-digest.com/history-of-the-internet.html, https://www.quora.com/How-did-Netscape-Navigator-make-money)

As the until then only static content of the browsers lacked in usability and customization for users, a need for a programming language within browsers aroused. In the mid 1995 Brendan Eich was hired by Netscape with the promise he could implement a Scheme based language for Netscape's browser. But shortly before that Netscape also cooperated with Sun Microsystems to integrate Java into its browser. To convince his superior to bet on a scripting language, Eich created MOCHA within 10 days. As a marketing trick MOCHA was renamed to JavaScript to associate to successful Java. As seen in the following quote of Eich, the goal of JavaScript (JS) was not to replace Java, but to be an easy to use programming language, so that also none "higher-priced programmers" could utilise it and provide value. 

> We aimed to provide a “glue language” for the Web designers and part time programmers who were building Web content from components such as images, plugins, and Java applets. We saw Java as the “component language” used by higher-priced programmers, where the glue programmers—the Web page designers—would assemble components and automate their interactions using JS. (Brendan Eich in interview “The A–Z of Programming Languages: JavaScript,” Computerworld, July 30, 2008)

So in its birth JavaScript was a propriety invention by Netscape. Other competitive proprietary solution to make the browser more dynamic aroused like Java Applets, VBScript, Flash and Silverlight (http://www.observationalhazard.com/2018/06/history-of-web-programming.html).

The programming language for browsers was an import part of the browser wars, which from developer perspective I like to describe with the following circle:


- Browser War "circle" // 1996 Microsoft IE JScript, lets put Flash, Silverlight aside, Firefox, chrome, ...
  - vender lock in nänänä -> diversity hinders developments -> please give us standards - slow but awesome ->
  - 3 Examples
    - css art
    - [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
    - not == transitive
- Node.js (because JS was the worst language)

- standards, package systems (meaning like amd), build tools (webpack), how to import, ECMA script

- Refactoring Vorwort "not admire to JS"

- Never bet against JS quote
- With WebAssembly no docker needed


JS is multi paradigm
"Web 2.0" applications (such as Flickr, Gmail, etc.)
Yearly ECMAScript releases
ecommerce revenue over years

", Netscape collaborated with hardware and software company Sun (since bought by Oracle) to include its more static programming language, Java, in Navigator" http://speakingjs.com/es5/ch04.html

We aimed to provide a “glue language” for the Web designers and part time programmers who were building Web content from components such as images, plugins, and Java applets. We saw Java as the “component language” used by higher-priced programmers, where the glue programmers—the Web page designers—would assemble components and automate their interactions using [a scripting language].

"The appeal of Node.js for JavaScript programmers goes beyond being able to program in a familiar language; you get to use the same language on both client and server. That means you can share more code (e.g., for validating data) and use techniques such as isomorphic JavaScript. Isomorphic JavaScript is about assembling web pages on either client or server, with numerous benefits: pages can be rendered on the server for faster initial display, SEO, and running on browsers that either don’t support JavaScript or a version that is too old. But they can also be updated on the client, resulting in a more responsive user interface." ( http://speakingjs.com)

