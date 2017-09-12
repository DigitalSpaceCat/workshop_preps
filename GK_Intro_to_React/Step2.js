
// Understand prop and state for your ongoing React Journey
// The best tutorial you can find is FaceBook API. 
// This website has everything that you seek for. 
// https://facebook.github.io/react/tutorial/tutorial.html#overview

// Remember. React is component oriented library. Thinking how you will wrap up your components effectively.

// In this section, We will make the countdown chant. What is this? It is literally counting down view until Christmas!
// Reference 1: https://medium.com/@khwsc1/creating-timer-app-with-react-js-part-1-401d4af6e4fb
// Reference 2: http://www.kristin-baumann.com/tech/react-countdown/
// ## 2.1 What is props and when we have to use it?
// What we learn this first section, you will briefly have an idea of props. 
// Comparing to state, props are faily easy to understand.
// Now we will talk about props. Every component receives a list of attributes, just like HTML elements. 
// In React, this list is called props. With a component, you can name it anything.

// We will use App component to pass some props from the Clock into this. 
// Within the App, we included child component which is Clock. Then we passed properties from Clock to App. 
// In this case, the App is a parent component and Clock is a child component. 
// In React, we only can pass props from parent to child. Vise versa is not what React is for. 

// Plus, the child component cannot update the property from parent components. It can only read the property and return the value based on it. 

// This is the main difference between prop and state in React. Don't worry if you don't get it now. Once you understand what state is, 
// you will understand why they are different and need to use them separately. 

// Let's make parent component "App" and child component "Clock". It is okay if you are stuck. 
// Mentors will help you. Fill blankies and paste codes into your JS fiddle bin. 
// Make sure that you changed your javascript mode to "Babel+JSX"

// 1. Copy and paste this App component while putting correct code into blankies (_______)
// _______ App extends _______.Component {
//     render() {
//       ________ (
//         <div className="App">
//           <div className="App-title">Countdown to December 25, 2017. To meet Santa on Christmas, Yay!</div>
//           <div>
//               <________ days="14" hours="30" minutes="15" seconds="20"/>
//           </div>
//           <div>
//               <input placeholder="new date"/>
//               <button>Submit</button>
//           </div>
//         </div>
//       );
//     }
//   }

// 2. Same as App component, complete child component "Clock" too. 

// ________ Clock extends ________.Component {
//     ________() {
//       return (
//         <div>
//           <div className="Clock-days">{this.______.______} days</div>
//           <div className="Clock-hours">{this.________._______} hours</div>
//           <div className="Clock-minutes">{this._________._______} minutes</div>
//           <div className="Clock-seconds">{this.________.________} seconds</div>
//         </div>
//       )
//     }
//   }

// 3. Don't forget to implement your component into the view. 

// ReactDOM.render(<_______ />, document.getElementById('root'));
// Congrats! Your component with props is completed! 

// If you still have a problem to see the result, refer to this fiddle
// https://jsfiddle.net/mrsmaveric/7smsqv3h/2/


// ## 2.2 Handling data fetches with state

// Unlike state, props are mainly about tossing data object to return and render. That is why we only on read props but not able to update. 
// What if you want to update data and update values on your end based on your event controls? 
// This is where the state is for. 

// Indirectly, by updating each component's state and letting React handle updates to the DOM, we modify virtual DOM. 
// 
// Implementing this feature is to set an initial state to the Comment component.
// Let's start by declaring a constructor() function on the App component. 
// Remember, from inside the constructor() we must call super() as the very first thing.

// To practice how state works, we will change our previous code. Comment out Clock component for now since we won't use that for while. 
// We will bring it back again.

// In side of your App component, put constructor.

// constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

// Next, let's declare an Initial State to the App component by assigning it as an empty object.
// We declare the Initial State by setting this.state as an empty object.

// constructor(props) {
//     super(props);
//     this.state = {
        // deadline: 'December 25, 2017',
        // newDeadline: ''
//     }
//   }


// When writing a component in React that contains data that changes over time, it is considered a best practice to store this data in the component’s state.
// How to properly access a component's state?

// Answer is "Accessing the this.state object"

// In order to create the initial state for a component, 
// we must declare the property this.state as an object in the class constructor function.

// Now it's time to conditionally change our deadline(which is Christmas!) based on the component state.
// We have to make a method to change our object inside of the initial state. How? by setting new value into our state.
// This is setState() function. By calling particular method, we are going to call setState() function. 

// put the methoud below into the proper spot. 

// changeDeadline() {
//     this.setState();
// }

// You must never change your state directly. 
// Bad example here => this.state.deadline = "September 25, 2018" -> never do that. 

// Instead you have to wrapup the object you want to change inside of setState().

// changeDeadline() {
//     this.setState({
        //  deadline: 'December 25, 2018'
//     });
// }

// Then, we have to call the method by event listener on rendered view. 
// When user clicks button, It will trigger our changeDeadline() method and that will change our state objects.

// 1. Copy and paste this App component while putting correct code into blankies (_______)
// Also, change some of codes referring the explanation of state above. Leave the clock component as commented out yet. We won't use it now. 

// _______ App extends _______.Component {
//     render() {
//       ________ (
//         <div className="App">
    //     <div className="App-title">Countdown to December 25, 2017</div>
    //     <div>
    //         <div>14 days</div>
    //         <div>30 hours</div>
    //         <div>15 minutes</div>
    //         <div>20 seconds</div>
    //     </div>
    //     <div>
    //         <input placeholder="new date"/>
    //         <button>Submit</button>
    //     </div>
    //   </div>
//       );
//     }
//   }

// ReactDOM.render(<_______ />, document.getElementById('root'));
// Congrats! You changed your state successfully!

// So far this is one direction way to change your state. 
// Hey, what happened to input field? Wasn't it supposed to put the dynamic date? 
// That is exactly what we will go soon. Let's put new object inside of setState. Since the input field initally empty, we will put empty string. 


// changeDeadline() {
//     this.setState({
        //  deadline: 'December 25, 2018'
        //  typedDeadline: ''
//     });
// }







