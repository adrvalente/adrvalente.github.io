document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) return;

    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-lang">
                <button class="lang-btn" onclick="toggleLanguage()">
                    PT / EN
                </button>
            </div>

            <div class="nav-links">
                <a href="cv.html">
                    <span class="nav-icon">👨‍💻</span>
                    <span class="nav-text" data-pt="Sobre Mim" data-en="About Me">Sobre Mim</span>
                </a>

                <a href="projetos.html">
                    <span class="nav-icon">🚀</span>
                    <span class="nav-text" data-pt="Projetos" data-en="Projects">Projetos</span>
                </a>

                <a href="badges.html">
                    <span class="nav-icon">🏆</span>
                    <span class="nav-text" data-pt="Certificados" data-en="Certificates">Certificados</span>
                </a>

                <a href="contacto.html">
                    <span class="nav-icon">📞</span>
                    <span class="nav-text" data-pt="Contactos" data-en="Contact">Contactos</span>
                </a>
            </div>
        </nav>
    `;

    const navbar = document.querySelector(".navbar");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar .nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    });

    const lang =
        localStorage.getItem("lang") ||
        (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");

    document.querySelectorAll(".navbar [data-pt][data-en]").forEach(element => {
        element.innerHTML = lang === "pt" ? element.dataset.pt : element.dataset.en;
    });
});