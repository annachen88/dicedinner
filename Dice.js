/*		4個換背景按鈕	*/
function chgBgLvdr() {
    document.body.style.backgroundColor = "#FAE5D3";
}

function chgBgDrtaq() {
    document.body.style.backgroundColor = "#D6EAF8";
}

function chgBgWsab() {
    document.body.style.backgroundColor = "#A8FBD6";
}

function chgBgBlywd() {
    document.body.style.backgroundColor = "#DEB887";
}

function output() {
    var sourceArea = document.getElementById("source_code");
    var editArea = document.getElementById("edit_area");
    sourceArea.innerHTML = editArea.innerHTML;
    fds[fds.length] = editArea.innerHTML;
    document.getElementById("now-string").innerHTML = fds;
}

function washTheme() {
    var second = new Date().getSeconds();
    if ((second % 4) == 0) {
        document.body.style.backgroundColor = "#FAE5D3";
    } else if ((second % 4) == 1) {
        document.body.style.backgroundColor = "#D6EAF8";
    } else if ((second % 4) == 2) {
        document.body.style.backgroundColor = "#A8FBD6";
    } else if ((second % 4) == 3) {
        document.body.style.backgroundColor = "#DEB887";
    }
}
//加入選擇
var myArray = [];

function pushData() {
    var inputText = document.getElementById('inputText').value;
    myArray.push(inputText);
    var pval = "";
    for (i = 0; i < myArray.length; i++) {
        pval = pval + myArray[i] + "<br/>";
    }
    document.getElementById('pText').innerHTML = pval;

}

function diceClick() {
    var random = myArray[Math.floor((Math.random() * (myArray.length)))];
    document.getElementById("Dice-rdm").innerHTML = random;
    alert("Your Dinner is " + random);
}

//document.getElementById("Dice-rdm").innerHTML = myArray[random];
