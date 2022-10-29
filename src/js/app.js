import '../scss/styles.scss';

(() => {
    const headerHeight = document.querySelector("header").clientHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

    // toggle menu by toggling 'is-open' class to the header
    document.querySelector("#menu__toggle").addEventListener("click", () => {
        closeMenu();
    });

    // jump to elements when clicking menu items and also close the menu
    document.querySelector("#menu__home").addEventListener("click", () => {
        window.scrollTo(0, 0);
        document.querySelector("#menu").classList.remove("is-open");
    });
    document.querySelectorAll("[name='jump-hautanalyse']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("hautanalyse");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-gesicht']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("gesicht");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-augen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("augen");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-haare-wachs']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("haare_wachs");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-haare-diode']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("haare_diode");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-microneedling']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("microneedling");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-massagen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("massagen");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-manikuere']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("manikuere");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-shellac']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("shellac");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-fuss']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-nagelpilz']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss_nagelpilz");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-eingewachsen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss_eingewachsen");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-gutscheine']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("gutscheine");
        document.querySelector("#menu").classList.remove("is-open");
    }));
    document.querySelectorAll("[name='jump-kontakt']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("kontakt");
        document.querySelector("#menu").classList.remove("is-open");
    }));

    const scrollToElement = (elementName) => {
        window.scrollBy(0, document.getElementById(elementName).getBoundingClientRect().top - headerHeight - 5);
    };

    if ([7, 8, 9, 10, 11, 0, 1].indexOf((new Date()).getMonth()) > -1) {
        document.querySelector(".img_winterzeit").classList.toggle("show");
    }
})();

const closeMenu = () => {
    document.querySelector("#menu").classList.toggle("is-open");
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 700) {
        document.querySelector("#header").classList.toggle("header-positioned");
    }
};
