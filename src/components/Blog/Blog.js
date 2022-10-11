import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <div className='qa'>
                <h3>Question: What is the pupose of react router?</h3>
                <p>Answer: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='qa'>
                <h3>Question: How does context API works?</h3>
                <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='qa'>
                <h3>Question: Give description about useRef?</h3>
                <p>Answer: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object.</p>
            </div>
        </div>
    );
};

export default Blog;