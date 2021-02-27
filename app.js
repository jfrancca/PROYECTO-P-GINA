//Variables
const carrito = document.querySelector('#carrito');
const accesorios = document.getElementById('contenedor-accesorios');
const listaAgregados = document.querySelector('#lista-accesorios tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');

//Listeners
accesorios.addEventListener('click', comprarArticulo);
carrito.addEventListener('click', eliminarArticulo);
vaciarCarrito.addEventListener('click', vaciarAllCarrito);

//Funciones
function comprarArticulo(e) {
    e.preventDefault();
    //Delegation para agregar el carrito
    if(e.target.classList.contains('agregarCarrito')){
        //Guardo el elemento padre del objeto seleccionado
        const accesorio = e.target.parentElement.parentElement;
        //Enviamos el elemento seleccionado para tomar los datos 
        leerDatosAccesorio(accesorio);
    }   
}

function leerDatosAccesorio(accesorio){
    //Guardar la información del objeto en un objeto literal
    const infoAccesorio = {
        imagen: accesorio.querySelector('img').src,
        descripcion: accesorio.querySelector('h5').textContent,
        precio: accesorio.querySelector('span').textContent,
        id: accesorio.querySelector('a').getAttribute('data-id')
    }
    //Pasar el elemento con la información a la función que agrega al carrito
    insertarAccesorio(infoAccesorio);
}

function insertarAccesorio(info){
    //Crear el objeto que se va a mostrar en el carrito
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${info.imagen}" width="70px" height="50px">
        </td>
        <td style="font-size: 12px;">${info.descripcion}</td>
        <td style="font-size: 12px;">${info.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${info.id}">X</a>
        </td>
    `;
    //Agregar el objeto a la lista del carrito
    listaAgregados.appendChild(row);
}

function eliminarArticulo(e){
    e.preventDefault();

    let accesorio;
    //Eliminar un objeto de la lista del carrito
    if(e.target.classList.contains('borrar-curso'))
        e.target.parentElement.parentElement.remove();
}

function vaciarAllCarrito(){
    //Mientras haya un elemento en la listaAgregados ir removiendolo
    while(listaAgregados.firstChild){
        listaAgregados.removeChild(listaAgregados.firstChild);
    }
}