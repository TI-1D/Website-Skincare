
// Ambil referensi elemen form

 alert ('Selamat Datang di Website kami');

var form = document.querySelector('login-button');

// Tambahkan event listener pada form
form.addEventListener('login-button', function(event) {
  // Menghentikan pengiriman form secara default
  event.preventDefault();

  // Ambil nilai dari input form
  var email = form.getElementById('email').value;
  var password = form.getElementById('password').value;

  // Validasi input form
  if (email === '' || password === '') {
    alert('Email dan password harus diisi');
    return;
  }

  // Kirim data form ke server menggunakan AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Tangani respon dari server
      if (xhr.status === 200) {
        alert('Login berhasil');
        window.location.href = 'Menu.html';
      } else {
        alert('Login gagal');
      }
    }
  };
  xhr.send(JSON.stringify({ Email: email, Password: password }));
});

//register
const form = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const password2Error = document.getElementById('password2-error');
const registerButton = document.getElementById('register-button');

function showError(input, message) {
  input.classList.add('error');
  const errorElement = input.nextElementSibling;
  errorElement.innerText = message;
}

function showSuccess(input) {
  input.classList.remove('error');
  const errorElement =

