const ctaIdeas = document.querySelector("#ctaideas");
const contentDiv = document.querySelector("#content");
const navUl = document.querySelector("#navul");
const nav = document.querySelector("#nav");

function scrollToSmooth(element) {
  document.getElementById(element).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  if (nav.classList.contains("active") && navUl.classList.contains("active")) {
    navul.classList.remove("active");
    navUl.classList.add("inactive");
    nav.classList.remove("active");
    nav.classList.add("inactive");
  }
}

function toggleMenu() {
  if (
    nav.classList.contains("inactive") &&
    navUl.classList.contains("inactive")
  ) {
    navUl.classList.remove("inactive");
    navUl.classList.add("active");
    nav.classList.remove("inactive");
    nav.classList.add("active");
  } else {
    navUl.classList.remove("active");
    navUl.classList.add("inactive");
    nav.classList.remove("active");
    nav.classList.add("inactive");
  }
}

window.onload = function() {
  if (
    navigator.appName == "Microsoft Internet Explorer" ||
    !!(
      navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)
    ) ||
    !CSS.supports("display", "grid")
  ) {
    alert(
      "Omdat onze site nieuwe technologieeën gebruikt die niet ondersteund worden door Internet Explorer raden wij aan een andere browser te gebruiken."
    );
  }
};
