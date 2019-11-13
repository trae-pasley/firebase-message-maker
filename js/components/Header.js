export default function Header(){
    return `
    
    <h1 class= 'bg-white rounded nav-logo'>MessageMaker</h1>
    <nav class='nav'>
     <ul class= 'navbar navbar-expand-lg navbar-light bg-light nav-list'>
     <li class='nav-link nav-list_home'>Home</li>
     <li class='nav-link nav-list_messages'>Messages</li>
     <li class='nav-link nav-list_signup'>Sign Up</li>
     <li class='nav-link nav-list_login'>Login</li>
     <li class='nav-link nav-list_logout'>Logout</li>
</ul>
</nav>
    `;
}