const shareBtn = document.getElementById("share-btn");


shareBtn.addEventListener("click", () => {
    const shareCard = document.getElementById("share-card");
    shareCard.classList.toggle("hidden");   
})