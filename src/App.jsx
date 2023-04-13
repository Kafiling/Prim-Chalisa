import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
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
const homeObjOne = {
  PinkBgColor : false,
  lightText : true,
  lightTextDesc : true,
  topLine : 'เปลี่ยนการเรียนฟิสิกส์แบบเดิมๆ',
  headline : 'Curious ',
  description : 'ไขข้อข้องใจต่างๆในรายวิชาฟิสิกส์ด้วยการทดลองเสมือนจัดเตรียมไว้เพื่อคุณ ทำให้คุณได้พบกับมุมมองใหม่ๆและเปลี่ยนการเรียนฟิสิกส์ไปตลอดกาล ',
  imgStart: '',
  img : 'https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Homepage%2Fto_the_moon.svg?alt=media&token=c6294016-27a8-445a-bfd0-2eff414494c9',
  alt : 'Curious'
}



function App() {
  
  return (
    <div className="App">
    <Navbar/>
    </div>
  )
}

export default App
