$('.popover-dismiss').popover({
    trigger: 'focus'
})

var submitButton = document.querySelector("#submit-btn");

function submitMe()
{
    alert("You submitted a search. Results coming up...");
}



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