const productos = [
    {
    id: "sombra-01",
    titulo:"Sombra 01",
    imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809285/Proyecto3/Sombras/80e7100b7e8345a5ac797d9027496c7c_fhlrim.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",},
        precio: 2500
    },
    {
    id: "sombra-02",
    titulo:"Sombra 02",
    imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809276/Proyecto3/Sombras/81ab9d3698d0de35c8d5d03b00f7b072_arueqg.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",
    },
    precio: 3500
},
    {
    id: "sombra-03",
    titulo:"Sombra 03",
    imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809249/Proyecto3/Sombras/7a46c351d6708f40ce55ff1e2dad15f1_ub6jyt.jpg",
    categoria: {
        nombre: "Sombras",
        id:"sombras",
    },
    precio: 4500
},

    {id: "labial-01",
     titulo:"Labial 01",
     imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809557/Proyecto3/Labiales/8a6e35b7ab85b183ca7f67f1c2fb05b2_mjk3xd.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1500
    },
    {
        id: "labial-02",
     titulo:"Labial 02",
     imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809547/Proyecto3/Labiales/189587a29296f6d99f37fff743d2c1d0_ar31zp.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1750
    },
    {
        id: "labial-03",
     titulo:"Labial 03",
     imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809387/Proyecto3/Labiales/7da25503ba62175a06a4502447d14812_nswsro.jpg",
     categoria: {
        nombre: "Labiales",
        id:"labiales",
    },
     precio: 1900
    },

    {
        id: "base-01",
     titulo:"Base 01",
      imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809589/Proyecto3/Bases/921dd790afd856f9a7c25b8485a135ad_sbt3fm.jpg",
       categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 2500
    },
    {
        id: "base-02",
         titulo:"Base 02",
          imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809584/Proyecto3/Bases/8f83768548ee2c93ab4c8cccb984425b_b4aqrf.jpg",
           categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 3100
    },
    {
        id: "base-03",
         titulo:"Base 03",
          imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809580/Proyecto3/Bases/8d73ba4cb7833cd823c29ccd546bdcb2_uawqtc.jpg",
           categoria: {
        nombre: "Bases",
        id: "bases",
    },
     precio: 1900
    },
    

    {
        id: "Rimmel-01",
        titulo:"Rimmel 0l",
          imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809699/Proyecto3/Rimmel/fee232762a607a0b8bb1eb066ae6dc13_ojygur.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1200
        },
    {
        id: "Rimmel-02",
        titulo:"Rimmel 02",
          imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809662/Proyecto3/Rimmel/8d2ac1c2cb9202f75866cde301181a00_xmxt4g.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1500
        },
    {
        id: "Rimmel-03",
        titulo:"Rimmel 03",
          imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809649/Proyecto3/Rimmel/95578fafaa235f6bfcd27b0ac3dc45f7_jfllti.jpg",
        categoria: {
            nombre: "Rimmel",
            id: "rimmel",
        },
         precio: 1300
        },
    

    {
        id: "Delineador-01",
        titulo:"Delineador 01",
        imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809757/Proyecto3/Delineadores/b46cef037697603db127cf38397a0835_yar5oa.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
         precio: 900
        },
    {
        id: "Delineador-02",
        titulo:"Delineador 02",
        imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809734/Proyecto3/Delineadores/362466da4cc8d8425d977ed2be03c1d8_szqp9x.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
         precio: 850
        },
    {
        id: "Delineador-03",
        titulo:"Delineador 03",
        imagen:"https://res.cloudinary.com/dxetszi0w/image/upload/v1677809809/Proyecto3/Delineadores/330333bf67c360998789e2809d83e3f6_ohxub8.jpg",
        categoria: {
            nombre: "Delineadores",
            id: "delineadores",
        },
        precio: 1100
    },
    
]

const contenedorProductos = document.getElementById('productos');
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloCategorias = document.querySelector("tituloP");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const cantidadCarrito = document.querySelector("#numerito");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(p =>{
        
        const productosContainer = document.createElement('div');
        productosContainer.innerHTML=`
        <div>
        <img src="${p.imagen}" alt="imagen producto">
        <div class="producto-detalles">
             <h3 class="producto-titulo">${p.titulo}</h3>
             <p class="producto-precio">$ ${p.precio}</p>
             <button class="producto-agregar" id="${p.id}">Agregar</button>
        </div>
        </div>
        `;

        contenedorProductos.append(productosContainer);
        
})
botonAgregarActualizar();
}

cargarProductos(productos);
 


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



function botonAgregarActualizar(){
    botonAgregar = document.querySelectorAll(".producto-agregar");

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
};


const carritoConProductos = [];


function agregarAlCarrito(e){

    const idProd = e.currentTarget.id;
    const prodAgregado = productos.find(producto => producto.id === idProd);

    if(carritoConProductos.some(producto => producto.id === idProd)){
        const Index = carritoConProductos.findIndex(producto => producto.id === idProd);
        carritoConProductos[Index].cantidad++;
    } else {
        prodAgregado.cantidad = 1;
        carritoConProductos.push(prodAgregado);
    }
    actualizarCantidadCarrito();

    localStorage.setItem("carrito-con-productos", JSON.stringify(carritoConProductos));
}


function actualizarCantidadCarrito(){
    let nuevaCantidadCarrito = carritoConProductos.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadCarrito.innerText= nuevaCantidadCarrito;
}