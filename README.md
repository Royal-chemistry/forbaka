# 💖 For My Love 💖

This is a cute interactive card for my love! Click the *heart* to reveal a special message. Hearts will also *fall* in the background for a romantic touch.  

## 🌟 Live Demo  
You can view this card live on *GitHub Pages* (after enabling it in repo settings).  

## 🎨 Features  
- ❤ Click the *heart* to reveal a sweet message.  
- 🎉 *Falling hearts animation* for a romantic effect.  
- 🎀 Simple, cute, and responsive design.  

---

## 🛠 How to Use  
1. Copy and paste the following code into an **index.html** file.  
2. Upload it to a *GitHub repository*.  
3. Enable *GitHub Pages* in the repo settings.  
4. Share the link with your love! 💖  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For My Love</title>
    <style>
        body {
            background-color: #ffdde1;
            text-align: center;
            font-family: Arial, sans-serif;
            overflow: hidden;
        }
        h1 {
            color: #d63384;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            display: inline-block;
            margin-top: 50px;
            position: relative;
        }
        .heart {
            font-size: 50px;
            color: red;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
        }
        .heart:hover {
            transform: scale(1.2);
        }
        .message {
            display: none;
            font-size: 18px;
            color: #d63384;
            margin-top: 15px;
        }
        /* Falling hearts */
        .falling-heart {
            position: absolute;
            font-size: 20px;
            color: red;
            animation: fall 4s linear infinite;
        }
        @keyframes fall {
            0% { transform: translateY(-10vh); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    </style>
</head>
<body>

    <h1>For My Love ❤</h1>
    <div class="card">
        <div class="heart" onclick="showMessage()">❤</div>
        <p class="message">I love you so much, my princess! 💖</p>
    </div>

    <script>
        function showMessage() {
            document.querySelector(".message").style.display = "block";
        }

        function createFallingHeart() {
            const heart = document.createElement("div");
            heart.innerHTML = "❤";
            heart.classList.add("falling-heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);

            setTimeout(() => { heart.remove(); }, 4000);
        }

        setInterval(createFallingHeart, 500);
    </script>

</body>
</html>
