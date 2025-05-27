const paises_ap=document.getElementById("contenedor_paises");

fetch('https://restcountries.com/v3.1/all')
    .then(response=> response.json())
    .then(data => {
        console.log("Lista de paises:",data);

    })