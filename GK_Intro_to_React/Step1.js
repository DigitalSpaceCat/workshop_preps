// ** This markup needs to be updated.

// # How React works?
// ### Let's bring 'Hello World' in a React way

// I know, I know. This is a very typical way. You may be like 'Geh. Why all the beginner workshop starting from this?'
// This, however, is quite straight forward to make the very first component.

// Remember - React always consists of two libraries: React and ReactDOM.
// React - allows you to create elements and we render them with ReactDOM.

// Here is the code:

// https://jsfiddle.net/mrsmaveric/2w6o710u/11/

// **We will skip all the complete setups. Instead, we will JSFiddle for this course. In this way, we can save our time and just jump into learning React. 

// I render the element within ReactDOM. Inside of this render function, the React create a element.
// After that we target the "container" from html.
// This means that your react element will be rendered into the #container div.

// Within the ReactDOM, you have to put two arguments.
// React.createElement() and document.getElementById(), which is where you target to link.


// ####React.createElement()

// This takes ReactElement as the first argument. Other properties in an object is into the second argument.
// In most cases developers using React will favor JSX and use it to create React. 

// Please note that React does use className instead of class. If you forget this, the react library wouldn't compile your code!_

// ### What is Components?

// Thinking this way, Component is a block you can build the UIs. Like LEGO, you can assemble those blocks independently.
// Even further, you can reuse this. The structure and rendering process is like JS function. Therefore, Components accept inputs (called "props")

// https://jsfiddle.net/mrsmaveric/wqkg7dq5/

// What is in this component? We write a function that returns a ReactElement and then pass it to inside of React.createElement as an argument.

// Look at this example. 

// https://jsfiddle.net/mrsmaveric/73p79c65/

// We made a react class called "Wrapper". This Wrapper return a heading "Hello From React".
// And then, we stored our target element into [let target]

// Once all elements are ready, we render our component class name. We put Wrapper as our argument and put target as a second argument to note where to be rendered. 
// Congratulation! You successfully created your first react component!

// If you stuck, you are most welcomed to read the official site.
// https://facebook.github.io/react/docs/components-and-props.html

// This is the best material helping you understand React better.


// ### What is JSX?

// From your component, you see render() methods in your React component. 
// This mark up is called JSX. Like this: 

// [class RobotBox extends React.Component {
//   render() {
//     return (
//       <div>
      
//       </div>
//     );
//   }
// }]

// Nothing much you do need to worry about. Just make sure that any html element should be wrapped with <div>.
// Otherwise, you will see compiling error. 

// What's interesting in JSX? It allows you to put variables dynamically into your HTML element. 
// If you studied Vue.js or Angular, you would recognise similar curly brackets within markup syntax. 

// https://jsfiddle.net/mrsmaveric/au6Lkaox/1/

// In this JS Bin, We declared PI within const pi. By passing this variable into the curly bracket, you can print the pi within the rendered HTML elements. 
// If you look at the this JS bin, you would also reckon that the css class declaration is slightly different. 

// Instead of "class", the declaration should be "className". This is React convention to follow. 

// ### How to iterate key items within JSX?

// Using the map() method on the topics array, you can enlist each of items into the list. 
// In the jsbin, the map method accesses to the topics array and grabs each of item to iterate. 

// As you see, the key is allocated to each of items and rendered into curly braces. 

// https://jsfiddle.net/mrsmaveric/dLgd1bcf/

// Pretty easy, hur? 



