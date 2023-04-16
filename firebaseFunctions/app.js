import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
const firebaseKey = import.meta.env.VITE_FIREBASE_KEY;
const firebaseConfig = {
    apiKey: firebaseKey,
    authDomain: "survey-app-64e6f.firebaseapp.com",
    projectId: "survey-app-64e6f",
    storageBucket: "survey-app-64e6f.appspot.com",
    messagingSenderId: "191419324923",
    appId: "1:191419324923:web:0b48a35a01a62fb5c5d35e",
    measurementId: "G-5ZCE1C0N3L"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storeSurvey = async (survey) => {
    try {
        const docRef = await addDoc(collection(db, "surveys"), survey);
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
};
export const getSurveys = async (email) => {
    let surveys = [];
    const querySnapshot = await getDocs(collection(db, "surveys")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().email === email) {
                surveys.push(doc.data());
            }
        });
    });
    return surveys;
};
