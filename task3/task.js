const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function check(id) {
    let check = document.getElementById(id);
    smash(check.className.includes("hole_has-mole"))
}

function hole() {
    document.onclick = function(i) {
            let hole = i.target.id; 
            // console.log(hole); 
            check(hole);
          }
}

function smash(bool) {
    if (bool == true) {
        dead.textContent = Number(dead.textContent) + 1;
        if (dead.textContent == 10) {
            gameResult('Victory!');
    } 
    } else {
        lost.textContent = Number(lost.textContent) + 1;
        if (lost.textContent == 5) {
            gameResult('Defeat!');
    }
    }
}

function gameResult(result) {
    alert(result);
    dead.textContent = 0;
    lost.textContent = 0;
}
hole()