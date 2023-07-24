const shareButton = document.getElementsByClassName("shareBtn")[0];
const shareContainer = document.getElementById("shareElement");
const profileBlock = document.getElementsByClassName("profileInfoBlock")[0];
const profileBlockImg = document.getElementsByClassName("proImg")[0];
const profileBlockInfo = document.getElementsByClassName("info")[0];
const profileContainer = document.getElementById("profileContainer");
const mainContainer = document.getElementById("container");

shareButton.addEventListener("click", displayContainer);


function displayContainer() {
    const computedStyles = window.getComputedStyle(mainContainer);
    const flexDirection = computedStyles.getPropertyValue("flex-direction");
    if (flexDirection === "column") {
      // Hide the shareContainer if mainContainer's flex-direction is "column"
      profileBlockImg.style.display = "none";
      profileBlockInfo.style.display = "none";
      profileContainer.style.backgroundColor = "#48556a";
      profileBlock.style.flexDirection = "row-reverse";

      console.log("turn black pls")
    } else if (shareContainer.style.display === "none") {
      shareContainer.style.display = "flex";
      console.log("it works!");
    } else {
        console.log("it doesn't work!");
        shareContainer.style.display = "none";
      }
  }
  