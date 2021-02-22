// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
  storage: { 
    name: 'franqAppDev',
    driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
