const productos = [
    {
    id: "sombra-01",
    titulo:"Sombra 01",
    imagen:"../img/sombra 1.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",},
        precio: 2500
    },
    {
    id: "sombra-02",
    titulo:"Sombra 02",
    imagen:"../img/sombra 2.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",
    },
    precio: 3500
},
    {
    id: "sombra-03",
    titulo:"Sombra 03",
    imagen:"../img/sombra 3.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",
    },
    precio: 4500
},

    {id: "labial-01",
     titulo:"Labial 01",
     imagen:"../img/labial 1.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1500
    },
    {
        id: "labial-02",
     titulo:"Labial 02",
     imagen:"../img/labial 2.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1750
    },
    {
        id: "labial-03",
     titulo:"Labial 03",
     imagen:"../img/labial 3.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1900
    },

    {
        id: "base-01",
     titulo:"Base 01",
      imagen:"../img/base 01.jpg",
       categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 2500
    },
    {
        id: "base-02",
         titulo:"Base 02",
          imagen:"../img/base 02.jpg",
           categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 3100
    },
    {
        id: "base-03",
         titulo:"Base 03",
          imagen:"../img/base 03.jpg",
           categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 1900
    },
    

    {
        id: "Rimmel-01",
        titulo:"Rimmel 0l",
          imagen:"../img/rimmel 1.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1200
        },
    {
        id: "Rimmel-02",
        titulo:"Rimmel 02",
          imagen:"../img/rimmel 2.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1500
        },
    {
        id: "Rimmel-03",
        titulo:"Rimmel 03",
          imagen:"../img/rimmel 3.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1300
        },
    

    {
        id: "Delineador-01",
        titulo:"Delineador 01",
        imagen:"../img/delineador 1.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
         precio: 900
        },
    {
        id: "Delineador-02",
        titulo:"Delineador 02",
        imagen:"../img/delineador 2.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
         precio: 850
        },
    {
        id: "Delineador-03",
        titulo:"Delineador 03",
        imagen:"../img/delineador 3.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
        precio: 1100
    },
    
]

const contenedorProductos = document.getElementById('productos');

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(p =>{
        
        const productosContainer = document.createElement('div');
        productosContainer.innerHTML=`
        <div>
        <img src="${p.imagen}" alt="imagen producto">
        <div class="producto-detalles">
             <h3 class="producto-titulo">${p.titulo}</h3>
             <p class="producto-precio">${p.precio}</p>
             <button class="producto-agregar" id="${p.id}">Agregar</button>
        </div>
        </div>
        `;

        contenedorProductos.append(productosContainer);
        
})

}

cargarProductos(productos);
 
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloCategorias = document.querySelector("tituloP");

botonCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            
           const cambioCategorias = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloP.innerText = cambioCategorias.categoria.nombre;
            
            const productosCategorias = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosCategorias);
        } else{
            tituloP.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

