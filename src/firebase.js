import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getDatabase, ref, set } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyCIBGx6Ds0EuiVXLQK8VzDawmAiPIbvtRI",
  authDomain: "yac-web-3dd34.firebaseapp.com",
  projectId: "yac-web-3dd34",
  storageBucket: "yac-web-3dd34.firebasestorage.app",
  messagingSenderId: "896821990331",
  appId: "1:896821990331:web:2140b191aa2ed29820ea9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getNamesEmails(db) {
    const names = collection(db, 'names');
    const namesSnapshot = await getDocs(names);
    const namesList = namesSnapshot.docs.map(doc => doc.data());
    return namesList;
}

export async function onUserEmailSubmit() {
    var email = document.getElementById("email").value;
    try {
      const docRef = await addDoc(collection(db, 'emails'), {
          email: email,
      });
    console.log("new user", email, "submitted!");
    } catch (e) {
        debugger;
        console.log("error adding", email);
    }
};