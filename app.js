const shareButton = document.getElementsByClassName("shareBtn")[0];
const shareContainer = document.getElementById("shareElement");
const profileBlock = document.getElementsByClassName("profileInfoBlock")[0];
const mainContainer = document.getElementById("container");

shareButton.addEventListener("click", displayContainer);


function displayContainer() {
    const computedStyles = window.getComputedStyle(mainContainer);
    const flexDirection = computedStyles.getPropertyValue("flex-direction");
  
    if (flexDirection === "column") {
      // Hide the shareContainer if mainContainer's flex-direction is "column"
      shareContainer.style.display = "none";
    } else if (shareContainer.style.display === "none") {
      shareContainer.style.display = "flex";
      console.log("it works!");
    } else {
        console.log("it doesn't work!");
        shareContainer.style.display = "none";
      }
  }
  