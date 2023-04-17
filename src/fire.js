import {initializeApp} from "firebase/app"

import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDBIbYFLqybNa1UmuhuKp0sH-MHoogseVU",
    authDomain: "login-e35f5.firebaseapp.com",
    projectId: "login-e35f5",
    storageBucket: "login-e35f5.appspot.com",
    messagingSenderId: "687358725326",
    appId: "1:687358725326:web:7fc0f0c5345e2997a2549f"
  };
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);
  export default app;