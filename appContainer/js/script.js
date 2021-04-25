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