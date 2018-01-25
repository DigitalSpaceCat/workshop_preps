// So far level 1 and 2 provided you about how to create components.
// There are some situations where you may need more timely controlling over a component. 
// Such as, Let's say you want to build your custom deadline which changes the deadline text after you submit new deadline. 

// To enable this, what you can do is utilising component lifecycle events. 
// By mounting them, you can play some logic between components. 

//3.1 Briefly speaking, the lifecycle events in react fall to categories below. 

//- Mounting events - This happens when a component is attached to a DOM node. 
//- Updating events - This happens when a component is updated as a result of new values of its properties or state
//- Unmounting events - This happens when a component is detached from the DOM


// We can set up React component triggered at controlled moments depending on what a component is up to. 
// Lifecycle events allow you to implement custom logic. This will enhance you to more control over what components do. 

// This course has been roughly exposing you about the lifecycle of React. 
// The lifecycle concent also applies to Vue, so if you also intend to learn about Vue, this will give you a common sense about it.

// Okay. Let me explain more about the event cycles in React. 

// Constructor () happens when an element is created. 
// The constructor is not within React' lifecycle term, but we should understand how the default constructor's event cycle. 
// This lets you set the default properties and initial state.

// Mounting

// - componentWillMount() happens before mounting to the DOM
// - componentDidMount() happens after mounting to the DOM

// Updating
// - componentWillRecieveProps() happens as the component receives properties. 
// - shouldComponentUpdate() lets you optimise the component's re-rendering. 
// - componentWillUpdate() happens just before the component is updated
// - componentDidUpdate() happens just after the component updated. 

// Unmounting
// - componentWillUnmount() lets you unbind and detach any event listeners or do other cleanup work before the component is unmounted. 



// So far this is how our clock countdown done. Hope you get the rough picture about a very basic React. 
// Below is the result codepen after applying all the codes in a one place.
//https://codepen.io/space-cat/full/oprvVp