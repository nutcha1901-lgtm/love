function showLove() {

    const message = document.getElementById("message");

   message.innerHTML = "ขอบคุณที่เข้ามาเป็นความสุขในชีวิตของเค้านะตุ้ย <br>" + "ถึงเค้าอาจจะไม่ใช่คนที่ดีที่สุด<br>" + "แต่เค้าจะรักและดูแลตุ้ยให้ดีที่สุดนะ<br>" + "ขอโทษที่ชวนทะเลาะบ่อยนะ 🥺<br>" + "รักที่สุดเลยยยย ❤️🥰";
    createHearts();
}

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        heart.style.transition = "4s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)`;
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}