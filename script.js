document.addEventListener("DOMContentLoaded", function() {
    // Таймер обратного отсчета
    const countdown = document.getElementById("countdown");
    const weddingDate = new Date("2025-08-25T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference < 0) {
            countdown.innerHTML = "Событие уже состоялось!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Плавная прокрутка к секциям
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
