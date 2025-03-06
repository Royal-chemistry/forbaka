function showMessage() {
    document.querySelector(".message").style.display = "block";
}

// Falling hearts animation
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.fontSize = "20px";
    heart.style.top = "-10px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animation = "fall 4s linear infinite";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 4000);
}

setInterval(createFallingHeart, 500);
