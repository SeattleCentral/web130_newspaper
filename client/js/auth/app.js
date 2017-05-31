import { loginUser } from '../auth/queries';

let loginData = (username, password) => {
    return {
        "input": {
            "username": username,
            "password": password
        }
    };
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
                Cookies.set('userID', user.id);
                Cookies.set('userName', user.name);
                Cookies.set('token', token);
                console.log('userID - ' + user.id);
                console.log('userName - ' + user.name);
                console.log('token - ' + token);

            }
        }
    });
});
