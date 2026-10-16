const voice = document.getElementById("voice");
const begin = document.getElementById("begin");
const enter = document.getElementById("continue");
const message = document.getElementById("message");

begin.addEventListener("click", async () => {
    begin.style.display = "none";
    message.textContent = "Please listen carefully..";

    try {
        await voice.play();
    } catch (error) {
        message.textContent = "Please try again.";
        begin.style.display = "inline-block";
    }
});

voice.addEventListener("ended", () => {
    message.textContent = "Oh, do be careful";
    enter.style.display = "inline-block";
});

enter.addEventListener("click", () => {
    window.location.href = "index.html";
});