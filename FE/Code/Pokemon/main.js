//src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
const baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
const container = document.querySelector('#container');
for(let i = 1; i<= 151 ; i++){
    const newDiv = document.createElement("div");
    const parentDiv = container.appendChild(newDiv);

    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    parentDiv.appendChild(newImg);
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`
    parentDiv.appendChild(newSpan);
}