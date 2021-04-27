function loadPage(pageID) {
    document.getElementById("bodyContainer").innerHTML = treeData[String(pageID)]
    console.log("Loaded page: " + pageID)
}

function signIn(emailData, passData) {
    var email = emailData || document.getElementById("loginEmail").value
    var pass = passData || document.getElementById("loginPass").value

    if (email == "" || pass =="") {
        return
    } else {
        loadPage("0003")
    }

    console.log("Email: "+email+"\nPass: "+pass)
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
    walletDetailsHolder.style.top = "9.5vh"

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