canvas = document.getElementById('lab');
ctx = canvas.getContext('2d');

class Shooty {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        let lastTime = null;
        this.callback = (ms) => {
            if (lastTime !== null) {
                const diff = ms - lastTime;
                this.update(diff / 1000);
            }
            lastTime = ms;
            requestAnimationFrame(this.callback);
        };
    }
    update(dt) {
        const cvs = this.canvas
        const ball = this.ball;
    }
}

const circle = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
}


canvas.addEventListener('click', event => {
    const moux = event.clientX;
    const mouy = event.clientY;
    circle(ctx, moux, mouy);
    
});


