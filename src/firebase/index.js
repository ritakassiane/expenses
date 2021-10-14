// Esse arqiovp é responsavel pela lógica/declarações necessárias para que o firebase seja chamado como elemento global no vuec
const firebase = require('firebase/app')
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
})

// A função abaixo vai ser utilizada pelo Vue para instalar um pluggin globalmente no Vue e nao precisar fazer o "Vue.user(plugin)", assim será possivel ter acessado ao firebase como root, podendo acessa-lo pelo $ / this
export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
