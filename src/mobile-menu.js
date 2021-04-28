(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const burgernButton = document.querySelector("[data-button-display]");
  const bodyMenuClose = document.body;

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burgernButton.classList.toggle("hidden");
  });
 
  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    burgernButton.classList.toggle("hidden");    
  }); 

})();