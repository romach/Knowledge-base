---
title: React basics
sidebar_label: Basics
---

**What is reconciliation?**

**Can you mutate `props`?**

No - `props` is immutable.

**What lifecycle methods are called when object is created?** 

- `constructor()`
- `render()`
- `componentDidMount()`

**What lifecycle methods are called when object is updated?**

- `shouldComponentUpdate()`
- `render()`
- `componentDidUpdate()`

**What lifecycle method is called when component is removed from DOM?**

- `componentWillUnmount()`

**How to re-render component forcibly?**

- use lifecycle method `forceUpdate()`

**How to enable Hot Module Reloading?**

```react
const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();
```

## Steps to create application

- create design (html + css)
- break design into components
- identify minimal state
  - identify state's place
- add inverse data flow
- add server communication

## Components

### Class components

- implemented by classes, that extends `React.Component`

### Functional components

- implemented by functions

### Higher-order components

## State vs props

| State                | Props                                         |
| -------------------- | --------------------------------------------- |
| Is changed over time | Is passed from parent                         |
|                      | Can be computed based on state or other props |

## Forms

### Uncontrolled

#### Use string refs (legacy)

- add handler on form submit
- add `ref` attribute to input
- use `this.refs.<refName>` to get access to HTML node

#### User refs

- create ref in controller with `this.myRef = React.createRef()`
- add attribute `ref={this.myRef}`
- access ref value with `this.myRef.current.value`

### Controlled

- use local state to store form's data
- use `onChange` callback to change state

## Routing

- package - `react-router-dom`

- wrap `<App/>` into `<BrowserRouter/>`

- substitute component with `Route`

  - `<Component/>` -> `<Route path="/path" component={Component}/>`

    - component passed by `component` has access to `history`, `location` and `match` via `props`

    - add attribute `exact` to `Route` with `path="/"`

    - you can use regexp as `to` value

      - `<Route path="/(.+)" component={Component}/>`

    - you can render child routes JSX

      ```jsx
      <Route path="/(.+)"
        render={() => (
          <div>
            <Route path="/first" exact component={FirstPage} />
            <Route path="/second" component={SecondPage} />
          </div>
        )}
      />
      ```

      

- add links to routes

  - `<Link to="/"></Link>`
  - `<NavLink to="/"></NavLink>` - add `active` class
    - add `exact` attribute to `Link` with `to="/"`

- programmatically go by route
  
  - `<button onClick={() => this.props.history.push("/page")}></button>`
  
- inject `Router` props to component
  
  - `export withRouter(MyComponent)`
  
- wrap routes with `<Switch>` to omit loops while routing (similar to `exact`)

  - use `<Switch>` with `key` attribute to update same component with different routes

- use `<Redirect exact from="/user" to "/user/home"/>` to redirect to another route