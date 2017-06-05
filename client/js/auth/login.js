import { loginUser } from './queries';

let loginData = (username, password) => {
    return {
        "input": {
            "username": username,
            "password": password
        }
    };
};

let processLogin = (user, token) => {
    // Set session cookie
    Cookies.set('userId', user.id);
    Cookies.set('userName', user.name);
    Cookies.set('token', token);
    // For debugging purposes
    console.log('userId - ' + user.id);
    console.log('userName - ' + user.name);
    console.log('token - ' + token);

    window.location = createUrl();
};

let createUrl = () => {
    return window.location.href.replace('/login.html', '/create.html');
};

$('#login-button').on('click', (event) => {
    // Don't actually submit form
    event.preventDefault();

    let username = $('input[name="username"]').val(),
        password = $('input[name="password"]').val(),
        data = loginData(username, password);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/sct-course",
        data: JSON.stringify({
            query: loginUser,
            variables: data
        }),
        contentType: 'application/json',
        success: function(response) {
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            } else if (response.hasOwnProperty('data')) {
                let loginUser = response.data.loginUser,
                    token = loginUser.token,
                    user = loginUser.user;
                processLogin(user, token);
            }
        }
    });
});
