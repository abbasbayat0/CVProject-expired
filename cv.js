let magnifier = document.querySelector(".magnifier"),
    profileImages = document.querySelectorAll(".clickable"),
    blankArea = document.querySelector(".blankArea"),
    headImage = document.querySelector(".headImage");

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

// progress circules

let progressCirculeOne = document.querySelector(".progressOne"),
    progressCirculeTwo = document.querySelector(".progressTwo"),
    progressOne = document.querySelector(".pOne"),
    progressTwo = document.querySelector(".pTwo");

let startValueTwo = 0,
    endValueTwo = 90;
let secondProgress = setInterval(() => {
    startValueTwo ++;
    progressTwo.textContent = startValueTwo + "%";
    progressCirculeTwo.style.background = `conic-gradient(#ffc107 ${startValueTwo * 3.6}deg, #191923 0deg)`
    if (startValueTwo == endValueTwo) {
        clearInterval(secondProgress)
    }
}, 10);

let startValueOne = 0,
    endValueOne = 100;
let firstProgress = setInterval(() => {
    startValueOne ++;
    progressOne.textContent = startValueOne + "%";
    progressCirculeOne.style.background = `conic-gradient(#ffc107 ${startValueOne * 3.6}deg, #191923 0deg)`
    if (startValueOne == endValueOne) {
        clearInterval(firstProgress)
    }
}, 10);

// progress bar

let main = document.querySelector(".mainInMain"),
    progressBars = document.querySelectorAll(".progressBar");

main.addEventListener("scroll", e => {
    progressBars.forEach(progressBar => {
        progressBar.classList.add("show")
    })
})