const d = document.getElementById('dead');
const l = document.getElementById('lost');

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
        d.textContent = Number(d.textContent) + 1;
        if (d.textContent == 10) {
            alert('Victory!');
            d.textContent = 0;
            l.textContent = 0;
    } 
    } else {
        l.textContent = Number(l.textContent) + 1;
        if (l.textContent == 5) {
            alert('Defeat!');
            d.textContent = 0;
            l.textContent = 0;
    }
    }
}

hole()