const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    c1 = Math.floor(Math.random()*256);
    c2 = Math.floor(Math.random()*256);
    c3 = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});