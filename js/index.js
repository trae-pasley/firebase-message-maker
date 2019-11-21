import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import firebase from './config/firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';
import { homedir } from 'os';



pageBuild();

function pageBuild() {
    renderHeader();
    // renderHome();
    // renderLogin();
    // // renderMessages();
}

function renderHeader() {
        const header = document.querySelector('.header');
        header.innerHTML = Header();
}

function renderHome() {
    const home = document.querySelector('.nav-list_home');
    home.addEventListener('click', () => {
    const main= document.querySelector('.main');
    main.innerHTML = Home();
});
}

function renderLogin() {
    const loginButton = document.querySelector('.nav-list_login');
    loginButton.addEventListener('click', () => {
    const main= document.querySelector('.main');
    main.innerHTML = Login();
    });
} 

function renderMessages() {
    const messagesButton = document.querySelector('nav-list_messages');
    messagesButton.addEventListener('click', () => {
    const main = document.querySelector('.main');
    const db = firebase.firestore();
     db.collection('messages')
    .get()
    .then(messages => {
    main.innerHTML = Messages(messages);   
    });
});
}
