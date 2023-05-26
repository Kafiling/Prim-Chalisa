import { useState } from 'react'
import './App.css'
import styles from './style'
// Improt Component
import Navbar from './Components/Navbar'
import  {HeroSection,Banner,Project1,Project2,ProjectSummary,Extra}  from './Components'
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
    
    <div className={`bg-[url('https://images.creativemarket.com/0.1.0/ps/10574351/910/303/m2/fpnw/wm1/lahijl3boi3hjl8fhkolhnfzz4jdhpq513pw7mrqsvixalxzt6w9lbodtiir0ydb-.jpg?1625495080&s=1b4046908b1fd73344e331ea268d83a9&fmt=webp')] bg-cover ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <ProjectSummary/>   
      </div>
    </div>

    <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <Extra/>   
      </div>
    </div>
    
    </div>
  </>
   

  )
}

export default App
