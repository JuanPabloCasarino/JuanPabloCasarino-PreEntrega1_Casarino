import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC42I04mepFoGiZ35C9yo7uItr-hSSkF_Y",
  authDomain: "laadorada-ecommerce.firebaseapp.com",
  projectId: "laadorada-ecommerce",
  storageBucket: "laadorada-ecommerce.appspot.com",
  messagingSenderId: "146686634583",
  appId: "1:146686634583:web:613a13f612f178c4cd5112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

