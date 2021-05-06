# Test Driven Development

TDD is a style of coding where tests are written first then they are implemented in code. It generally works in this order:

- Write a unit test - To describre an aspect or feature
- Run the test
- Write the code to pass the test
- Refactor the code

## Why Test Driven Development

- It reducers errors and defects in the long run
- It leads to higher quality code

## How to write tests

Know how where to start creating those tests might be hard, so here's an anectodal tip:

- Think of indivual part of the application (components, reducer, action, etc.)

- Now imagine describing those part and what they contain to someone else

- Write test to verify that each part does what you expect.

# Libraries

## Jest

Jest is made by Facebook and is able to test any JS enviroment. Test can be created on a specific "_\_test_\_" folder or with if the file ends with ".test.js" or ".spec.js".

It also has extra features, such as snapshot testing, which is basically a recorded version of the code, also coverage, which display how well our test display the lines of our code. Jest also has the ability to mock functions which allow to check if some function has been called in our code.

## Enzyme

A test utility librabry made by Airbnb and it allows to works with specific components and manipulation of React components and DOM behavior allowing for simulation of user interaction.

# Behavior Driven Development

BDD is a variation of TDD that splits the devlopment of features into users scenarios and behaviors that can afect the state of the App. Using terms like give, when to help describe that users expect different results. Ex: _Given_ notes, _when_ deleting, _then_ remove a note.
