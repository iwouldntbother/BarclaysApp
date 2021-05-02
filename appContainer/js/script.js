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