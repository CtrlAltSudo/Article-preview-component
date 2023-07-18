const shareButton = document.getElementById("shareElement");
const shareContainer = document.getElementById("shareContainer");


shareButton.addEventListener("click", displayContainer);
shareButton.addEventListener("mouseleave", removeContainer);

function displayContainer(){
    if (document.getElementById("shareContainer").style.display === "flex"){
        document.getElementById("shareContainer").style.display = "none"
    } else
        document.getElementById("shareContainer").style.display = "flex";
}


