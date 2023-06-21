const magnifier = document.querySelector(".magnifier"),
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

const progressCirculeOne = document.querySelector(".progressOne"),
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

const main = document.querySelector(".mainInMain"),
    progressBars = document.querySelectorAll(".progressBar");

main.addEventListener("scroll", e => {
    progressBars.forEach(progressBar => {
        progressBar.classList.add("show")
    })
})

// typing effect 

const typedTextSpan = document.querySelector(".type"),
      cursorSpan = document.querySelector(".cursor"),
      textArray = ["an engineer.", "a teacher."];

let textArrayIndex = 0,
    charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
} 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, 2000);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, 100);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex=0;
    setTimeout(type, 1300);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, 2250);
});

// right side

const openButton = document.querySelector(".openButton"),
      rightSide = document.querySelector(".rightSide"),
      blank = document.querySelector(".blank")

openButton.addEventListener("click", e => {
    if (rightSide.classList.contains("show")) {
        rightSide.classList.remove("show");
        blank.classList.remove("show")
    }else{
        rightSide.classList.add("show");
        blank.classList.add("show")
    }
    blank.addEventListener("click", e => {
        rightSide.classList.remove("show");
        blank.classList.remove("show")
    })
})

// navigation

const all = document.querySelector(".allLink"),
      ed = document.querySelector(".ed"),
      edLink = document.querySelector(".educationsLink"),
      int = document.querySelector(".int"),
      intLink = document.querySelector(".interestsLink"),
      ex = document.querySelector(".ex"),
      exLink = document.querySelector(".experiencesLink"),
      pu = document.querySelector(".pu"),
      puLink = document.querySelector(".publicationsLink"),
      pr = document.querySelector(".pr"),
      prLink = document.querySelector(".projectsLink"),
      or = document.querySelector(".or"),
      orLink = document.querySelector(".organizationsLink"),
      mailToMe = document.querySelector(".mailToMe"),
      mailToMeLink = document.querySelector(".mailToMeLink"),
      rightSideInfo = document.querySelector(".rightSideInfo"),
      middleSide = document.querySelector(".middleSide"),
      sleep = document.querySelector(".sleep");

let num = 0;

all.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            middleSide.scrollTo({top:0})
            ed.style.display = null;
            ed.previousElementSibling.style.display = null;
            rightSideInfo.innerHTML = "<p>H</br>o</br>m</br>e</p>";
            int.style.display = null;
            int.previousElementSibling.style.display = null;
            ex.style.display = null;
            ex.previousElementSibling.style.marginTop = null;
            ex.previousElementSibling.style.display = null;
            pu.style.display = null;
            pu.previousElementSibling.style.marginTop = null;
            pu.previousElementSibling.style.display = null;
            pr.style.display = null;
            pr.previousElementSibling.style.marginTop = null;
            pr.previousElementSibling.style.display = null;
            or.style.display = null;
            or.previousElementSibling.style.marginTop = null;
            or.previousElementSibling.style.display = null;
            mailToMe.style.display = null;
            mailToMe.previousElementSibling.style.marginTop = null;
            mailToMe.previousElementSibling.style.display = null;
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

edLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            ed.style.display = null;
            ed.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            rightSideInfo.innerHTML = "<p>E</br>d</br>u</br>c</br>a</br>t</br>i</br>o</br>n</br>s</p>";
            middleSide.scrollTo({top:380});
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

intLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            int.style.display = null;
            int.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            rightSideInfo.innerHTML = "<p>I</br>n</br>t</br>e</br>r</br>e</br>s</br>t</br>s</p>";
            middleSide.scrollTo({top:380});
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

exLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            ex.previousElementSibling.style.marginTop = -80 + "px";
            ex.style.display = null;
            ex.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            middleSide.scrollTo({top:380});
            rightSideInfo.innerHTML = "<p>E</br>x</br>p</br>e</br>r</br>i</br>e</br>n</br>c</br>e</br>s</p>";
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

puLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            pu.previousElementSibling.style.marginTop = -120 + "px";
            pu.style.display = null;
            pu.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            middleSide.scrollTo({top:380});
            rightSideInfo.innerHTML = "<p>P</br>u</br>b</br>l</br>i</br>c</br>a</br>t</br>i</br>o</br>n</br>s</p>";
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

prLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            pr.previousElementSibling.style.marginTop = -160 + "px";
            pr.style.display = null;
            pr.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            middleSide.scrollTo({top:380});
            rightSideInfo.innerHTML = "<P>P</br>r</br>o</br>j</br>e</br>c</br>t</br>s</p>";
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";        
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
    })

orLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            middleSide.scrollTo({top:380});
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            or.previousElementSibling.style.marginTop = -200 + "px";
            or.style.display = null;
            or.previousElementSibling.style.display = null;
            mailToMe.style.display = "none";
            mailToMe.previousElementSibling.style.display = "none";
            rightSideInfo.innerHTML = "<p>O</br>r</br>g</br>a</br>n</br>i</br>z</br>a</br>t</br>i</br>o</br>n</br>s</p>";
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})

mailToMeLink.addEventListener("click", e => {
    if(!sleep.classList.contains("show")){
        sleep.classList.add("show");
        setTimeout(() => {
            middleSide.scrollTo({top:380});
            rightSide.classList.remove("show");
            blank.classList.remove("show");
            mailToMe.previousElementSibling.style.marginTop = -290 + "px";
            mailToMe.style.display = null;
            mailToMe.previousElementSibling.style.display = null;
            or.style.display = "none";
            or.previousElementSibling.style.display = "none";
            rightSideInfo.innerHTML = "<p>E</br>m</br>a</br>i</br>l";
            int.style.display = "none";
            int.previousElementSibling.style.display = "none";
            ex.style.display = "none";
            ex.previousElementSibling.style.display = "none";
            pu.style.display = "none";
            pu.previousElementSibling.style.display = "none";
            pr.style.display = "none";
            pr.previousElementSibling.style.display = "none";
            ed.style.display = "none";
            ed.previousElementSibling.style.display = "none";
        }, 1000)
        setTimeout(() => {
            sleep.classList.remove("show");
        }, 1100);
    }
})