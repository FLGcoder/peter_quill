/* ======================= Música ======================= */

const btn = document.getElementById("btnMusica");
const audio = document.getElementById("musica");

if (btn && audio) {
    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            btn.innerText = "⏸ Pause";
        } else {
            audio.pause();
            btn.innerText = "▶ Play";
        }
    });
}

/* ======================= Login ======================= */

const loginForm = document.querySelector('#body-login form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('floatingInput').value;
        const senha = document.getElementById('floatingPassword').value;

        if (email === 'admin@gmail.com' && senha === '1234') {
            window.location.href = 'home.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    });
}