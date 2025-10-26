// Al hacer clic en el botón, cambia su estilo y abre la URL en nueva pestaña:
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".cta-btn");
  const target = "https://www.hubspot.es/";

  botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    window.open(target, "_blank");

//El botón vuelve a su estado normal después de unos segundos:
    setTimeout(() => btn.classList.remove("clicked"), 6000);
    });
  });
});
