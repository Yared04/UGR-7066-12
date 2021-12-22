var text = document.getElementById('abt');
var newDom = '';
var animationDelay = 2;

for (let i = 0; i < text.innerText.length; i++) {
    if (text.innerText[i] == "x") {
        i = i + 7
        newDom += "<a href='contact.html' style='text-decoration: none; color: #00b0ff; font-size:20px;'> contact </a>";

    } else {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}