/*************** Introduction to JavaScript **********************/
/*

Javascript is just a standard, more formally known as ECMAScript. It can be implemented in any language,
just like any standard. Chrome's Javascript engine, V8, is written in C++. Firefox's Javascript engine,
SpiderMonkey (and now TraceMonkey) is also written in C++.

********************  Installation   ******************************:
JavaScript doesn't require special installation. All browsers can execute Javascript code. However Chrome, FireFox &
Microsoft Edge has some of the best developer tools/extensions/plugins.

JavaScript is universally supported by all IDEs. Here Microsoft Visual Studio Code or VSCode is our IDE of Choice.

JavaScript was preferred the language of choice for front end. But with the advent of NodeJS, Server Side programming
is also possible with JavaScript. This means both Client Side & Server Side programming is possible with
Single Programming Language.

With React Native, even native Mobile Apps for iOS & Android is possible with JavaScript.

For this JavaScript Grammer, all the results are intended to be viewed within the IDE/Code Editor Debug Console.

Before setting up run & debug, install Node JS from https://nodejs.org/en/download/ . Because Node JS framework
enables server side programming with JavaScript, we can run & debug our code without a browser.

In the VS Code, From the top menu bar, Choose Run, Open Configurations. This will create a hidden folder .vscode and
with in that 'launch.json' will be created. Make sure that file has the following,
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/grammer.js" //Here grammer.js is the file name.

*/
console.log('Hello from JavaScript Intro.js');

/*
JavaScript file has extension '.js'.
Usually Javascript is embedded inside a HTML file and a browser is required to run it. Browser's developer tool
will have console to view the output. JS can manipulate DOM of the browser.

JavaScript can also be executed without browser if NodeJS is installed. in VSCode, NodeJS is installed and
Debug Console can display the output. To execute a JS code, lanuch.json file will be created automatically
by VS and it allows various configurations.
 
 */