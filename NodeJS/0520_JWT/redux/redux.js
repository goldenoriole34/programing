const { createStore } = require('redux')
const rootReducer = require('./reducers')

const store = createStore(rootReducer); 

console.log(store.getState())
