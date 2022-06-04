const initialState = {
  id :'',
  password : ''
}

export const authenticateReducer = (state=initialState, action) => {

  let { type, payload } = action
  switch(type){
    case "LOGIN_SUCCESS" : console.log('로그인성공')
    return {...state, id : payload.id, password : payload.password, authenticate : true } 
    default : return {...state}
  }
}