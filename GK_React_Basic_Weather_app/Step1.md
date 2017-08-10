# How React works?
### Let's bring 'Hello World' in a React way

I know, I know. This is a very typical way. You may be like 'Geh. Why all the beginner workshop starting from this?'
This, however, is quite straight forward to make the very first component.

Remember - React always consists of two libraries: React and ReactDOM.
React - allows you to create elements and we render them with ReactDOM.

Here is the code:

https://jsbin.com/tuyarod/1/edit?html,js

I render the element within ReactDOM. Inside of this render function, the React create a element.
After that we target the "container" from html.
This means that your react element will be rendered into the #container div.

Within the ReactDOM, you have to put two arguments.
React.createElement() and document.getElementById(), which is where you target to link.


####React.createElement()

This takes ReactElement as the first argument. Other properties in an object is into the second argument.

React.createElement('input');
// -> <input></input>
React.createElement('input', { type: 'checkbox' });
// -> <input type="checkbox"></input>
React.createElement('input', { className: 'heading', type: 'checkbox' });
// -> <input class="heading" type="checkbox"></input>

* Please note that React does use className instead of class. If you forget this, the react library wouldn't compile your code!

### What is Components?






// NPM command you should know at least.
// What is JSX?

// Why we have to use className? ** The custom rules of React

// Install React Dev tool

// Syntax flags you shouldn't do!

// What is props and state?
// << Have to draw some doodles to explain. The details of processes will be led on Step2

// If the drawing explanation is going to be, plug the blog links of mine.






