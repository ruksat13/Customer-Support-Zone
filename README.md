# Customer Support Zone 🎫

A React-based Customer Support ticket management system.

## 🔗 Live Link
[Customer Support Zone](#)

## Features
- View customer tickets
- Add tickets to Task Status
- Mark tickets as resolved
- Toast notifications
- Mobile responsive

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX makes it easier to write and visualize the component structure. Behind the scenes, JSX is converted to regular JavaScript using tools like Babel.

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;
```

## What is the difference between State and Props?

| State | Props |
|-------|-------|
| Managed inside the component | Passed from parent to child |
| Can be changed by the component | Read-only, cannot be changed |
| Used for dynamic data | Used to pass data between components |
| Declared with useState hook | Declared as function parameters |

## What is the useState hook, and how does it work?

`useState` is a React hook that allows functional components to have state. It returns an array with two elements: the current state value and a function to update it.

**Example:**
```jsx
const [count, setCount] = useState(0);
```
When `setCount` is called, React re-renders the component with the new value.

## How can you share state between components in React?

State can be shared between components by **lifting state up** to the nearest common parent component. The parent holds the state and passes it down to child components via props. Child components can update the parent's state by calling callback functions passed as props.

## How is event handling done in React?

In React, events are handled using camelCase syntax and passing a function as the event handler.

**Example:**
```jsx
<button onClick={handleClick}>Click Me</button>
```
React uses **Synthetic Events** which are wrappers around the browser's native events, ensuring cross-browser compatibility.

## 🛠️ Technologies Used
- React
- Vite
- React-Toastify
- CSS3