(function() {
    // toggle menu by toggling 'is-open' class to the header
    document.getElementById("menu__toggle").addEventListener("click", function (event) {
        event.preventDefault();
        closeMenu();
    });
    
    document.getElementById("menu__home").addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo(0, 0);
        document.getElementById("menu").classList.remove("is-open");
    });
    
    document.getElementById("jump-gesicht").addEventListener("click", function() {
        scrollToElement("gesicht");
        closeMenu();
    });
    document.getElementById("jump-augen").addEventListener("click", function() {
        scrollToElement("augen");
        closeMenu();
    });
    document.getElementById("jump-haare").addEventListener("click", function() {
        scrollToElement("haare");
        closeMenu();
    });
    document.getElementById("jump-massagen").addEventListener("click", function() {
        scrollToElement("massagen");
        closeMenu();
    });
    document.getElementById("jump-manikuere").addEventListener("click", function() {
        scrollToElement("manikuere");
        closeMenu();
    });
    document.getElementById("jump-shellac").addEventListener("click", function() {
        scrollToElement("shellac");
        closeMenu();
    });
    document.getElementById("jump-fuss").addEventListener("click", function() {
        scrollToElement("fuss");
        closeMenu();
    });
    document.getElementById("jump-kontakt").addEventListener("click", function() {
        scrollToElement("kontakt");
        closeMenu();
    });
})();

function closeMenu() {
    document.getElementById("menu").classList.toggle("is-open");
    document.getElementById("header").classList.toggle("header-positioned");
}

function scrollToElement(elementName) {
    var headerheight = 90;
    window.scrollBy(0, document.getElementById(elementName).getBoundingClientRect().top - headerheight);
}

function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}