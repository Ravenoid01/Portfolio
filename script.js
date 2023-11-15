
//Scroll header
const scrollLimit = 200;

function fixHeader() {
    const header = document.getElementById("myHeader");
    if (window.scrollY >= scrollLimit) {
        header.style.top = "-120px";
    } else {
        header.style.top = "0"; 
    }
}

window.addEventListener("scroll", fixHeader);

//Div oculto
const botonesMostrarDiv = document.querySelectorAll(".mostrarDivOculto");

botonesMostrarDiv.forEach((boton, index) => {
    boton.addEventListener("click", function() {
        const divOculto = document.getElementById(`divOculto${index + 1}`);
        
        if (divOculto.style.display === "block") {
            divOculto.style.display = "none";
        } else {
            divOculto.style.display = "block";
        }
    });
});

//Cambiar boton
const mostrarBoton = document.getElementById("mostrarBoton1");
const mostrarBoton2 = document.getElementById("mostrarBoton2");

let estadoBoton1 = false;
let estadoBoton2 = false;

mostrarBoton1.addEventListener("click", function () {
    estadoBoton1 = !estadoBoton1;
  
    if (estadoBoton1) {
      mostrarBoton1.textContent = "Mostrar menos";
    } else {
      mostrarBoton1.textContent = "Mostrar más";
    }
  });
  
  mostrarBoton2.addEventListener("click", function () {
    estadoBoton2 = !estadoBoton2;
  
    if (estadoBoton2) {
      mostrarBoton2.textContent = "Mostrar menos";
    } else {
      mostrarBoton2.textContent = "Mostrar más";
    }
  });

//GetElementById
async function getElementById(){
  const myHeader = document.getElementById("myHeader")
  console.log(myHeader.textContent);
}
 getElementById();


 function openModal(imagePath) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imagePath;

  modalImage.style.maxWidth = "80%"; 
  modalImage.style.maxHeight = "80%";

  modalImage.style.margin = "auto";
  modalImage.style.display = "block";
  modalImage.style.marginTop = "50px";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}







