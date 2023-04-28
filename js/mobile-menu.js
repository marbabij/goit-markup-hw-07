(() => {
    const refs = {
      openmenuBtn: document.querySelector("[data-menu-open]"),
      closemenulBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openmenuBtn.addEventListener("click", toggleModal);
    refs.closemenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();