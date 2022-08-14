const img = document.getElementById('cookie')
const counter = document.getElementById('clicker__counter')
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1
    if (Number(counter.textContent) % 2 == 1) {
        img.width += 10;
        img.height += 10;
    } else {
        img.width -= 10;
        img.height -= 10;
    }
}