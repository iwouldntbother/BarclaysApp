loadPage("0000")

function loadPage(pageID) {
    document.getElementById("bodyContainer").innerHTML = treeData[String(pageID)]
    console.log("Loaded page: " + pageID)
}

function signIn(emailData, passData) {
    var email = emailData || document.getElementById("loginEmail").value
    var pass = passData || document.getElementById("loginPass").value

    if (email == "") {
        document.getElementById("loginEmail").style.border = "red solid 0.5vw"
    } else if (pass == "") {
        document.getElementById("loginPass").style.border = "red solid 0.5vw"
    } else {
        loadPage("0001")
    }

    console.log("Email: "+email+"\nPass: "+pass)
}

function accountSelection(type) {
    if (type == "normal") {
        loadPage("0002");
    } else if (type == "simplified") {
        loadPage("0004");
    } else if (type == "kids") {
        loadPage("0003");
    } else {
        console.log("Error selection not valid")
    }
}

function cardIsolation() {
    var hider = document.getElementById("contentHider0002")
    var walletDetailsHolder = document.getElementById("walletDetailsHolder0002")
    var walletButtonHolders = document.getElementsByClassName("walletButton0002")

    hider.style.opacity = 1;
    walletDetailsHolder.style.top = "35vh"

    for (var i=0; i<walletButtonHolders.length; i++) {
        walletButtonHolders[i].style.marginTop = "60vw"
    }
}

function cardDispersion() {
    var hider = document.getElementById("contentHider0002")
    var walletDetailsHolder = document.getElementById("walletDetailsHolder0002")
    var walletButtonHolders = document.getElementsByClassName("walletButton0002")

    hider.style.opacity = 0;
    walletDetailsHolder.style.top = "6vh"

    for (var i=0; i<walletButtonHolders.length; i++) {
        walletButtonHolders[i].style.marginTop = "0vw"
    }
}

var walletOpen = false;

function walletToggle() {
    var hider = document.getElementById("contentHider0002")
    var walletHolder = document.getElementById("walletHolder0002")

    if (walletOpen) {
        cardDispersion();
        hider.style.pointerEvents = "none";
        walletHolder.style.pointerEvents = "all";
        walletOpen = false;
    } else {
        cardIsolation();
        hider.style.pointerEvents = "all";
        walletHolder.style.pointerEvents = "none";
        walletOpen = true;
    }

}

// window.addEventListener("load",function() {
//     setTimeout(function(){
//         // This hides the address bar:
//         window.scrollTo(0, 1);
//     }, 0);
// });

slideUpOpen = false;

function preLoadSlideUp(page) {
    var slideUpHolder = document.getElementById("slideUpHolder")

    if (page == "settings") {
        // load Settings page
    } else if (page == "contacts") {
        // load contacts page
    } else if (page == "stats") {
        // load stats page
    } else {
        console.log("PreLoad failed: Page not recognised!")
    }

}

function loadSlideUp(page) {
    var slideUpHolder = document.getElementById("slideUpHolder")
    var slideUpContainer = document.getElementById("slideUpContainer")

    if (slideUpOpen) {
        slideUpHolder.style.top = "100vh";
        preLoadSlideUp(page);
        slideUpHolder.style.top = "5vh";
        slideUpContainer.style.pointerEvents = "all";
        slideUpOpen = true;
    } else {
        slideUpHolder.style.top = "5vh";
        slideUpContainer.style.pointerEvents = "all";
        slideUpOpen = true;
    }
}

// Slide Up Handle

// var posY1 = 0;
// var posY2 = 0;
// var posInitial;
// var posFinal;
// var threshold = 10;
// var handle = document.getElementsByClassName("handle")[0];
// var slideUpHolder = document.getElementById("slideUpHolder");
// // Mouse events
// handle.onmousedown = dragStart;
  
// // Touch events
// handle.addEventListener('touchstart', dragStart);
// handle.addEventListener('touchend', dragEnd);
// handle.addEventListener('touchmove', dragAction);


// function dragStart (e) {
//     e = e || window.event;
//     e.preventDefault();
//     posInitial = slideUpHolder.offsetTop;
//     console.log(posInitial)
    
//     if (e.type == 'touchstart') {
//       posY1 = e.touches[0].clientY;
//     } else {
//       posY1 = e.clientY;
//       document.onmouseup = dragEnd;
//       document.onmousemove = dragAction;
//     }
//   }

//   function dragAction (e) {
//     e = e || window.event;
    
//     if (e.type == 'touchmove') {
//       posY2 = posY1 - e.touches[0].clientY;
//       posY1 = e.touches[0].clientY;
//     } else {
//       posY2 = posY1 - e.clientY;
//       posY1 = e.clientY;
//     }
//     slideUpHolder.style.top = (slideUpHolder.offsetTop - posY2) + "px";
//     console.log((slideUpHolder.offsetTop - posY2) + "px")
//   }
  
//   function dragEnd (e) {
//     console.log("Drag End")
//     posFinal = slideUpHolder.offsetTop;
//     console.log(posFinal - posInitial)
//     if (posFinal - posInitial > threshold) {
//         slideUpHolder.style.top = "100vh";
//     } else {
//         slideUpHolder.style.top = (posInitial) + "px";
//     }

//     document.onmouseup = null;
//     document.onmousemove = null;
//   }