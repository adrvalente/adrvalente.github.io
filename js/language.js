/*
==================================================
LANGUAGE.JS
Sistema de Tradução PT / EN
==================================================

Objetivo:
- Detectar automaticamente o idioma do visitante.
- Traduzir textos da página.
- Traduzir títulos das páginas.
- Alterar o idioma do documento HTML.
- Atualizar o botão de download do CV.
- Permitir alternar manualmente entre PT e EN.

Autor: Adriano Valente
==================================================
*/


/*
==================================================
VARIÁVEL GLOBAL
==================================================

Guarda o idioma atualmente ativo.

Valores possíveis:
- pt
- en
*/

let currentLang = "pt";


/*
==================================================
DETEÇÃO AUTOMÁTICA DE IDIOMA
==================================================

Executa quando a página termina de carregar.

Verifica o idioma do navegador:

Exemplos:
- pt-PT → Português
- pt-BR → Português
- en-GB → Inglês
- en-US → Inglês
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==============================================
    LOCAL STORAGE
    ==============================================

    Se existir uma escolha anterior,
    utiliza-a.

    Caso contrário usa o idioma
    do navegador.
    */

    const savedLang =
        localStorage.getItem("siteLang");

    const browserLang =
        navigator.language
        .toLowerCase()
        .startsWith("pt") ?
        "pt" :
        "en";

    currentLang =
        savedLang || browserLang;

    applyLanguage(currentLang);

});


/*
==================================================
APPLY LANGUAGE
==================================================

Responsável por aplicar a tradução
a toda a página.

Atualiza:

✓ Título da página
✓ Textos da página
✓ Link do CV
✓ Idioma do HTML

Recebe:
- "pt"
- "en"
*/

function applyLanguage(lang) {

    /*
    ==============================================
    TÍTULO DA PÁGINA
    ==============================================

    Procura o elemento <title>.

    Exemplo:

    <title
        data-pt="Projetos"
        data-en="Projects">
    </title>
    */

    const title = document.querySelector("title");

    if (
        title &&
        title.dataset.pt &&
        title.dataset.en
    ) {

        document.title =
            lang === "pt" ?
            title.dataset.pt :
            title.dataset.en;

    }


    /*
    ==============================================
    ELEMENTOS COM TRADUÇÃO
    ==============================================

    Procura todos os elementos que possuam:

    data-pt=""
    data-en=""

    e substitui o conteúdo pelo idioma atual.
    */

    document
        .querySelectorAll("[data-pt][data-en]")
        .forEach(element => {

            element.innerHTML =
                lang === "pt" ?
                element.dataset.pt :
                element.dataset.en;

        });


    /*
    ==============================================
    BOTÃO DOWNLOAD CV
    ==============================================

    Atualiza automaticamente o PDF
    conforme o idioma selecionado.

    PT:
    docs/CV_Adriano_Valente_PT.pdf

    EN:
    docs/CV_Adriano_Valente_EN.pdf
    */

    const downloadBtn =
        document.getElementById("cv-download");

    if (downloadBtn) {

        downloadBtn.href =
            lang === "pt" ?
            "docs/CV_Adriano_Valente_PT.pdf" :
            "docs/CV_Adriano_Valente_EN.pdf";

    }


    /*
    ==============================================
    IDIOMA DO DOCUMENTO HTML
    ==============================================

    Atualiza:

    <html lang="">

    para melhorar:
    - SEO
    - Acessibilidade
    - Leitores de ecrã
    */

    document.documentElement.lang =
        lang === "pt" ?
        "pt-PT" :
        "en";

    /*
    ==============================================
    GUARDAR IDIOMA
    ==============================================

    Guarda a escolha do utilizador
    para futuras visitas.
    */

    localStorage.setItem(
        "siteLang",
        lang
    );
}


/*
==================================================
BOTÃO PT / EN
==================================================

Executado quando o utilizador
clica no botão da navbar.

Alterna entre:
- Português
- Inglês
*/

function toggleLanguage() {

    currentLang =
        currentLang === "pt" ?
        "en" :
        "pt";

    applyLanguage(currentLang);
}