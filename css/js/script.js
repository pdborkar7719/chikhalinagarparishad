document.addEventListener("DOMContentLoaded", function(){

    const bottomItems = document.querySelectorAll(".bottom-item");

    bottomItems.forEach(function(item){

        item.addEventListener("click", function(){

            bottomItems.forEach(function(nav){
                nav.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* Service card click animation */

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(function(card){

        card.addEventListener("click", function(){

            this.style.transform = "scale(.98)";

            setTimeout(() => {
                this.style.transform = "";
            },150);

        });

    });

});