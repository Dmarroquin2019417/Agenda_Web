

function viewContactDetails(name, phone, email) {
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactPhone", phone);
    localStorage.setItem("contactEmail", email);

    window.location.href = "detallesdelcontacto.html";
}


document.addEventListener("DOMContentLoaded", function() {
    const contactNameElement = document.getElementById("contactName");
    const contactPhoneElement = document.getElementById("contactPhone");
    const contactEmailElement = document.getElementById("contactEmail");

    const contactName = localStorage.getItem("contactName");
    const contactPhone = localStorage.getItem("contactPhone");
    const contactEmail = localStorage.getItem("contactEmail");

    contactNameElement.textContent = contactName;
    contactPhoneElement.textContent = contactPhone;
    contactEmailElement.textContent = contactEmail;
});

function goBackToContacts() {
    window.location.href = "contactos.html";
}


