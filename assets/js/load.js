window.onload = function(){
    const loadScreen = document.getElementsByClassName("loadScreen");
    const content = document.getElementsByClassName("content");
    loadScreen[0].classList.add("noload");
    Array.from(content).forEach(element => {
        element.classList.remove("noload");
    });
}