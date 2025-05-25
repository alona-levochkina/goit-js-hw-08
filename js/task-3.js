const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmmedValue = nameInput.value.trim();
    if (trimmmedValue === '') {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmmedValue;
    }
});