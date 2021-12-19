export type Actions = {
  type: string;
  payload: any;
}

const INITIAL_STATE =  {
 user: null,

}
/** State Updater */
const userReducer = ( state = INITIAL_STATE, action: Actions ) => {
  switch(action.type) {
     
    default:
      return state;
  }
}

export default userReducer