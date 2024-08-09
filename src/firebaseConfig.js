// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBRC3lLKMeI6Dq7ywbiU5CCYfU_j92tH84",
//   authDomain: "devlinks-9ccba.firebaseapp.com",
//   projectId: "devlinks-9ccba",
//   storageBucket: "devlinks-9ccba.appspot.com",
//   messagingSenderId: "848641525750",
//   appId: "1:848641525750:web:5be136a2136b048b1ba9d7",
//   measurementId: "G-YW2CG2NXHY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// export { analytics, auth };








// firebaseConfig.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'yourdomain.com',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_PROJECT_ID.appspot.com',
//   messagingSenderId: 'YOUR_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// export { auth, db, provider };






// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRC3lLKMeI6Dq7ywbiU5CCYfU_j92tH84",
  authDomain: "devlinks-9ccba.firebaseapp.com",
  projectId: "devlinks-9ccba",
  storageBucket: "devlinks-9ccba.appspot.com",
  messagingSenderId: "848641525750",
  appId: "1:848641525750:web:5be136a2136b048b1ba9d7",
  measurementId: "G-YW2CG2NXHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };



// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRC3lLKMeI6Dq7ywbiU5CCYfU_j92tH84",
//   authDomain: "devlinks-9ccba.firebaseapp.com",
//   projectId: "devlinks-9ccba",
//   storageBucket: "devlinks-9ccba.appspot.com",
//   messagingSenderId: "848641525750",
//   appId: "1:848641525750:web:5be136a2136b048b1ba9d7",
//   measurementId: "G-YW2CG2NXHY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { analytics, auth, db };

