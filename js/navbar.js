/*
==================================================
NAVBAR.JS
Navbar Reutilizável do Portfólio
==================================================

Objetivo:
- Inserir automaticamente a navbar em todas
  as páginas do site.
- Destacar a página atual.
- Aplicar efeito de navbar colapsada ao scroll.
- Aplicar tradução PT/EN na navbar.
- Integrar com language.js.

Autor: Adriano Valente
==================================================
*/


// Executa quando o HTML estiver totalmente carregado
document.addEventListener("DOMContentLoaded", () => {

    // Procura o elemento onde a navbar será inserida
    const navbarContainer = document.getElementById("navbar");

    // Se não existir o container, termina o script
    if (!navbarContainer) return;


    /*
    ==================================================
    CONSTRUÇÃO DA NAVBAR
    ==================================================

    A navbar é inserida dinamicamente para evitar
    duplicação de código em todas as páginas.
    */

    navbarContainer.innerHTML = `
        <nav class="navbar">

            <!-- Botão de idioma -->
            <div class="nav-lang">
                <button class="lang-btn" onclick="toggleLanguage()">
                    PT / EN
                </button>
            </div>

            <!-- Links de navegação -->
            <div class="nav-links">

                <a href="cv.html">
                    <span class="nav-icon">👨‍💻</span>
                    <span class="nav-text"
                          data-pt="Sobre Mim"
                          data-en="About Me">
                        Sobre Mim
                    </span>
                </a>

                <a href="projetos.html">
                    <span class="nav-icon">🚀</span>
                    <span class="nav-text"
                          data-pt="Projetos"
                          data-en="Projects">
                        Projetos
                    </span>
                </a>

                <a href="badges.html">
                    <span class="nav-icon">🏆</span>
                    <span class="nav-text"
                          data-pt="Certificados"
                          data-en="Certificates">
                        Certificados
                    </span>
                </a>

                <a href="contacto.html">
                    <span class="nav-icon">📞</span>
                    <span class="nav-text"
                          data-pt="Contactos"
                          data-en="Contact">
                        Contactos
                    </span>
                </a>

            </div>

        </nav>
    `;


    /*
    ==================================================
    IDENTIFICAÇÃO DA PÁGINA ATUAL
    ==================================================

    Obtém o nome do ficheiro atual para destacar
    automaticamente o link correspondente.
    */

    const navbar = document.querySelector(".navbar");

    const currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";


    /*
    ==================================================
    LINK ATIVO
    ==================================================

    Adiciona a classe "active" ao link da página
    atualmente aberta.
    */

    document
        .querySelectorAll(".navbar .nav-links a")
        .forEach(link => {

            if (
                link.getAttribute("href") ===
                currentPage
            ) {
                link.classList.add("active");
            }

        });


    /*
    ==================================================
    NAVBAR COLAPSADA
    ==================================================

    Quando o utilizador faz scroll superior
    a 40px, é adicionada a classe:

    .scrolled

    O CSS trata do restante comportamento.
    */

    window.addEventListener("scroll", () => {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    });


    /*
    ==================================================
    IDIOMA ATUAL
    ==================================================

    Prioridade:

    1. localStorage
    2. Idioma do navegador

    Retorna:
    - pt
    - en
    */

    const lang =
        localStorage.getItem("lang") ||
        (
            navigator.language
            .toLowerCase()
            .startsWith("pt") ?
            "pt" :
            "en"
        );


    /*
    ==================================================
    TRADUÇÃO DA NAVBAR
    ==================================================

    Atualiza todos os elementos que possuem:

    data-pt=""
    data-en=""

    para o idioma selecionado.
    */

    document
        .querySelectorAll(
            ".navbar [data-pt][data-en]"
        )
        .forEach(element => {

            element.innerHTML =
                lang === "pt" ?
                element.dataset.pt :
                element.dataset.en;

        });

});