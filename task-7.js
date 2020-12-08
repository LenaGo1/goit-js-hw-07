const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('click', (event) => {
    textRef.style.fontSize = event.target.value.toString() + 'px';
})

