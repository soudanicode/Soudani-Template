// scroll top  when load body
function onLoadPage(){
    // scrollTo(0, 0)
}
// mega menu visible
function visibleMenu(){
    document.querySelector(".mega-menu").classList.add("visible-mega");   
}
// creat Popup Overlay gallery
let getImg = document.querySelectorAll(".card-gallery .image img");

getImg.forEach(img =>{
    img.addEventListener("click",e =>{
        // create popup element
        let popupOverlay = document.createElement("dev");
        popupOverlay.className = "popup-overlay";
        // append popupoverlay to body
        document.body.appendChild(popupOverlay);
        // create popup box 
        let popupBox = document.createElement("dev");
        popupBox.className = "popup-box";
        // create img
        let popupImage = document.createElement("img") ;
        popupImage.className = "popup-img";
        popupImage.src = img.src;
        // create close Button
        let closeButton = document.createElement("button");
        // add class name
        closeButton.className = "close-button";
        // add text content 
        closeButton.textContent = "✘";

        // append childs to parent
        popupBox.appendChild(popupImage);
        // append popupbox to body
        document.body.appendChild(popupBox);

        // append close Button to popup box
        popupBox.appendChild(closeButton);

    });
})
// remove overlay popup &img
document.body.addEventListener("click", e =>{
    if (e.target.className == "close-button"){

        //remove popup Box
        document.querySelector(".popup-box").remove();
        
        //remove popup overlay
        document.querySelector(".popup-overlay").remove();
    }
})



