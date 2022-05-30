let initialstate = {
  number : 0,
  id: "",
  pw: ""
}

function reducer(state=initialstate, action) {
  switch(action.type){
    case "PLUS_NUMBER" :
    return { ...state, number: state.number + action.payload.count}
    case "MINUS_NUMBER" :
      return {...state, number : state.number - action.payload.count}
    case "LOGIN" :
      return {...state, id:action.payload.id, pw:action.payload.pw}
      default :
    return { ...state}
  }
}

export default reducer