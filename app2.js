//Variables
const buscarBtn = document.querySelector('#submit-buscador');
const descripcionArticulos = document.querySelectorAll('h5');
const buscador = document.getElementById('buscador');

//Listeners
buscarBtn.addEventListener('click', buscarArticulos);

//Funciones
function buscarArticulos(){
    let encontrados = [];
    //Guardar en un arreglo todas las coincidencias que encuentre según la palabra que coloquemos en el buscador
    for (const nombre of descripcionArticulos) {
        if(nombre.textContent.toLowerCase().search(buscador.value.toLowerCase())){
            encontrados.push(nombre.parentElement);
        }
    }
    //Filtrar el arreglo filtro1 para solo dejar los elementos que realmente coinciden
    // let encontrados = filtro1.filter(en => en != null);
    console.log(encontrados);

    // alert('No se encontraron referencias con el valor de la busqueda indicado, por favor vuelve a intentarlo');
}