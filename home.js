var score = 0, highscore = 0;

window.onload = (e) => {
    generateMatrix();
}

function generateMatrix() {
    for(let i=0; i<4; ++i) {
        for(let j=0; j<4; ++j) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", (4*i+j));
            newDiv.setAttribute("class", "smallBox");
            document.getElementById("outerGrid").appendChild(newDiv);
        }
    }

    generateNumbersAt2RandomPositions();
}

function generateNumbersAt2RandomPositions() {
    let arr1 = [];
    for(let i=0; i<16; ++i) 
        arr1.push(i);

    let pos1 = generateRandomIndex(arr1);
    
    arr1 = [];
    for(let i=0; i<16; ++i) 
        if(i===pos1) continue;
        else arr1.push(i);

    let pos2 = generateRandomIndex(arr1);

    document.getElementById(pos1).innerHTML = 2;
    document.getElementById(pos2).innerHTML = 2;
}

function generateRandomIndex(arr) {
    let l = arr.length;

    return arr[parseInt(Math.random()*100)%l];
}

window.addEventListener("keydown", (event) => {
    // console.log(event.key);

    let keyName = event.key;

    if(checkEmpty()) {
        alert("Game Over! No Empty Cells!");
        return;
    }

    if(check2048()) {
        alert("You Won The Game!");
        return;
    }

    if(keyName === 'ArrowUp') 
        shiftUp();
    else if(keyName === 'ArrowDown')
        shiftDown();
    else if(keyName === 'ArrowLeft')
        shiftLeft();
    else if(keyName === 'ArrowRight')
        shiftRight();

    document.getElementById("enterScore").innerHTML = score;
    if(score > highscore) {
        highscore = score;
        document.getElementById("enterHighScore").innerHTML = highscore;
    }
})

function shiftUp() {

    let flag=false;
    
    for(let j=0; j<4; ++j) {
        let dq = [], lastChar1=0, lastChar2=0;

        for(let i=0; i<4; ++i)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar1 = i;

        for(let i=0; i<4; ++i)
            if(document.getElementById(i*4+j).innerHTML != '') {
                let valToPush = parseInt(document.getElementById(i*4+j).innerHTML);
                if(dq.length>0 && dq[dq.length-1] === valToPush) {
                    dq.pop();
                    score += 2*valToPush;
                    dq.push(2*valToPush);
                }
                else 
                    dq.push(valToPush);
            }
        
        for(let i=0; i<4; ++i) 
            document.getElementById(i*4+j).innerHTML = dq.length === 0 ? '' : dq.shift();

        for(let i=0; i<4; ++i)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar2 = i;
        
        if(flag === false && lastChar1 > lastChar2)
            flag = true;

        // console.log("lastChar1: "+lastChar1+" lastChar2: "+lastChar2);
    }

    if(flag === false) return;

    let arr = [];

    for(let i=0; i<16; ++i)
        if(document.getElementById(i).innerHTML === '')
            arr.push(i);

    let pos = generateRandomIndex(arr);

    document.getElementById(pos).innerHTML = 2;
}

function shiftDown() {
    
    let flag=false;
    
    for(let j=0; j<4; ++j) {
        let dq = [], lastChar1=3, lastChar2=3;

        for(let i=3; i>=0; --i)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar1 = i;

        for(let i=3; i>=0; --i)
            if(document.getElementById(i*4+j).innerHTML != '') {
                let valToPush = parseInt(document.getElementById(i*4+j).innerHTML);
                if(dq.length>0 && dq[dq.length-1] === valToPush) {
                    dq.pop();
                    score += 2*valToPush;
                    dq.push(2*valToPush);
                }
                else 
                    dq.push(valToPush);
            }
        
        for(let i=3; i>=0; --i) 
            document.getElementById(i*4+j).innerHTML = dq.length === 0 ? '' : dq.shift();

        for(let i=3; i>=0; --i)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar2 = i;
        
        if(flag === false && lastChar1 < lastChar2)
            flag = true;

        // console.log("lastChar1: "+lastChar1+" lastChar2: "+lastChar2);
    }

    if(flag === false) return;

    let arr = [];

    for(let i=0; i<16; ++i)
        if(document.getElementById(i).innerHTML === '')
            arr.push(i);

    let pos = generateRandomIndex(arr);

    document.getElementById(pos).innerHTML = 2;
}

function shiftLeft() {

    let flag=false;
    
    for(let i=0; i<4; ++i) {
        let dq = [], lastChar1=0, lastChar2=0;

        for(let j=0; j<4; ++j)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar1 = j;

        for(let j=0; j<4; ++j)
            if(document.getElementById(i*4+j).innerHTML != '') {
                let valToPush = parseInt(document.getElementById(i*4+j).innerHTML);
                if(dq.length>0 && dq[dq.length-1] === valToPush) {
                    dq.pop();
                    score += 2*valToPush;
                    dq.push(2*valToPush);
                }
                else 
                    dq.push(valToPush);
            }
        
        for(let j=0; j<4; ++j) 
            document.getElementById(i*4+j).innerHTML = dq.length === 0 ? '' : dq.shift();

        for(let j=0; j<4; ++j)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar2 = j;
        
        if(flag === false && lastChar1 > lastChar2)
            flag = true;

        // console.log("lastChar1: "+lastChar1+" lastChar2: "+lastChar2);
    }

    if(flag === false) return;

    let arr = [];

    for(let i=0; i<16; ++i)
        if(document.getElementById(i).innerHTML === '')
            arr.push(i);

    let pos = generateRandomIndex(arr);

    document.getElementById(pos).innerHTML = 2;
}

function shiftRight() {

    let flag=false;
    
    for(let i=0; i<4; ++i) {
        let dq = [], lastChar1=3, lastChar2=3;

        for(let j=3; j>=0; --j)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar1 = j;

        for(let j=3; j>=0; --j)
            if(document.getElementById(i*4+j).innerHTML != '') {
                let valToPush = parseInt(document.getElementById(i*4+j).innerHTML);
                if(dq.length>0 && dq[dq.length-1] === valToPush) {
                    dq.pop();
                    score += 2*valToPush;
                    dq.push(2*valToPush);
                }
                else 
                    dq.push(valToPush);
            }
        
        for(let j=3; j>=0; --j) 
            document.getElementById(i*4+j).innerHTML = dq.length === 0 ? '' : dq.shift();

        for(let j=3; j>=0; --j)  
            if(document.getElementById(i*4+j).innerHTML != '')
                lastChar2 = j;
        
        if(flag === false && lastChar1 < lastChar2)
            flag = true;

        // console.log("lastChar1: "+lastChar1+" lastChar2: "+lastChar2);
    }

    if(flag === false) return;

    let arr = [];

    for(let i=0; i<16; ++i)
        if(document.getElementById(i).innerHTML === '')
            arr.push(i);

    let pos = generateRandomIndex(arr);

    document.getElementById(pos).innerHTML = 2;
}

function newGame() {
    score = 0;
    document.getElementById("enterScore").innerHTML = score;
    deleteMatrix();
    generateMatrix();
}

function deleteMatrix() {
    document.getElementById("outerGrid").innerHTML = '';
}

function checkEmpty() {
    for(let i=0; i<16; ++i) 
        if(document.getElementById(i).innerHTML === '')
            return false;
    return true;
}

function check2048() {
    for(let i=0; i<16; ++i) 
        if(document.getElementById(i).innerHTML === '2048')
            return true;
    return false;
}