let text = document.querySelector('.heading1');
let str = text.textContent;
let arr = str.split('');
text.textContent = '';
for(let i = 0; i < arr.length; i++) {
    text.innerHTML += '<span>' + arr[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    let span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === arr.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer(null);
}