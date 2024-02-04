function togglePasswordVisibility() {
    const passwordInput = document.getElementById("contrasena");
    const eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.innerHTML = "&#128064;"; 
    } else {
        passwordInput.type = "password";
        eyeIcon.innerHTML = "&#128065;"; 
    }
}

function goBackToContacts(){
    window.location.href = "contactos.html"
}

