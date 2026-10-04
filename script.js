const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".header-toggle");
const megaItem = document.querySelector(".has-mega");
const topbar = document.querySelector(".topbar");


// Menú móvil
function setMenu(open){

    header.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");

}

menuToggle.addEventListener("click", function(){

    setMenu(!header.classList.contains("is-open"));

});

header.querySelectorAll("a").forEach(function(link){

    link.addEventListener("click", function(){

        setMenu(false);

    });

});


// El mega menú se cierra al elegir un tratamiento, aunque el cursor siga encima
megaItem.querySelectorAll(".mega-menu a").forEach(function(link){

    link.addEventListener("click", function(){

        megaItem.classList.add("is-closed");
        link.blur();

    });

});

megaItem.addEventListener("mouseleave", function(){

    megaItem.classList.remove("is-closed");

});


document.addEventListener("keydown", function(event){

    if(event.key !== "Escape") return;

    setMenu(false);

    if(megaItem.contains(document.activeElement)){
        document.activeElement.blur();
    }

});


// El header gana sombra cuando la barra superior sale de pantalla
if (topbar && "IntersectionObserver" in window) {

    new IntersectionObserver(function(entries){

        header.classList.toggle("is-stuck", !entries[0].isIntersecting);

    }).observe(topbar);

}
