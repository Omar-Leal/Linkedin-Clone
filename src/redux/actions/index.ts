import { auth, firebaseProvider  } from '../../firebase'

export function signInAction() {
    return ( dispatch: any ) => {
      auth.signInWithPopup( firebaseProvider )
      .then( payload => console.log( payload ))
      .catch( error => console.log( 'error on signin', error ) )
    }
}