import Header from './components/header';
import Home from './components/Home';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';
import { homedir } from 'os';



pageBuild();

function pageBuild() {
    renderHeader();
}

function renderHeader() {
        const header = document.querySelector('.header');
        header.innerHTML = Header();
    }

function renderHome() {
    const home = document.querySelector('.nav-list_home');
    const main= document.querySelector('.main');
    home.addEventListener('click', () => {
    main.innerHTML = Main();
});

}
