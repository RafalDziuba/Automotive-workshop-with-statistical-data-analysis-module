const loginField = document.getElementById('loginField');
const passwordField = document.getElementById('passwordField');
const loginButton = document.getElementById('loginBtn');
const form = document.getElementById('loginForm');

const login = (e) => {

    e.preventDefault();
    axios({
            method: 'post',
            url: 'https://car-service-api-app.herokuapp.com/login',
            data: {
                username: loginField.value,
                password: passwordField.value
            },
            headers: {
                'Content-Type': 'application/json'

            },
        }).then(function (response) {
            console.log(response);
            if (response.data.message == 'Success') {
                localStorage.setItem('token', response.data.api_key);
                window.location.href = 'admin.html'
            }

        })
        .catch(function (err) {
            console.log(err);
        });
}

form.addEventListener('submit', login);