/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


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
        document.querySelector("#header").classList.remove("header-positioned");
    });
    document.querySelectorAll("[name='jump-hautanalyse']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("hautanalyse");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-gesicht']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("gesicht");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-augen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("augen");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-haare-wachs']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("haare_wachs");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-haare-diode']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("haare_diode");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-microneedling']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("microneedling");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-facelifting']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("facelifting");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-massagen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("massagen");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-manikuere']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("manikuere");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-shellac']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("shellac");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-fuss']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-nagelpilz']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss_nagelpilz");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-eingewachsen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("fuss_eingewachsen");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-gutscheine']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("gutscheine");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-rezensionen']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("rezensionen");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
    }));
    document.querySelectorAll("[name='jump-kontakt']").forEach(selector => selector.addEventListener("click", () => {
        scrollToElement("kontakt");
        document.querySelector("#menu").classList.remove("is-open");
        document.querySelector("#header").classList.remove("header-positioned");
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLm1pbi45M2IxZjk3YzcxNTI0OTNiZGFlZC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzbGltZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5jbGllbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlci1oZWlnaHQnLCBoZWFkZXJIZWlnaHQgKyAncHgnKTtcblxuICAgIC8vIHRvZ2dsZSBtZW51IGJ5IHRvZ2dsaW5nICdpcy1vcGVuJyBjbGFzcyB0byB0aGUgaGVhZGVyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51X190b2dnbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgfSk7XG5cbiAgICAvLyBqdW1wIHRvIGVsZW1lbnRzIHdoZW4gY2xpY2tpbmcgbWVudSBpdGVtcyBhbmQgYWxzbyBjbG9zZSB0aGUgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudV9faG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1oYXV0YW5hbHlzZSddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwiaGF1dGFuYWx5c2VcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9J2p1bXAtZ2VzaWNodCddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwiZ2VzaWNodFwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1hdWdlbiddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwiYXVnZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9J2p1bXAtaGFhcmUtd2FjaHMnXVwiKS5mb3JFYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbFRvRWxlbWVudChcImhhYXJlX3dhY2hzXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItcG9zaXRpb25lZFwiKTtcbiAgICB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPSdqdW1wLWhhYXJlLWRpb2RlJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJoYWFyZV9kaW9kZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1taWNyb25lZWRsaW5nJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJtaWNyb25lZWRsaW5nXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItcG9zaXRpb25lZFwiKTtcbiAgICB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPSdqdW1wLWZhY2VsaWZ0aW5nJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJmYWNlbGlmdGluZ1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1tYXNzYWdlbiddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwibWFzc2FnZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9J2p1bXAtbWFuaWt1ZXJlJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJtYW5pa3VlcmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9J2p1bXAtc2hlbGxhYyddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwic2hlbGxhY1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1mdXNzJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJmdXNzXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItcG9zaXRpb25lZFwiKTtcbiAgICB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPSdqdW1wLW5hZ2VscGlseiddXCIpLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9FbGVtZW50KFwiZnVzc19uYWdlbHBpbHpcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH0pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9J2p1bXAtZWluZ2V3YWNoc2VuJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJmdXNzX2Vpbmdld2FjaHNlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1ndXRzY2hlaW5lJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJndXRzY2hlaW5lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItcG9zaXRpb25lZFwiKTtcbiAgICB9KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPSdqdW1wLXJlemVuc2lvbmVuJ11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJyZXplbnNpb25lblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXBvc2l0aW9uZWRcIik7XG4gICAgfSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nanVtcC1rb250YWt0J11cIikuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0VsZW1lbnQoXCJrb250YWt0XCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItcG9zaXRpb25lZFwiKTtcbiAgICB9KSk7XG5cbiAgICBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnROYW1lKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBoZWFkZXJIZWlnaHQgLSA1KTtcbiAgICB9O1xuXG4gICAgaWYgKFs3LCA4LCA5LCAxMCwgMTEsIDAsIDFdLmluZGV4T2YoKG5ldyBEYXRlKCkpLmdldE1vbnRoKCkpID4gLTEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfd2ludGVyemVpdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICB9XG59KSgpO1xuXG5jb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICAgIGNvbnN0IHZ3ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICBpZiAodncgPCA3MDApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlci1wb3NpdGlvbmVkXCIpO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=