const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() || 'Anonymous';
})

//console.log(nameInput);

//nameInput.addEventListener('input', event => {
//    nameOutput.textContent = event.currentTarget.value;
//    if (event.currentTarget.value === '') {
//        nameOutput.textContent = 'Anonymous';
//   }
//})