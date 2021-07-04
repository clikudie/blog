---
layout: post
description: Callbacks, what they are and when to use them.
categories: [markdown]
title: Callbacks Explained
---

## Callbacks explained

Most of the time, the code we write is synchronous. It makes it easier to logically step through and understand how our code is executed. In practice however, there are many scenarios where we'd want our code to execute in an asynchronous manner.

In situations like making API calls or accessing a database, it'll be in our best interest to make asynchronous calls with callbacks. So what exactly is a callback function?

> A callback function is a function passed as an argument to another function. That makes the the function that a callback is passed to a higher-order function.

Callback functions are particularly common in JavaScript because functions are considered as first class objects. As such, actions that can performed on objects such as passing them as arguments or assigning them to variables can be done to functions. Let's take a look a simple callback function in a synchronous code.

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

We can also pass an anonymous function to close() as our callback.

> Anonymous functions are not bound by an identifier and they are mostly passed to higher order functions. We can rewrite the above code as:

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

In the sample code, on closing a program, we pass two functions `exitCode()` and `logByeStatement()` to the `close()` function to be executed. The two functions are our callback functions. Notice how we pass them in close() without the parentheses. This ensures that our functions are not fired immediately. Also, the `logByeStatement` function takes in a parameter but we do not pass that in until we call the function in close. The above example does not fully show why we need callbacks as this code can simply be written and executed synchronously.

Callbacks come in handy when we need to execute some block of code asynchronously. In the example below, we'll fake a call to server that has a ten-second latency. In such situation, you do not want your UI and users to be stuck for a long time while waiting for a response from the server. We'll pass a callback function which is fired when we eventually have some results from the server while we continue to execute the rest of our code normally.

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

In this example, we are faking getting a billion records, albeit just a string which has a latency of 10 seconds. After we fetch all the records, we log the results to the console. Since we can't afford to to just sit and wait for ten seconds before processing the results, we pass a function that will process the results when we get them while we continue the execution of the rest of the code. This is where callbacks are the most useful.
