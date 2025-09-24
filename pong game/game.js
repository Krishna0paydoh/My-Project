const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const paddleWidth = 14;
const paddleHeight = 100;
const paddleTop = 20;
const paddleMargin = 16;
const ballRadius = 12;

const player = {
    x: paddleMargin,
    y: canvas.height / 2 - paddleHeight / 2,
    w: paddleWidth,
    h: paddleHeight,
    a: paddleTop,
    color: '#52e3c6'
};

const ai = {
    x: canvas.width - paddleMargin - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    w: paddleWidth,
    h: paddleHeight,
    color: '#f25f5c',
    speed: 4.5
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: ballRadius,
    speed: 6,
    dx: 6 * (Math.random() > 0.5 ? 1 : -1),
    dy: 4 * (Math.random() > 0.5 ? 1 : -1),
    color: '#ffe066'
};

let animationId;

function drawPaddle(p) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.w, p.h);
}

function drawBall(b) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
    ctx.closePath();
}

function drawNet() {
    ctx.strokeStyle = "#fff3";
    ctx.lineWidth = 4;
    for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width / 2, y + 16);
        ctx.stroke();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNet();
    drawPaddle(player);
    drawPaddle(ai);
    drawBall(ball);
}

function moveAI() {
    const target = ball.y - ai.h / 2;
    if (ai.y < target) {
        ai.y += ai.speed;
        if (ai.y > target) ai.y = target;
    } else if (ai.y > target) {
        ai.y -= ai.speed;
        if (ai.y < target) ai.y = target;
    }
    ai.y = Math.max(0, Math.min(canvas.height - ai.h, ai.y));
}

function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y - ball.r < 0) {
        ball.y = ball.r;
        ball.dy *= -1;
    } else if (ball.y + ball.r > canvas.height) {
        ball.y = canvas.height - ball.r;
        ball.dy *= -1;
    }

    if (
        ball.x - ball.r < player.x + player.w &&
        ball.y > player.y &&
        ball.y < player.y + player.h
    ) {
        ball.x = player.x + player.w + ball.r;
        ball.dx *= -1;
        let collidePoint = ball.y - (player.y + player.h / 2);
        collidePoint = collidePoint / (player.h / 2);
        let angle = collidePoint * (Math.PI / 4);
        ball.dy = ball.speed * Math.sin(angle);
        ball.dx = ball.speed * Math.cos(angle);
    }

    if (
        ball.x + ball.r > ai.x &&
        ball.y > ai.y &&
        ball.y < ai.y + ai.h
    ) {
        ball.x = ai.x - ball.r;
        ball.dx *= -1;
        let collidePoint = ball.y - (ai.y + ai.h / 2);
        collidePoint = collidePoint / (ai.h / 2);
        let angle = collidePoint * (Math.PI / 4);
        ball.dy = ball.speed * Math.sin(angle);
        ball.dx = -ball.speed * Math.cos(angle);
    }

    if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) {
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = ball.speed * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = ball.speed * (Math.random() > 0.5 ? 1 : -1) * 0.7;
}

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    player.y = mouseY - player.h / 2;
    player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));
});

function loop() {
    draw();
    moveAI();
    updateBall();
    animationId = requestAnimationFrame(loop);
}

loop();