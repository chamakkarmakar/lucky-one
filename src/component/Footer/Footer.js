import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2>How does React work?</h2>
            <p>React is an open-source component-based Javascript Library. This library helps to create the view layer of the application. A React Application is made up of multiple components that are responsible for generating reusable HTML. Those components are written using a domain-specific language named JSX which also allows for writing the components using HTML, mixing with JS events. React internally convert the components into virtual DOM and finally output the HTML. Most of the Processing was done inside the virtual DOM. The Virtual DOM changes the actual DOM elements instead of reloading the dom every time which helps the application to REACT faster!</p>
            <h2>How does useState() works?</h2>
            <p>In a component, the states are managed by a method named useState. The useState method is meant to manage some state data which can be a single number, an array or an object. The useState requires an argument for its initial state before returning the present state and also a function that will update the state. The useState method is called each time the component renders. Each of the render returns a value and a setter function for that value, which the program can call to change the state of that specific state value.</p>
        </div>
    );
};

export default Footer;