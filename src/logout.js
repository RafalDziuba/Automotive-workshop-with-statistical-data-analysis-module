const logoutBtn = document.getElementById('logout-btn');

const signout = (e) => {

    e.preventDefault();
    
    localStorage.removeItem('token');
    window.location.href = 'login.html';

}

logoutBtn.addEventListener('click', signout);
