
// Code to make search "submit" button display pop-up

var submitButton = document.querySelector("#submit-btn");

function submitMe()
{
    alert("You submitted a search. Results coming up...");
}

// Code to make titles of recipes get larger and change color

function changeFontColor()
{
    document.getElementById("title1").style.color = "darkblue";
    document.getElementById("title2").style.color = "darkblue";
    document.getElementById("title3").style.color = "darkblue";
}

function changeFontSize()
{
    document.getElementById("title1").style.fontSize = "24px";
    document.getElementById("title2").style.fontSize = "24px";
    document.getElementById("title3").style.fontSize = "24px";
}

function changeColorFontSize()
{
    changeFontColor();
    changeFontSize();
}

// Code to prompt users log in when they press "download recipe"

var downloadbtn = document.querySelector("#download-btn1");

function changeColorBtn()
{
    downloadbtn.style.color = "darkblue";
    downloadbtn.style.fontSize = "18px"
}

function setNormalColorBtn()
{
    downloadbtn.style.color = "white";
    downloadbtn.style.fontSize = "12px";
}

function logInNotice()
{
    alert("Please log in to download this recipe");
}

downloadbtn.addEventListener("click", logInNotice);
downloadbtn.addEventListener("mouseover", changeColorBtn);
downloadbtn.addEventListener("mouseout", setNormalColorBtn);