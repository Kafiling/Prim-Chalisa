import { useState } from 'react'
import './App.css'
import styles from './style'
// Improt Component
import Navbar from './Components/Navbar'
import  {HeroSection,Banner,Project1,Project2,ProjectSummary}  from './Components'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3c3OqlmASfWZauYxhrUlebUvBvUP_Hzo",
  authDomain: "prim-chalisa.firebaseapp.com",
  projectId: "prim-chalisa",
  storageBucket: "prim-chalisa.appspot.com",
  messagingSenderId: "284137268292",
  appId: "1:284137268292:web:30e9911e3ec6fa0e0f0811",
  measurementId: "G-1YKXQQM7WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




function App() {
  
  return (<>
   <Navbar/>
   <div className="bg-primary w-full overflow-hidden">
    
   
  
    
    <div className={`bg-primary ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <HeroSection/>
      </div>
    </div>

    <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <Project1/>   
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
      <Project2/>   
      </div>
    </div>
    
    <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <ProjectSummary/>   
      </div>
    </div>

    </div>
  </>
   

  )
}

export default App
