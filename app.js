const shareButton = document.getElementById("shareElement");
const shareContainer = document.getElementById("shareContainer");


shareButton.addEventListener("mouseover", displayContainer);
shareButton.addEventListener("mouseleave", removeContainer);

function displayContainer(){
        document.getElementById("shareContainer").style.display = "flex";
}
setTimeout(function(){
    document.getElementById("shareContainer").style.display = "none";
}), 1000;

