let counterValue = 0;
const increment = function () {
    counterValue += 1;
    console.log(counterValue);
    resultRef.innerHTML = counterValue;
    return counterValue;
}
const decrement = function () {
    counterValue -= 1;
    console.log(counterValue);
    resultRef.innerHTML = counterValue;
    return counterValue;
}
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const resultRef = document.getElementById('value');
//console.log(incrementBtnRef);
incrementBtnRef.addEventListener('click', () =>
    increment());
decrementBtnRef.addEventListener('click', () => 
    decrement());

