

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        checkage();
    });
});

function showError(inputEl, errorId, message) {
    document.getElementById(errorId).textContent = message;
    if (inputEl) inputEl.classList.add("invalid");
}

function clearError(inputEl, errorId) {
    document.getElementById(errorId).textContent = "";
    if (inputEl) inputEl.classList.remove("invalid");
}

function checkage() {
    let isValid = true;

  
    const name = document.getElementById("name");
    const nameVal = name.value.trim();
    if (nameVal === "") {
        showError(name, "nameError", "Name is required.");
        isValid = false;
    } else if (!/^[A-Za-z\s]{3,40}$/.test(nameVal)) {
        showError(name, "nameError", "Enter a valid name (letters only, min 3 characters).");
        isValid = false;
    } else {
        clearError(name, "nameError");
    }


    const age = document.getElementById("age");
    const ageVal = age.value.trim();
    if (ageVal === "") {
        showError(age, "ageError", "Age is required.");
        isValid = false;
    } else if (!/^\d+$/.test(ageVal) || Number(ageVal) < 5 || Number(ageVal) > 100) {
        showError(age, "ageError", "Enter a valid age between 5 and 100.");
        isValid = false;
    } else {
        clearError(age, "ageError");
    }

    const email = document.getElementById("email");
    const emailVal = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        showError(email, "emailError", "Email is required.");
        isValid = false;
    } else if (!emailPattern.test(emailVal)) {
        showError(email, "emailError", "Enter a valid email address.");
        isValid = false;
    } else {
        clearError(email, "emailError");
    }

   
    const phone = document.getElementById("phone");
    const phoneVal = phone.value.trim();
    if (phoneVal === "") {
        showError(phone, "phoneError", "Phone number is required.");
        isValid = false;
    } else if (!/^\d{10}$/.test(phoneVal)) {
        showError(phone, "phoneError", "Enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        clearError(phone, "phoneError");
    }

   
    const address = document.getElementById("address");
    const addressVal = address.value.trim();
    if (addressVal === "") {
        showError(address, "addressError", "Address is required.");
        isValid = false;
    } else {
        clearError(address, "addressError");
    }

    
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        showError(null, "genderError", "Please select your gender.");
        isValid = false;
    } else {
        clearError(null, "genderError");
    }

    if (isValid) {
        document.getElementById("formSuccess").style.display = "block";
        document.getElementById("formSuccess").textContent =
            "Registration successful! Welcome, " + nameVal + ".";
        // document.getElementById("form").reset();
    } else {
        document.getElementById("formSuccess").style.display = "none";
    }

    return isValid;
}