const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

function openModal(type) {
    clickSound.play();
    clickSound.currentTime = 0;
    let content = "";

    if (type === "juegos") {
        content = `
        <h3>🎮 Mis juegos favoritos</h3>

        <div class="games-grid">
            <div class="game-card" onclick="showGame('osu')">
                <img src="https://imgbin.com/free-png/osu-logo/png">
                <span>OSU!</span>
            </div>

            <div class="game-card" onclick="showGame('satisfactory')">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg">
                <span>Satisfactory</span>
            </div>

            <div class="game-card" onclick="showGame('lol')">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/League_of_Legends_logo.png">
                <span>League of Legends</span>
            </div>

            <div class="game-card" onclick="showGame('minecraft')">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png">
                <span>Minecraft</span>
            </div>

            <div class="game-card" onclick="showGame('gta')">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png">
                <span>GTA V</span>
            </div>

            <div class="game-card" onclick="showGame('marvel')">
                <img src="https://www.3djuegos.com/juegos/marvel-rivals/caratula/">
                <span>Marvel Rivals</span>
            </div>
        </div>
    `;
    }

    if (type === "sobreMi") {
        content = `
      <h3>👤 Sobre mí</h3>
      <p>
        Mi nombre es <strong>Hector Aaron Leija Zavala</strong>.  
        Soy una persona curiosa, me gusta aprender cosas nuevas,
        especialmente relacionadas con la tecnología y los videojuegos.
      </p>
      <p>
        En mi tiempo libre disfruto jugar videojuegos, deportes en especial el voleybol me considero un poco adicto a ese deporte, escuchar música,
        aprender programación y mejorar mis habilidades poco a poco.
      </p>
      <p>
        Me considero alguien responsable, creativo y con muchas ganas
        de crecer tanto personal como profesionalmente.
      </p>
    `;
    }

    if (type === "estudios") {
        content = `
      <h3>📚 Estudios</h3>
      <p>
      Graduado como Técnico en Programación en el año 2023 de el Bachillerato CBTis 234.
      </p>
      <p>
        Actualmente estoy estudiando la carrera de:
      </p>
      <p><strong>Ingeniería en Sistemas Computacionales / Programación</strong></p>

      <p>
        📍 Institución: <strong>Intituto Tecnologico Nacional De Nuevo Laredo</strong><br>
        📘 Semestre: <strong>6to semestre</strong>
      </p>

      <p>
        Me estoy formando en áreas como desarrollo web,
        programación orientada a objetos y lógica de programación.
      </p>
      <p>  
        Busco desarrollarme como programador, adquirir experiencia real
        en proyectos y eventualmente especializarme en desarrollo de
        aplicaciones de escritorio o móviles.
      </p>
    `;
    }

    if (type === "timeline") {
        content = `
        <div class="timeline">

    <div class="timeline-item">
      <span class="timeline-year">2020</span>
      <div class="timeline-content">
        <h3>Inicio en Programación</h3>
        <p>
          Primer contacto con la programación durante el bachillerato.
          Aprendí lógica básica y fundamentos del desarrollo.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <span class="timeline-year">2023</span>
      <div class="timeline-content">
        <h3>Técnico en Programación</h3>
        <p>
          Graduado como Técnico en Programación con habilidades para crear
          páginas web, aplicaciones móviles y de escritorio.
        </p>
        <p>
          Ingreso al Tecnológico como Ingeniero en Sistemas Computacionales,
          reforzando conocimientos en HTML, CSS, JavaScript, C#, estructuras
          de datos y bases de datos.
        </p>
      </div>
    </div>

    <div class="timeline-item present">
  <span class="timeline-year">Presente</span>
  <div class="timeline-content">
    <h3>🎓 Ingeniería en Sistemas Computacionales</h3>
    <p>
      Actualmente cursando el <strong>6to semestre</strong> de la carrera,
      fortaleciendo conocimientos teóricos y prácticos en áreas clave.
    </p>
    <ul>
      <li>Lenguajes y Autómatas</li>
      <li>Redes Computacionales</li>
      <li>Taller de Sistemas Operativos</li>
      <li>Lenguaje de Interfaz</li>
    </ul>
  </div>
</div>


  </div>
      `;
    }

    if (type === "contacto") {
        content = `
        <h3>📬 Contacto</h3>
        <p>Sígueme o contáctame en mis redes:</p>

        <h4>💬 Instagram</h4>
        <div class="instagram-profile ig-premium" onclick="openInstagram()">
            <div class="ig-ring">
                <img src="https://i.imgur.com/obsuT25.jpeg" alt="Instagram Avatar">
            </div>

            <div class="ig-info">
                <strong>@leija.chi</strong>
                <p>Instagram</p>
            </div>
        </div>
        <hr style="margin:20px 0; opacity:.3">

        <h4>💬 Discord</h4>
        <div id="discordProfile">
            Cargando perfil...
        </div>

        <button class="copy-btn" onclick="copyDiscord()">
            📋 Copiar Discord
        </button>
      `;
        setTimeout(loadDiscordProfile, 100);
        setTimeout(startDiscordLive, 100);
    }

    if (type === "musica") {
        content = `
        <h3>🎵 Mi música favorita</h3>
        <p>Disfruto de una variedad de géneros musicales, incluyendo rock, pop y música electrónica. Aquí tienes algunas de mis canciones favoritas:</p>
    
        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/6HzREffgQ16b7Rlrr6BY0m?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/609ItcFreOqmwRjmBbocds?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>   

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/5bhTUxSNkAZ4H3uFjSJRTY?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/4aDbrgm1ZaebS1Bb2dOXac?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/5tZgkV8FTe3rtl8OcSeQAb?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/track/2lTm559tuIvatlT1u0JYG2?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>

        <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/album/2xkZV2Hl1Omi8rk2D7t5lN?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
     `;
    }

    if (type === "C#") {
        content = `
        <div class="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="C#">
            <h3>C#</h3>
            <p>Lenguaje de programación orientado a objetos. Se usa para crear aplicaciones de escritorio, web y videojuegos con la plataforma .NET.</p>
            <h4>Dominio: 80%</h4>
            <div class="bar"><div class="progress" style="--progress-width:80%; width:80%"></div></div>
        </div>
      `;
    }

    if (type === "html") {
        content = `
        <div class="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML" width="50">
            <h3>HTML</h3>
            <p>Es el lenguaje que estructura una página web.Define títulos, textos, imágenes y secciones.</p>
            <h3>Domino: 70%</h3>
            <div class="bar"><div class="progress" style="--progress-width:70%; width:70%"></div></div>
        </div>
      `;
    }

    if (type === "css") {
        content = `
        <div class="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS" width="50">
            <h3>CSS</h3>
            <p>Se encarga del diseño: colores, tamaños, animaciones y estilos visuales.</p>
            <h3>Domino: 50%</h3>
            <div class="bar"><div class="progress" style="--progress-width:50%; width:50%"></div></div>
        </div>
      `;
    }

    if (type === "js") {
        content = `
        <div class="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" width="50">
            <h3>JavaScript</h3>
            <p>Hace la página interactiva: botones, animaciones, ventanas y lógica.</p>
            <h3>Domino: 40%</h3>
            <div class="bar"><div class="progress" style="--progress-width:40%; width:40%"></div></div>
        </div>
      `;
    }

    modalContent.innerHTML = content + `<button class="close" onclick="closeModal()">Cerrar</button>`;
    modal.style.display = "flex";
    animateModal();
}

