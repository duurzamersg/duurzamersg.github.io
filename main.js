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
  if (nav.classList.contains("active") && navUl.classList.contains("active")){
    nav.classList.remove("active");
    nav.classList.add("inactive");
    navUl.classList.remove("active");
    navUl.classList.add("inactive");
  }
}

function toggleMenu() {
  nav.classList.toggle("active");
  navUl.classList.toggle("active");
  nav.classList.toggle("inactive");
  navUl.classList.toggle("inactive");
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
