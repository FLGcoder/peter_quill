/* ======================= Música ======================= */

const btn = document.getElementById("btnMusica");
const audio = document.getElementById("musica");

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸ Pause";
    } else {
        audio.pause();
        btn.innerText = "▶ Play";
    }
});

/* ======================= ------ ======================= */