function showGame(game) {
    let gameContent = "";
    if (game === "minecraft") {
        gameContent = `
        <h3>Minecraft</h3>
        <p>Juego de construcción, exploración y supervivencia en mundos infinitos.</p>
        <a class="download-btn" href="https://www.minecraft.net/download" target="_blank">
            Descargar Minecraft
        </a>
      `;
    }

    if (game === "satisfactory") {
        gameContent = `
        <h3>Satisfactory</h3>
        <p>
            Juego de construcción y automatización en mundo abierto,
            enfocado en crear fábricas gigantes en un planeta alienígena.
        </p>
        <a class="download-btn"
            href="https://store.steampowered.com/app/526870/Satisfactory/"
            target="_blank">
            Descargar Satisfactory
        </a>
      `;
    }
    
    if (game === "osu") {
        gameContent = `
        <h3>OSU!</h3>
        <p>Juego de ritmo basado en clics al compás de la música.</p>
        <a class="download-btn" href="https://osu.ppy.sh/home/download" target="_blank">
            Descargar OSU!
        </a>
      `;
    }

    if (game === "lol") {
        gameContent = `
        <h3>League of Legends</h3>
        <p>MOBA competitivo 5v5 con campeones y estrategia.</p>
        <a class="download-btn" href="https://www.leagueoflegends.com/download" target="_blank">
            Descargar League of Legends
        </a>
       `;
    }

    if (game === "gta") {
        gameContent = `
        <h3>GTA V</h3>
        <p>Juego de mundo abierto con acción, historia y libertad total.</p>
        <a class="download-btn" href="https://www.rockstargames.com/gta-v" target="_blank">
            Descargar GTA V
        </a>
      `;
    }

    if (game === "marvel") {
        gameContent = `
        <h3>Marvel Rivals</h3>
        <p>Shooter por equipos con héroes y villanos de Marvel.</p>
        <a class="download-btn" href="https://store.steampowered.com/app/2767030/Marvel_Rivals/" target="_blank">
            Descargar Marvel Rivals
        </a>
      `;
    }

    modalContent.innerHTML = `
    ${gameContent}
    <br>
    <button class="close" onclick="openModal('juegos')">Volver</button>
  `;
}

