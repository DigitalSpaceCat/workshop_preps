

# The main kata of this workshop
## Understand prop and state for your ongoing React Journey

### What is prop and when we have to use it?

The best tutorial you can find is FaceBook API. 
This website has everything that you seek for. 
https://facebook.github.io/react/tutorial/tutorial.html#overview


http://jsbin.com/matisug/1/edit?css,js,output

In this js bin, we created CommentBox component. We will use Comment component to pass some props from the CommentBox into this. 
Within the CommentBox, we included child component which is Comment. Then we passed properties from CommentBox to Comment. 
In this case, the CommentBox is a parent component and Comment is a child component. 
In React, we only can pass props from parent to child. Vise versa is not what React is for. 

Plus, the child component cannot update the property from parent components. It can only read the property and return the value based on it. 

This is the main difference between prop and state in React. Don't worry if you don't get it now. Once you understand what state is, 
you will understand why they are different and need to use them separately. 


### Handling data fetches with state

As we saw, prop is mainly about tossing data object to return and render. That is why we only on read prop but not able to update. 
What if you want to update data and update values on your end based on your event controls? This is where the state is for. 

Indirectly, by updating each component's state and letting React handle updates to the DOM, we modify virtual DOM. 


//
When writing a component in React that contains data that changes over time, it is considered a best practice to store this data in the component’s state.

Check the option that shows how to properly access a component's state:

Accessing the this.state object

In order to create the initial state for a component, we must declare the property this.state as an object in the class 
constructor function.
 
//

//
1.The first step toward implementing this feature is to set an initial state to the Comment component.
Let's start by declaring a constructor() function on the Comment component. 
Remember, from inside the constructor() we must call super() as the very first thing.

1.We declare the constructor() function within the Comment class and call super().

2.Next, let's declare an Initial State to the Comment component by assigning it as an empty object.
We declare the Initial State by setting this.state as an empty object.

3.Now, let's add a property to the newly created state object and call it isAbusive. Then let's set it as false by default.
We declare the isAbusive state property as false:
//

//
Now it's time to conditionally show or hide abusive comments based on the component state.

1.Let's declare a new variable called commentBody in the render() method of the Comment component. 
Don't worry about setting an initial value, just declare the variable using let.

We added the commentBody variable to the render() method:

class Comment extends React.Component {
  render() {
    let commentBody;
  }
}
2.
After the variable declaration, add an if statement to check whether the isAbusive property of the state object has a falsy value. 
If isAbusive is falsy, then assign the body prop to the commentBody variable.
Let's add an if statement right after the variable declaration, and assign this.props.body to the variable if the isAbusive state is falsy.

class Comment extends React.Component {
  render() {
    let commentBody;
    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    }
  }
}

3. Add an else clause to our if statement where we assign commentBody as an <em> element containing the text: Content marked as abusive
The else clause contains the other variable assignment:
class Comment extends React.Component {
  render() {
    let commentBody;
    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }
  }
}

4.Within <p> tag with class comment-body, let's replace the call for this.props.body with the commentBody variable.
class CommentBox extends React.Component {
  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        {this._getPopularMessage(comments.length)}
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, don't miss out!</div>
       );
    }
  }
  
  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
    ];

    return commentList.map((comment) => {
      return (<Comment
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />);
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
}

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;

    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment">
        
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">`
          {commentBody}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
          <a href="#">Report as Abuse</a>
        </div>
      </div>
    );
  }
}

//

//

Let's add the final piece we're missing to allow users to mark comments as abusive in our app: making the "Report as Abuse" button interactive.
1.Let's declare a new method in the Comment component called _toggleAbuse(). Then let's make it receive one argument called event and call event.preventDefault() to prevent the page from being reloaded when the method is called.

We added the _toggleAbuse() method to Comment:

class Comment extends React.Component {
  _toggleAbuse(event) {
    event.preventDefault();
  }
}

2.Next, let's toggle the isAbusive state. To toggle it we'll set isAbusive to true if it's false; and set it to false if it's true.

The isAbusive state will get toggled every time the method is called:

class Comment extends React.Component {
  _toggleAbuse(event) {
    event.preventDefault();
    
    this.setState({
      isAbusive: !this.state.isAbusive
    });
  }
}

3. Now let's add an onClick handler to the "Report as Abuse" button that calls the _toggleAbuse method. Tip: don't forget to bind() the method to the current context when you pass it to the event handler. You do not need to pass event to the call to bind(), only the current context ( this).

class CommentBox extends React.Component {

  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        {this._getPopularMessage(comments.length)}
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, don't miss out!</div>
       );
    }
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
    ];

    return commentList.map((comment) => {
      return (<Comment
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />);
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
}

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;

    if (this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment">
        
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {commentBody}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
          <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
        </div>
      </div>
    );
  }

  _toggleAbuse(event) {
    event.preventDefault();

    this.setState({
      isAbusive: !this.state.isAbusive
    });
  }
}
//


// Remember. React is component oriented library. Thinking how you will wrap up your components effectively.


How to use open weather map api

https://www.youtube.com/watch?v=53AoDB7vcbU