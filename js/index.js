import Header from './components/header';


pageBuild();

function pageBuild() {
    renderHeader();
}

function renderHeader() {
        const header = document.querySelector('.header');
        header.innerHTML = Header();
    }
        
