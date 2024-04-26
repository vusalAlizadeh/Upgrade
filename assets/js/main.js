//language div activator
const languageDiv = document.querySelector(".language");
const additionalLanguageDiv = document.querySelector(".langoptions");

languageDiv.addEventListener("click", () => {
  if (additionalLanguageDiv.style.display == "block") {
    additionalLanguageDiv.style.display = "none";
  } else {
    additionalLanguageDiv.style.display = "block";
  }
});

//language changer
const languages = document.querySelectorAll(".lang");
const prevLang = document.querySelector(".selectedLang");

// const selectedLang
languages.forEach((language) => {
  language.addEventListener("click", (e) => {
    const prevLangText = prevLang.textContent;
    const lang = language.textContent;
    e.target.textContent = prevLangText;
    prevLang.textContent = lang;
    additionalLanguageDiv.style.display = "none";
  });
});

//Mobile menu
const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const closeMenu = document.querySelector(".menuBar");
const menuBar = document.querySelector(".menuBar");
const menuItems = document.querySelectorAll(".menuList .menuItem");

mobileMenuBtn.addEventListener("click", function () {
  menuBar.classList.add("showMobileMenu");
});

closeMenu.addEventListener("click", function () {
  menuBar.classList.remove("showMobileMenu");
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBar.classList.remove("showMobileMenu");
  });
});

//language div activator
const mobileLanguageDiv = document.querySelector(
  ".menuBar .menuOverlay .language"
);
const mobileAdditionalLanguageDiv = document.querySelector(
  ".menuBar .menuOverlay .langoptions"
);

mobileLanguageDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  if (mobileAdditionalLanguageDiv.style.display == "block") {
    mobileAdditionalLanguageDiv.style.display = "none";
  } else {
    mobileAdditionalLanguageDiv.style.display = "block";
  }
});
