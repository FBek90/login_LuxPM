import {initializeApp} from 'firebase/app'
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCP11YPkKtzvAZW9toP5RFiiqpCnrVy20U',
  authDomain: 'auth-development-ebe31.firebaseapp.com',
  projectId: 'auth-development-ebe31',
  storageBucket: 'auth-development-ebe31.appspot.com',
  messagingSenderId: '574339750796',
  appId: '1:574339750796:web:bf649a8415944cdb7994a9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export default app
