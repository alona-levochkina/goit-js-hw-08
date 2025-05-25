const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passswordInput = loginForm.elements.password;

    if (emailInput.value.trim() === '' || passswordInput.value.trim() === '') {
        alert('All form field must be filled in');
} else {
    const formData = {
        email: emailInput.value.trim(),
        password: passswordInput.value.trim(),
    };

    console.log(formData);
    loginForm.reset();
}
});
    