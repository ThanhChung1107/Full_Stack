const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const step = document.querySelectorAll(".step");

//giá trị hiện tại
let currentActive = 1

//duyệt qua các step để gán active
function upadte() {
    step.forEach((step,idx) => {
    if(idx < currentActive){
        step.classList.add("active");
    }
    else {
        step.classList.remove("active");
    }
});
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === step.length;

    progress.style.width = (currentActive - 1)/(step.length - 1)*100 + "%";
}
//thay đổi step
function change(step){
    currentActive += step;
    upadte();
}

//giảm step
prev.addEventListener("click",() => {
    change(-1)
});


//tăng step 
next.addEventListener("click",() => {
    change(1)
});

    


