const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
inputRef.addEventListener('input', (event) => {
    if (event.target.value === "") { nameLabelRef.textContent = "незнакомец" }
    else {
        //console.log(event.target.value);
        nameLabelRef.textContent = event.target.value;
    }
});