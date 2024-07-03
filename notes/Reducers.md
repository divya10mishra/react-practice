Reducers-

1. Reducers are pure functions 
    Pure Functions are those functions which are certain which has known input and output, does not have any side effects(does not modify variables outside its scope or I/O operation)
    which would not change the output for any specific input.

2. Reducers take current state and actions(with type) as input and returns new state, though it is pure the    state transitions is predictable and repeatable. 

3. Example- for any given state and action(initialState={count:0}, action.type = INCREMENT) it will always be 1

4. Reducers in Redux are immutable functions, it will not change the previous state, it creates and return new state object.

5. Middleware in redux can interrupt actions before reaching reducers. Used for logging, asynchronous operations etc.