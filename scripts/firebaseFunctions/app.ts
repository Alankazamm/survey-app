// 1. Create a new Firebase project: https://console.firebase.google.com/
// 2. Create a Firestore database within the Firebase project
// 3. Create a new service account for the Firebase project
// 4. Download the service account key as a JSON file
// 5. Rename the JSON file to firebaseKey.json
// 6. Add the firebaseKey.json file to the /public directory
// 7. Add the VITE_FIREBASE_KEY environment variable to the .env file
// 8. Add the Firebase SDK to the project with the following command:
//    npm install firebase
// 9. Import the Firebase SDK and initialize the app
// 10. Add a new collection to the Firestore database
// 11. Create a function to store a survey in the Firestore database
// 12. Create a function to retrieve surveys from the Firestore database

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Infos } from "../data-handlers/filledInfos";

//type Surveys is a JSON object of Infos
export type Surveys = Infos[];
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
export const db = getFirestore(app);

export const storeSurvey = async (survey: any) => {

  try {
    const docRef = await addDoc(collection(db, "surveys"), survey);  
  } catch (e) {
    alert(`Error adding document: ${e}`);
  }
}

export const getSurveys = async (email: string) => {
  let surveys: Infos[] = [];
  const querySnapshot = await getDocs(collection(db, "surveys")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().email === email) {
        surveys.push(doc.data() as Infos);
      }
    });
  });
  return surveys;
}

export const getAllSurveys = async () => {
  let surveys: Infos[] = [];
  const querySnapshot = await getDocs(collection(db, "surveys")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      surveys.push(doc.data() as Infos);
    });
  });
  return surveys;
}


