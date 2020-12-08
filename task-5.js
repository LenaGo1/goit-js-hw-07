const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
inputRef.addEventListener('input', (event) =>{
    console.log(event.target.value);
    nameLabelRef.textContent = event.target.value;
});