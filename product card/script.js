let imageSlider = document.getElementById("imageSlider");
let handler = document.getElementsByClassName("handler");

// ------- HANDLER OF SLIDER

handler[0].addEventListener("click", (event) => {
    imageSlider.src = "./images/image1.jpg";
    for(let handle of handler){
        handle.classList.remove("active");
    }
    event.target.classList.add("active");
});

handler[1].addEventListener("click", (event) => {
    imageSlider.src = "./images/image2.jpg";
    for(let handle of handler){
        handle.classList.remove("active");
    }
    event.target.classList.add("active");

});

handler[2].addEventListener("click", (event) => {
    imageSlider.src = "./images/image3.jpg";
    for(let handle of handler){
        handle.classList.remove("active");
    }
    event.target.classList.add("active");
});

handler[3].addEventListener("click", (event) => {
    imageSlider.src = "./images/image4.jpg";
    for(let handle of handler){
        handle.classList.remove("active");
    }
    event.target.classList.add("active");
});
