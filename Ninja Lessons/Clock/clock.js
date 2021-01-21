const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    if(h > 12) {
        h = h-12;
    
    }

    clock.firstElementChild.innerHTML = h+':'+m+':'+s;
    
}








setInterval(tick, 1000);