const clickSound = new Audio(
    "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3"
);
function toggleTheme() {
    document.body.classList.toggle("light-theme");
}
function copyDiscord() {
    const discordUser = "_leija"; // nombre visible
    navigator.clipboard.writeText(discordUser);
    alert("Discord copiado al portapapeles 📋");
}

async function loadDiscordProfile() {
    const userId = "883130361863868466";

    try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json = await res.json();
        if (!json.success) throw new Error("Error");

        const data = json.data;
        const user = data.discord_user;
        const status = data.discord_status;

        const statusText = {
            online: " En línea",
            idle: " Ausente",
            dnd: " No molestar",
            offline: " Desconectado"
        };

        const avatar = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
            : "https://cdn.discordapp.com/embed/avatars/0.png";

        /* 🎮 ACTIVIDAD */
        let activityHTML = `<p class="discord-activity">💤 Sin actividad</p>`;

        const activity = data.activities.find(a => a.type === 0);
        if (activity) {
            const since = activity.timestamps?.start
                ? `<span class="since">⏱ ${timeSince(activity.timestamps.start)}</span>`
                : "";

            const img = activity.assets?.large_image
                ? `<img class="activity-img"
            src="https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png">`
                : "";

            activityHTML = `
            <div class="activity-box">
                ${img}
                <div>
                    <strong>🎮 ${activity.name}</strong>
                    <p>${activity.details || ""}</p>
                    ${since}
                </div>
            </div>
          `;
        }

        /* 🎵 SPOTIFY */
        let spotifyHTML = "";

        if (data.spotify) {
            const start = data.spotify.timestamps.start;
            const end = data.spotify.timestamps.end;
            const now = Date.now();

            const duration = end - start;
            const current = Math.min(now - start, duration);
            const progress = (current / duration) * 100;

            const currentTime = formatTime(current);
            const totalTime = formatTime(duration);

            // 🎶 Ritmo estimado (más corta = más rápido)
            const beatSpeed = Math.max(1.2, Math.min(3, duration / 60000));

            spotifyHTML = `
            <a class="spotify-box beat"
                href="https://open.spotify.com/track/${data.spotify.track_id}"
                target="_blank"
                style="
                --album-url: url('${data.spotify.album_art_url}');
                --beat-speed: ${beatSpeed}s;
                ">

                <img src="${data.spotify.album_art_url}">

                <div class="spotify-info">
                    <strong>🎵 ${data.spotify.song}</strong>
                    <p>${data.spotify.artist}</p>
                    <div class="spotify-time">
                        <span>${currentTime}</span>
                        <span>${totalTime}</span>
                    </div>
                    <div class="spotify-progress">
                        <div class="spotify-progress-bar" style="width:${progress}%"></div>
                    </div>
                </div>
            </a>
          `;
        }

        document.getElementById("discordProfile").innerHTML = `
            <div class="discord-card discord-premium ${status}">
                <div class="discord-profile ultra">
                    <img class="avatar" src="${avatar}">
                    <div>
                        <strong>${user.username}</strong>
                        <div class="discord-status-text">
                            <span class="status-dot ${status}"></span>
                            ${statusText[status]}
                        </div>
                    </div>
                </div>
                ${activityHTML}
                ${spotifyHTML}
            </div>
        `;
    } catch (e) {
        document.getElementById("discordProfile").innerHTML =
            "<p>⚠️ No se pudo cargar Discord</p>";
    }
}

function timeSince(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const min = Math.floor(seconds / 60);
    const hrs = Math.floor(min / 60);

    if (hrs > 0) return `${hrs}h ${min % 60}m`;
    return `${min}m`;
}
let discordInterval = null;

function startDiscordLive() {
    loadDiscordProfile();

    if (discordInterval) clearInterval(discordInterval);

    discordInterval = setInterval(() => {
        loadDiscordProfile();
    }, 5000); // cada 5 segundos
}
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
const igSound = new Audio(
    "https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3"
);

function openInstagram() {
    igSound.currentTime = 0;
    igSound.play();

    const card = document.querySelector(".ig-premium");
    card.classList.add("ig-click");

    setTimeout(() => {
        window.open("https://www.instagram.com/leija.chi/", "_blank");
        card.classList.remove("ig-click");
    }, 180);
}

// Animaciones para modal
function animateModal() {
    modalContent.style.opacity = 0;
    modalContent.style.transform = "scale(0.9)";
    setTimeout(() => {
        modalContent.style.transition = "all 0.3s ease";
        modalContent.style.opacity = 1;
        modalContent.style.transform = "scale(1)";
    }, 10);
}











