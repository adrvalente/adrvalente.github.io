// ==========================
// LANGUAGE DETECTION
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const lang =
        navigator.language.toLowerCase().startsWith("pt") ?
        "pt" :
        "en";

    // ==========================
    // PAGE TITLE
    // ==========================

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

    // ==========================
    // TEXT ELEMENTS
    // ==========================

    document
        .querySelectorAll("[data-pt][data-en]")
        .forEach(element => {

            element.innerHTML =
                lang === "pt" ?
                element.dataset.pt :
                element.dataset.en;
        });

});