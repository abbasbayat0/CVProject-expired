let magnifier = document.querySelector(".magnifier");
let profileImages = document.querySelectorAll(".clickable");
let blankArea = document.querySelector(".blankArea");
let headImage = document.querySelector(".headImage");

// left side starts

profileImages.forEach(profileImage => {
    profileImage.addEventListener("mouseover", e => {
        magnifier.classList.add("show")
    })
    profileImage.addEventListener("mouseout", e => {
        magnifier.classList.remove("show")
    })
    magnifier.addEventListener("click", e => {
        if (magnifier.classList.contains("show")) {
            blankArea.classList.add("show");
            headImage.classList.add("show")
        }
    })
    blankArea.addEventListener("click", e => {
        if (headImage.classList.contains("show")) {
            blankArea.classList.remove("show");
            headImage.classList.remove("show")
        }
    })
})