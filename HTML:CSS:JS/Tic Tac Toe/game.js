
var lastUsed = "O";

function run(num) {
    let id = "box"+num;
    let present = lastUsed === "X" ? "O" : "X";
    let content = document.getElementById(id).firstChild.textContent;
    if(content === "-") {
        document.getElementById(id).firstChild.textContent = present;
        lastUsed = present;
    } 

    let winner = checkForWin();
    if(winner != "") {
        document.getElementById("winner").innerHTML += winner+", ";
        clearAll();
    }
}

function checkForWin() {
    let ar = [['','',''],['','',''],['','','']]
    let num = 1;

    // fill ar
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            let id = "box"+num;
            ar[i][j] = document.getElementById(id).firstChild.textContent;
            num++;
        }
    }

    // Check all winning conditions:
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (ar[i][0] === ar[i][1] && ar[i][1] === ar[i][2] && ar[i][0] !== "-") {
        return ar[i][0]; // Return the winning symbol
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (ar[0][j] === ar[1][j] && ar[1][j] === ar[2][j] && ar[0][j] !== "-") {
        return ar[0][j]; // Return the winning symbol
        }
    }

    // Check diagonals
    if (ar[0][0] === ar[1][1] && ar[1][1] === ar[2][2] && ar[0][0] !== "-") {
        return ar[0][0]; // Return the winning symbol
    }
    if (ar[0][2] === ar[1][1] && ar[1][1] === ar[2][0] && ar[0][2] !== "-") {
        return ar[0][2]; // Return the winning symbol
    }

    // If no winner, return ""
    return "";
}

function clearAll() {
    for(let num=1;num<=9;num++) {
        let id = "box"+num;
        document.getElementById(id).firstChild.textContent = "-";
    }
    lastUsed = "O";
}