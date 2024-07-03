                    Key Concepts in Redux

1. Store: The central repository where the entire state of your application lives.
2. Actions: Plain JavaScript objects that represent an intention to change the state. Each action must have a type property.
3. Reducers: Functions that take the current state and an action as arguments, and return a new state.
4. Dispatch: A method to send actions to the store.
5. Selectors: Functions to select or derive data from the state.
6. Slice A slice is a collection of Redux reducer logic and actions for a single feature of your app

                    Use of Redux

1. Predictability
2. Centralized store
3. Debugging - redux dev tools
4. Middleware - for side effects(logging, asynchronous operations)

                  Alternatives

1. Context API (Reacts built in to manage state, useful in small and less complex applications)
2. MobX (use observables)
3. Recoil (designed specific for react)
4. Apollo Client (for graph-ql based applications, manages both client and remote state)
5. Zustand (small, fast with minimum boilerplate, provides API for managing state)
6. Jotai (focuses on atomic state management, leverages react's suspense and concurrent state)