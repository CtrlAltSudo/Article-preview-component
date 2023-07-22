const shareButton = document.getElementsByClassName("shareBtn")[0];
const shareContainer = document.getElementById("shareElement");


shareButton.addEventListener("click", displayContainer);


function displayContainer(){
    if (document.getElementById("shareElement").style.display === "none"){
        document.getElementById("shareElement").style.display = "flex"
        console.log("it works!")
    }  else {
        console.log("it doesn't work!")
        document.getElementById("shareElement").style.display = "none"; 
    }

}
