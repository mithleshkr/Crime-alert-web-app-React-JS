import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDPcBCqAgok_AKT8FZEt4Kfalg8lGAbsr4",
    authDomain: "crimealert-9c6df.firebaseapp.com",
   // databaseURL: "https://crimealert-9c6df-default-rtdb.firebaseio.com",
    projectId: "crimealert-9c6df",
    storageBucket: "crimealert-9c6df.appspot.com",
    messagingSenderId: "149426030010",
    appId: "1:149426030010:web:6b6d8928ce36ccff130983"
  };
  const app = initializeApp(firebaseConfig);
  const db= getFirestore(app)
  
 
  

  export default firebase;