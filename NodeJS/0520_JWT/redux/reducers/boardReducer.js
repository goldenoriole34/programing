const CHANGE_SUBJECT = 'change_subject'

const initialState = {
  list : [
      {
      idx : 0,
      subject : 'asdf'
    }
  ]
}

const boardReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    
    case CHANGE_SUBJECT : {
      const newList = [...state.list]
      newList[0].subject = action.payload
      return {
        ...state,
        list:newList
      }
    }

    default :
      return state
  }
}

module.exports = boardReducer