const list_panel = document.querySelectorAll(".panel")
for (const panel of list_panel) {
    panel.addEventListener("click",function(){
        for (const panel of list_panel) {
            panel.classList.remove('active');
            }
        panel.classList.add('active');
    })
}