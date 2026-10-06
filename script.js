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


// El CTA flotante se oculta mientras ya hay un botón de cita a la vista
const floatingCta = document.querySelector(".floating-cta");
const inlineCtas = document.querySelectorAll(".btn-primary, .footer-button");

if (floatingCta && inlineCtas.length && "IntersectionObserver" in window) {

    const visibleCtas = new Set();

    const ctaObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting) visibleCtas.add(entry.target);
            else visibleCtas.delete(entry.target);

        });

        floatingCta.classList.toggle("is-hidden", visibleCtas.size > 0);

    });

    inlineCtas.forEach(function(cta){

        ctaObserver.observe(cta);

    });

}


// Tratamientos: elegir una necesidad cambia la ficha sin saltar de página
const needLinks = document.querySelectorAll(".need");
const selector = document.querySelector(".selector");
const fichaStatus = document.querySelector("#ficha-status");
const wideScreen = window.matchMedia("(min-width: 1025px)");

// La necesidad solo se marca como elegida cuando la ficha se muestra a su lado
function markCurrentNeed(){

    const active = document.querySelector(".ficha.is-active");

    needLinks.forEach(function(link){

        if(wideScreen.matches && active && link.hash === "#" + active.id){
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }

    });

}

function showFicha(id, announce){

    const ficha = id && document.getElementById(id);

    if(!ficha || !ficha.classList.contains("ficha")) return false;

    document.querySelectorAll(".ficha").forEach(function(item){

        item.classList.toggle("is-active", item === ficha);

    });

    markCurrentNeed();

    if(announce && wideScreen.matches){
        fichaStatus.textContent = "Mostrando: " + ficha.querySelector("h2").textContent;
    }

    return true;

}

function showFichaFromHash(){

    if(showFicha(location.hash.slice(1), true) && wideScreen.matches){
        selector.scrollIntoView();
    }

}

if (selector) {

    needLinks.forEach(function(link){

        link.addEventListener("click", function(event){

            const id = link.hash.slice(1);

            if(!showFicha(id, true) || !wideScreen.matches) return;

            event.preventDefault();
            history.replaceState(null, "", "#" + id);

        });

    });

    wideScreen.addEventListener("change", markCurrentNeed);
    window.addEventListener("hashchange", showFichaFromHash);

    markCurrentNeed();
    showFichaFromHash();

}


// En móvil el CTA flotante pide cita para la ficha que se está leyendo
if (selector && floatingCta && "IntersectionObserver" in window) {

    const defaultHref = floatingCta.href;
    const fichas = Array.from(document.querySelectorAll(".ficha"));
    const fichasAtCenter = new Set();

    const fichaObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting) fichasAtCenter.add(entry.target);
            else fichasAtCenter.delete(entry.target);

        });

        const current = fichas.find(function(ficha){

            return fichasAtCenter.has(ficha);

        });

        floatingCta.href = current ? current.querySelector(".btn-primary").href : defaultHref;

    }, { rootMargin: "-50% 0px -50% 0px" });

    fichas.forEach(function(ficha){

        fichaObserver.observe(ficha);

    });

}


// Aviso de privacidad: el índice marca la sección que se está leyendo
const legalLinks = document.querySelectorAll(".legal-index a");

if (legalLinks.length && "IntersectionObserver" in window) {

    const legalObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(!entry.isIntersecting) return;

            legalLinks.forEach(function(link){

                if(link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "true");
                else link.removeAttribute("aria-current");

            });

        });

    }, { rootMargin: "-25% 0px -65% 0px" });

    document.querySelectorAll(".legal-section").forEach(function(section){

        legalObserver.observe(section);

    });

}
