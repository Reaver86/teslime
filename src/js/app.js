import '../scss/styles.scss';

(() => {
    const headerHeight = document.querySelector("header").clientHeight;

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
    document.querySelector("#jump-haare-wachs").addEventListener("click", () => {
        scrollToElement("haare_wachs");
        closeMenu();
    });
    document.querySelector("#jump-haare-diode").addEventListener("click", () => {
        scrollToElement("haare_diode");
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
    document.querySelector("#jump-nagelpilz").addEventListener("click", () => {
        scrollToElement("fuss_nagelpilz");
        closeMenu();
    });
    document.querySelector("#jump-reflexzonen").addEventListener("click", () => {
        scrollToElement("fuss_reflexzonen");
        closeMenu();
    });
    document.querySelector("#jump-gutscheine").addEventListener("click", () => {
        scrollToElement("gutscheine");
        closeMenu();
    });
    document.querySelectorAll("#jump-kontakt").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("kontakt");
        closeMenu();
    }));

    function scrollToElement(elementName) {
        window.scrollBy(0, document.getElementById(elementName).getBoundingClientRect().top - headerHeight - 5);
    }
})();

function closeMenu() {
    document.querySelector("#menu").classList.toggle("is-open");
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 700) {
        document.querySelector("#header").classList.toggle("header-positioned");
    }
}
