const ctaIdeas = document.querySelector("#ctaideas");
const contentDiv = document.querySelector("#content");
const navUl = document.querySelector("#navul");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll("nav a");
const lightbox = document.querySelector("div.lightbox");
const lightboxImage = document.querySelector("div img#lightboxImage");
const closeLightboxSvg = document.querySelector("#closeLightbox");
const gallery2Images = document.querySelectorAll("#gallery2 img");

function scrollToSmooth(element) {
  document.getElementById(element).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  if (nav.classList.contains("active") && navUl.classList.contains("active")) {
    nav.classList.remove("active");
    nav.classList.add("inactive");
    navUl.classList.remove("active");
    navUl.classList.add("inactive");
    navLinks.forEach(navlink => {
      navlink.style.pointerEvents = "none";
      navlink.style.cursor = "default";
    });
  }
}

function toggleMenu() {
  nav.classList.toggle("active");
  navUl.classList.toggle("active");
  nav.classList.toggle("inactive");
  navUl.classList.toggle("inactive");
  if (navUl.classList.contains("inactive")) {
    navLinks.forEach(navlink => {
      navlink.style.pointerEvents = "none";
      navlink.style.cursor = "default";
    });
  } else if (navUl.classList.contains("active")) {
    console.log("active");
    navLinks.forEach(navlink => {
      navlink.removeAttribute("style");
    });
  }
}

function openLightbox(src) {
  console.log("Opened lightbox");
  if (lightbox.style.display === "none") {
    lightbox.style.display = "flex";
    lightbox.style.zIndex = "3";
    lightboxImage.src = src;
    gallery2Images.forEach(image => {
      image.style.zIndex = "0";
    });
  } else {
    lightbox.style.display = "none";
  }
}

function closeLightbox() {
  console.log("Close lightbox");
  if (lightbox.style.display === "flex") {
    lightbox.style.display = "none";
    lightbox.style.zIndex = "0";
    gallery2Images.forEach(image => {
      image.style.zIndex = "3";
    });
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
      "Omdat onze site nieuwe technologieeën gebruikt die niet ondersteund worden door Internet Explorer en oudere versies van Safari raden wij aan een andere browser te gebruiken."
    );
  }
  navLinks.forEach(navlink => {
    navlink.style.pointerEvents = "none";
    navlink.style.cursor = "default";
  });
};
