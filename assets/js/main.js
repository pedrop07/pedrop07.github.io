// alert(1)

// const request = obj => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(obj.method, obj.url, true);
//       xhr.send();

//       xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//           resolve(xhr.responseText);
//         } else {
//           reject(xhr.statusText);
//         }
//       });
//     });
//   };

//   document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//       e.preventDefault();
//       carregaPagina(el);
//     }
//   });

//   async function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//       method: 'GET',
//       url: href
//     };

//     try {
//       const response = await request(objConfig);
//       carregaResultado(response);
//     } catch(e) {
//       console.log(e);
//     }
//   }

//   function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
//   }


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

let header = document.querySelector(".header");

header.style.paddingTop = "20px";

jQuery(document).scroll(function () {
    if (jQuery(this).scrollTop() > 90) {
        jQuery('.header').addClass('header-fixed');
        jQuery('.wrapper').removeClass('py-4');
        jQuery('.wrapper').addClass('py-3');

        header.style.paddingTop = "0px";
    }
    else {
        jQuery('.header').removeClass('header-fixed');
        jQuery('.wrapper').removeClass('py-3');
        jQuery('.wrapper').addClass('py-4');
        header.style.paddingTop = "20px";
    }
});

