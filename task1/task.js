const interval = setInterval(() => {
    document.getElementById('timer').textContent = Number(document.getElementById('timer').textContent ) - 1;
    if (Number(document.getElementById('timer').textContent == 0)) {   
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
},1000)