# Descripción

## Cosas que se me facilitaron

Las cosas que se me facilitaron a la hora de realizar este proyecto fue traer los datos de las listas de los personajes, nombres, status, genero.
También en la parte de diseño realizar modificaciones sencillas que se vieran agradables

## Cosas que se me dificultaron

Algunas de las cosas que se me dificultaron fue poner una barra de búsqueda por nombre de los personajes
Subirlo al repositorio de git, me presentó algunos problemas al momento de subir, pero con varios tutoriales pude subirlo correctamente


## Cómo lo hice

Utilizando la función fetch nos retorna la lista de personajes
Con otra función .then, tenemos que realizar una conversión debido a que los datos se encuentran en formato json para así poder usar los datos de la API
Importamos de la libreria de React, y desde ella usamos lo siguiente: useEffect y useState.

Con el useState nos retorna la variable del estado y la función que modifica ese estado, como es un array, vamos a poner que estará vació y luego se llenará con los datos de la API

Cree una carpeta llamada componentes en donde realizo todas las acciones necesarias
Dentro de esta misma carpeta hay un archivo llamado Character, la cual recibe los datos del array creado anteriormente
Presentamos esos datos dentro de una etiqueta div
Iteramos con la función map, recibiendo como parámetros items
El item es cada personaje que hay, lo presentamos dentro de cartas o div
Agregamos una etiqueta image para visualizar las fotos de los personajes, dentro del src ponemos al item y la propiedad image
Hacemos lo mismo con cada uno de los datos que deseamos traer o mostrar, ponemos el item y la propiedad que deseamos traer

Para la paginación creamos otro componente y en ella creamos una lista para colocar los botones de siguientes y atrás
Manejamos esta parte con eventos, onClick fue el que usé para ejecutar funciones
Con arrow functions se realiza la lógica para que funcionen los botones
Con una expresión en la cual verificamos si hay un link de previous, entonces mostrará el botón de previous, lo mismo para el botón de next




