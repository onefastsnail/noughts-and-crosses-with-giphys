# Noughts and Crosses with Giphys!

**This is a super quick n dirty draft to help a workshop planning therefore a WIP.**

A Noughts and Crosses game with Giphys, made in [React](https://reactjs.org/).

A wee [Codesandbox demo here](https://codesandbox.io/s/github/onefastsnail/noughts-and-crosses-with-giphys)

## Requirements

* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [Parcel](https://parceljs.org/)
* Obtain a [Giphy API key](https://developers.giphy.com/)

## Usage

1. `$ yarn install`
1. `$ yarn start`

## Covering

* Use of Components
* Component composition
* Component lifecycle
* Component props
* Component state
* Render props
* Use of Pure Components
* Image loading with a prefetch
* Maybe more...

## Potential Workshop tasks

Things have been left out or designed in a way with ease of simplicity for learning purposes. Some things are hidden away in functions or components to mask away the more complicated features, to help focus on React and its concepts.

The idea here is to list tasks to help users traverse the codebase whilst coding.

- [ ] Change the game board size (props)
- [ ] Show the board piece assigned player (component update)
- [ ] Show which player should make the current move (component update)
- [ ] Reset the game (component state)

- [ ] Prevent a player from replacing an opponents existing board piece (React dev tools, preventing re renders)
- [ ] Create a new loading component (component creation)

- [ ] Allow the users to setup their Giphy API categories or tags upon game start (new feature)
- [ ] Implement the win detection (new feature)
- [ ] Fix the state mutation in the `handleMove` function (bugfix)


