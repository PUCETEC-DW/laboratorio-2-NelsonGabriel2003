[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RxH6bTkq)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19642427&assignment_repo_type=AssignmentRepo)

# 🌍 Países del Mundo con JavaScript

Este proyecto es una aplicación web que consume la API de países de [RestCountries](https://restcountries.com) y muestra tarjetas con:

- Nombre oficial
- Bandera
- Región

## El uso de funciones:
    - mostrarPaises(array_paises); 
    //Va a recibir los parametros del Json para obtener las promesas

    function mostrarPaises(paises)
    //Va a realizar la creacion de las cartas con la informacion del json y utilizar las funciones del DOM
    para crear nodos hijos que van a ser almacenados en divs.


## La busqueda se basa en usar los metodos .filter() y .includes():
inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();

  const filtrados = array_paises.filter(element =>
    element.name.common.toLowerCase().includes(texto)
  );

Lo que permite buscar en tiempo real por el nombre del país usando un campo de entrada.
Pero a la vez los elementos filtrados con el .includes() permite su busqueda en base al texto que escribamos
devolviendo un "true " si se encuentra.

---

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3 
- JavaScript
- [REST Countries API](https://restcountries.com/v3.1/all)

---

