# Loot check

Loot check is an app made using Redux following a Behavior Driven style.

- The Redux Store is one giant object that represents the entire state of an application.

- Redux Reducers provide guidline on how to update the store based on different redux actions.

- Redux Actions are objects with packets of data a specific type that identify it to the redux reducer.

- Action Creators are functions that create and return redux action.

- We can provide mock functions with jest.fn() to the props interface of a component to check whether or not redux action creators are dispatched.

## Creating new feature

To create a new feature we'd follow these steps:

0.  Create constant with the name of the type
1.  Create test to the action creator (and run)
2.  Create functionality to make test pass
3.  Create test in the reducer with the new type
4.  Add new type into the reducer return desired output
