import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDo6itnPT9nfMH_5_YnaA4n0OIUMZ8mOwA",
  authDomain: "hamchat-b5d57.firebaseapp.com",
  projectId: "hamchat-b5d57",
  storageBucket: "hamchat-b5d57.appspot.com",
  messagingSenderId: "133770002999",
  appId: "1:133770002999:web:c0a00f562b7e9f201035b2",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const pushMessage = ({ userName, text }) => {
  push(ref(database), {
    userName: userName,
    message: text,
  });
};
