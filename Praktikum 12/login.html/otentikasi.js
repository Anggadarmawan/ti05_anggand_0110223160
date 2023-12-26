document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'ahmad2017' && password === 'integrity') {
        window.location.href = 'berhasil-login.html';
    } else {
        alert('Login gagal. Periksa kembali username dan password Anda.');
    }
});