import '../scss/styles.scss';

(() => {
    // toggle menu by toggling 'is-open' class to the header
    document.querySelector("#menu__toggle").addEventListener("click", () => {
        closeMenu();
    });

    // jump to elements when clicking menu items and also close the menu
    document.querySelector("#menu__home").addEventListener("click", () => {
        window.scrollTo(0, 0);
        document.querySelector("#menu").classList.remove("is-open");
    });
    document.querySelector("#jump-gesicht").addEventListener("click", () => {
        scrollToElement("gesicht");
        closeMenu();
    });
    document.querySelector("#jump-augen").addEventListener("click", () => {
        scrollToElement("augen");
        closeMenu();
    });
    document.querySelector("#jump-haare").addEventListener("click", () => {
        scrollToElement("haare");
        closeMenu();
    });
    document.querySelector("#jump-massagen").addEventListener("click", () => {
        scrollToElement("massagen");
        closeMenu();
    });
    document.querySelector("#jump-manikuere").addEventListener("click", () => {
        scrollToElement("manikuere");
        closeMenu();
    });
    document.querySelector("#jump-shellac").addEventListener("click", () => {
        scrollToElement("shellac");
        closeMenu();
    });
    document.querySelector("#jump-fuss").addEventListener("click", () => {
        scrollToElement("fuss");
        closeMenu();
    });
    document.querySelector("#jump-kontakt").addEventListener("click", () => {
        scrollToElement("kontakt");
        closeMenu();
    });
})();

function closeMenu() {
    document.querySelector("#menu").classList.toggle("is-open");
    document.querySelector("#header").classList.toggle("header-positioned");
}

function scrollToElement(elementName) {
    const headerheight = 90;
    window.scrollBy(0, document.getElementById(elementName).getBoundingClientRect().top - headerheight);
}
