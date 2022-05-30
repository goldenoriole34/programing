let initialstate = {
  number : 0
}

function reducer(state=initialstate, action) {
  switch(action.type){
    case "PLUS_NUMBER" :
    return { ...state, number: state.number + 1}
    case "MINUS_NUMBER" :
      return { ...state, number: state.number - 1}
      default :
    return { ...state}
  }
}

export default reducer