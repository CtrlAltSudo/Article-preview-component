function toggleShare(){
  const shareButton = document.getElementById("shareContainer");
  if (shareButton.style.display === "none"){
    shareButton.style.display = "flex"
  } else {
    shareButton.style.display = "none"
  }
};
