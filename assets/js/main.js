
// // Modal

let modal = document.querySelectorAll(".modal");

let closeModal = document.querySelectorAll(".close-modal");


document.addEventListener("click", (e) => {
    let idModal = e.target.parentNode.getAttribute("id");


    if(idModal != ""){

        let numberModal = ( idModal.split("").pop() ) - 1 ;

        let body = document.querySelector("body");

        body.classList.add("activeModal");

        modal[numberModal].style.display = "block";

        closeModal[numberModal].onclick = () => {

            modal[numberModal].style.display = "none";

            body.classList.remove("activeModal");
        }
    }
});



// Fixed Header

// let header = document.querySelector(".header");


// jQuery(document).scroll(function () {
//     if (jQuery(this).scrollTop() > 90) {
//         jQuery('.header').addClass('header-fixed');
//         jQuery('.wrapper').removeClass('py-4');
//         jQuery('.wrapper').addClass('py-2');
//     }
//     else {
//         jQuery('.header').removeClass('header-fixed');
//         jQuery('.wrapper').removeClass('py-2');
//         jQuery('.wrapper').addClass('py-4');
//     }
// });

// AOS

AOS.init();
