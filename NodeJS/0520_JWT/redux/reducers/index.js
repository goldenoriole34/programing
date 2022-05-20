const { combineReducers } = require("redux")
const board = require('./boardReducer')

const rootReducer = combineReducers(
  {
    board,
    name : (state, action) => {
      switch(action.type){
        default : return 'ingoo'
      }
    }
  }
)

module.exports = rootReducer