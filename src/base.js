import Rebase from 're-base';
import firebase from 'firebase';

// Link with Firebase project
const config = {
    apiKey: "AIzaSyARUX4qo9dHmXngHjh-5LZ3yJqVzqydBek",
    authDomain: "ma-chat-box-bc1fe.firebaseapp.com",
    databaseURL: "https://ma-chat-box-bc1fe.firebaseio.com",
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())

export default base;