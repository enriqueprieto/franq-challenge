export const environment = {
  production: true,
  hgConsole: {
    apiKey: "d98f4063",
    finances:{
      apiKey: "d98f4063",
      endpoint: "https://api.hgbrasil.com/finance"
    }
  },
  firebase: {
    apiKey: "AIzaSyBI6sn8POQqm9AZpXWNaHDskauGmZpfCGU",
    authDomain: "franq-28d43.firebaseapp.com",
    projectId: "franq-28d43",
    storageBucket: "franq-28d43.appspot.com",
    messagingSenderId: "596058391798",
    appId: "1:596058391798:web:00873e46785a6de67218d7"
  },
  storage:{
    name: 'franqApp',
    driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
  }
};
