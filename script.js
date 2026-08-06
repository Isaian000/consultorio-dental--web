const tratamientos = document.querySelector(".tratamientos-item");
const megaMenu = document.querySelector("#mega-menu");


console.log("Script cargado");

tratamientos.addEventListener("mouseenter", function(){

    megaMenu.classList.add("show");

});


tratamientos.addEventListener("mouseleave", function(){

    megaMenu.classList.remove("show");

});


tratamientos.addEventListener("mouseleave", function(){

    setTimeout(function(){

        if(!megaMenu.matches(":hover")){
            megaMenu.classList.remove("show");
        }

    },100);

});


megaMenu.addEventListener("mouseenter", function(){

    megaMenu.classList.add("show");

});


megaMenu.addEventListener("mouseleave", function(){

    megaMenu.classList.remove("show");

});

