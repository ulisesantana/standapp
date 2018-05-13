import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBYqPlYf36L1d7dQTzFPKX6fAI3DCOcSkc',
  authDomain: 'db4standapp.firebaseapp.com',
  databaseURL: 'https://db4standapp.firebaseio.com',
  projectId: 'db4standapp',
  storageBucket: 'db4standapp.appspot.com',
  messagingSenderId: '443554386476'
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export const Auth = firebaseApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = Auth
  Vue.prototype.$firestore = firestore
  Vue.prototype.$firebase = firebase
}
