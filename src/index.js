function helloWorld() {
    const element = document.createElement('h1');
    element.innerHTML = 'Hello World!';
    document.body.appendChild(element);
}
helloWorld();