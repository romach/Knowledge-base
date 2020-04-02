**What is Redux?**

- state management tool

**Basic terms**

- **store** 
  - place where the global state is placed
  - contains application data
  - one store per application
  - allows to access state via `getState()`
- **action**
  - describes what user want to do
  - object with `type` property
- **action creator** - *read [Idiomatic Redux: Why use action creators?](https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/)*
  - function that returns action
- **reducer**
  - get old state and action and produces next state
- `store.dispatch(action)`
  - passes action to reducer

**Principles**

- **single source of truth** - the state of your whole application is stored in an object tree within a single store
- **state is read-only** - the only way to change the state is to emit an action, an object describing what happened
- **changes are made with pure functions** - to specify how the state tree is transformed by actions, you write pure reducers.

**Notes**

- **Redux Toolkit** - helps to use Redux more effectively
- generate React app with Redux - `npx create-react-app my-app --template redux`
- `combineReducers`
- selector functions
- normalization
- middleware
- side effects - handling async behavior
  - thunk
- Redux Saga

## React Redux

- allows to use React with Redux

### Dependencies

- `redux`
- `react-redux`

### Create store

- create reducer
  - function, that receives state and action and returns new state

- use `createStore()` form `redux`
  - pass reducer to `createStore()`

### Connect store to application

- wrap `App` with `Provider`
  - pass `store` to `Provider`

### Connect store with component's properties

- create `mapStateToProps` function
  - receives state from redux
  - returns object with properties
    - this object will be merged into component's `props`
- create component enhancer with `connect()` from `react-redux`
  - pass `mapStateToProps` to `connect()`
- wrap component with component enhancer

- component will have `dispatch()` function and properties from `mapStateToProps` function

### Create actions

- create constants for actions' types
- create action
  - object with `type` property
  - you can also add some properties
- create action creator
  - function that returns action
- create object `mapDispatchToProps`
  - has action creators as values
- use `mapDispatchToProps` as second parameter in `connect()`
- get dispatch function from `props` inside `rnder()` method