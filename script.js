// TA12: Generate Password
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    if (length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres.");
        return;
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function displayGeneratedPassword() {
    const length = parseInt(document.querySelector("#password-length").value, 10);
    const password = generatePassword(length);
    if (password) {
        document.querySelector("#generated-password").textContent = password;
    }
}

// TA13: Change Text on Button Click
function changeText() {
    const p = document.querySelector("#text-change");
    p.textContent = "Texto cambiado";
}

// TA14: Add Item to List
function addItem() {
    const input = document.querySelector("#item-input");
    const ul = document.querySelector("#item-list");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";  // Clear input
    }
}

// TA15: Remove Last Item
function removeLastItem() {
    const ul = document.querySelector("#item-list");
    ul.lastElementChild?.remove();
}

// TA16: Show/Hide Element
function toggleVisibility() {
    const p = document.querySelector("#toggle-text");
    p.style.display = p.style.display === "none" ? "block" : "none";
}

// TA17: Increment Counter
let counter = 0;
function incrementCounter() {
    const counterDisplay = document.querySelector("#counter");
    counter++;
    counterDisplay.textContent = counter;
}

// TA18: Filter List Based on Input
function filterList() {
    const filterInput = document.querySelector("#filter-input").value.toLowerCase();
    const items = document.querySelectorAll("#dynamic-list li");
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filterInput) ? "" : "none";
    });
}

// TA19: Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.querySelector("#name");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email");
    let valid = true;

    if (name.value.trim() === "") {
        document.querySelector("#name-error").textContent = "El nombre es requerido.";
        valid = false;
    } else {
        document.querySelector("#name-error").textContent = "";
    }

    if (password.value.length < 8) {
        document.querySelector("#password-error").textContent = "La contraseña debe tener al menos 8 caracteres.";
        valid = false;
    } else {
        document.querySelector("#password-error").textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.querySelector("#email-error").textContent = "El correo no es válido.";
        valid = false;
    } else {
        document.querySelector("#email-error").textContent = "";
    }

    if (valid) {
        console.log("Formulario válido y enviado.");
    }
}

// TA20: Cambiar imagen al pasar el mouse
function changeImageOnHover() {
    const image = document.querySelector("#hover-image");
    image.src = "imagen1.jpg";  // Imagen que aparecerá al pasar el mouse
}

function restoreImage() {
    const image = document.querySelector("#hover-image");
    image.src = "1.jpg";  // Imagen original que aparecerá al quitar el mouse
}

// TA21: Change Input Style on Focus
function changeInputStyle() {
    const input = document.querySelector("#styled-input");
    input.style.borderColor = "darkblue";
}

function restoreInputStyle() {
    const input = document.querySelector("#styled-input");
    input.style.borderColor = "";
}

// TA22: Detect Window Resize
function detectResize() {
    const sizeDisplay = document.querySelector("#window-size");
    sizeDisplay.textContent = `Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`;
}

window.addEventListener("resize", detectResize);
detectResize(); // Llamada inicial para mostrar el tamaño al cargar la página
