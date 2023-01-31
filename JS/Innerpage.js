let toggleBar = document.querySelector(".sidebar");

let menuBar = document.querySelector(".menubar");

menuBar.addEventListener("click", () => {
    if(toggleBar.classList.contains('open')){
        toggleBar.classList.remove('open');
        toggleBar.classList.add('close');
    }
    else if(toggleBar.classList.contains('close')){
        toggleBar.classList.remove('close');
        toggleBar.classList.add('open');
    }
})
