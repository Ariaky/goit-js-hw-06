const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const correctLength = parseInt(input.getAttribute('data-length'));
    const textInputLength = input.value.length;

    input.classList.remove('valid', 'invalid');
    input.classList.add(textInputLength === correctLength ? 'valid' : 'invalid');
});