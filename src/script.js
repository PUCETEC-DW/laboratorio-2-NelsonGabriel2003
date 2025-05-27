const paises_ap=document.getElementById("contenedor_paises");
const inputBuscar = document.getElementById("buscar");
let array_paises = [];

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    array_paises = data; 
    mostrarPaises(array_paises); 
  })

function mostrarPaises(paises) {
  paises_ap.innerHTML = "";

  paises.forEach(element => {
            const nombre = element.name.common;
            const bandera_pais = element.flags.png;
            const region=element.region;

            
            const card_pais=document.createElement("div");
            card_pais.classList.add("card_pais");
            
            const img_pais = document.createElement("img");
            img_pais.src = bandera_pais;
            img_pais.alt = `Bandera de ${nombre}`;
            
            const nombre_pais = document.createElement("p");
            nombre_pais.textContent = nombre;

            const region_pais=document.createElement("p");
            region_pais.innerHTML= `<strong>La region es de: ${region}</strong>`;
            

            card_pais.appendChild(img_pais);
            card_pais.appendChild(nombre_pais);
            card_pais.appendChild(region_pais);
            paises_ap.appendChild(card_pais);
        });
    }

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();

  const filtrados = array_paises.filter(element =>
    element.name.common.toLowerCase().includes(texto)
  );

  mostrarPaises(filtrados);
});