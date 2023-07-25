/* const shareButton = document.getElementsByClassName("shareBtn")[0];
const profileInfoBlock = document.getElementsByClassName("profileInfoBlock")[0];

const shareContainer = document.getElementById("shareElement");
const mainContainer = document.getElementById("container");

shareButton.addEventListener("click", displayContainer);


function displayContainer() {
    const computedStyles = window.getComputedStyle(mainContainer);
    const flexDirection = computedStyles.getPropertyValue("flex-direction");
    if (flexDirection === "column") {
      // Hide the shareContainer if mainContainer's flex-direction is "column"
      profileInfoBlock.style.display = "none"
      shareContainer.style.display = "none"
      console.log("turn black pls")
    } else if (shareContainer.style.display === "none") {
      shareContainer.style.display = "flex";
      console.log("it works!");
    } else {
        console.log("it doesn't work!");
        shareContainer.style.display = "none";
      }
  }
   */