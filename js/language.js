// ==========================
// LANGUAGE DETECTION
// ==========================

let currentLang = "pt";

document.addEventListener("DOMContentLoaded", () => {

    currentLang =
        navigator.language.toLowerCase().startsWith("pt") ?
        "pt" :
        "en";

    applyLanguage(currentLang);

});

// ==========================
// APPLY LANGUAGE
// ==========================

function applyLanguage(lang) {

    // Page title
    const title = document.querySelector("title");

    if (title && title.dataset.pt && title.dataset.en) {
        document.title =
            lang === "pt" ?
            title.dataset.pt :
            title.dataset.en;
    }

    // Text elements
    document
        .querySelectorAll("[data-pt][data-en]")
        .forEach(element => {
            element.innerHTML =
                lang === "pt" ?
                element.dataset.pt :
                element.dataset.en;
        });

    // CV download button
    const downloadBtn = document.getElementById("cv-download");

    if (downloadBtn) {
        downloadBtn.href =
            lang === "pt" ?
            "docs/CV_Adriano_Valente_PT.pdf" :
            "docs/CV_Adriano_Valente_EN.pdf";
    }

    document.documentElement.lang =
        lang === "pt" ? "pt-PT" : "en";
}

// ==========================
// TOGGLE LANGUAGE BUTTON
// ==========================

function toggleLanguage() {

    currentLang =
        currentLang === "pt" ?
        "en" :
        "pt";

    applyLanguage(currentLang);
}