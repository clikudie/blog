---
layout: post
description: Callbacks, what they are and when to use them.
categories: [markdown]
title: Callbacks Explained
---

## Callbacks explained

Most of the time, the code we write is synchronous. Synchronous code is easy to logically step through and understand. In practice however, there are many scenarios where we'd want our code to execute in an asynchronous manner, for instance making API calls and accessing databases.

In such situations, it is best to make asynchronous calls with callbacks to process the results. So, what exactly is a callback function?

> A callback function is a function passed as an argument to another function. 
> A function that accepts a callback function as an argument is a higher-order function.

Callback functions are particularly common in JavaScript because functions are considered as first-class objects. As such, actions performed on objects, such as passing them as arguments or assigning them to variables, can be done to functions. Let's look at a simple callback function in a synchronous code.

```javascript
function close(byeStatement, byeStatementCb, exitCodeCb) {
  byeStatementCb(byeStatement);
  exitCodeCb();
}

function exitCode() {
  console.log("Code exited!");
}

function logByeStatement(statement) {
  console.log(statement);
}

close("Goodnight buddy!", logByeStatement, exitCode);
```

We can also pass an anonymous function to `close()` as our callback.

> An anonymous function is not bound by an identifier and they are mostly passed to higher order functions. We can rewrite the above code as:

```javascript
close("Goodnight buddy!", logByeStatement, function () {
  console.log("Code exited!");
});
```

or using arrow functions:

```javascript
close("Goodnight buddy!", logByeStatement, () => {
  console.log("Code exited!");
});
```

In the sample code, on closing a program, we pass two functions `exitCode()` and `logByeStatement()` to the `close()` function to be executed. The two functions are our callback functions. Notice how we pass them in `close()` without the parentheses. This ensures that our functions are not fired immediately. Also, the `logByeStatement` function takes in a parameter but we do not pass that in until we call the function in `close()`. The above example does not fully show why we need callbacks as this code can simply be written and executed synchronously.

Callbacks come in handy when we need to execute some block of code asynchronously. In the example below, we'll fake a call to a server that has a ten-second latency. In such situations, you do not want your UI and users stuck for a long time while waiting for a response from the server. We'll pass a callback function which is fired when we eventually have some results from the server, at the same time executing the rest of our code normally.

```javascript
function getBillionRecords(cb) {
  setTimeout(function () {
    var record = "We got billions";
    cb(record);
  }, 10000);
}

function printBillionRecords(records) {
  console.log(records);
}

getBillionRecords(printBillionRecords);
// some more code to execute
```

In this example, we are faking getting a billion records, albeit just a string which has a latency of 10 seconds. After we fetch all the records, we log the results to the console. Since we can't afford to sit and wait for ten seconds before processing the results, we pass a function that processes the results when we get them, while the rest of the code is executed. This is where callbacks are the most useful.
