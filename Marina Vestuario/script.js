let sesionActiva=false

function mostrarInicio(){
ocultarTodo()
document.getElementById("inicio").classList.remove("oculto")
}

function mostrarMenu(){

if(!sesionActiva){
alert("Debes iniciar sesión primero ⚓")
mostrarLogin()
return
}

ocultarTodo()
document.getElementById("menu").classList.remove("oculto")
}

function mostrarCarrito(){

if(!sesionActiva){
alert("Debes iniciar sesión primero ⚓")
mostrarLogin()
return
}

ocultarTodo()
document.getElementById("carrito").classList.remove("oculto")

let carrito=JSON.parse(localStorage.getItem("carrito"))||[]

let lista=document.getElementById("listaCarrito")

lista.innerHTML=""

carrito.forEach(item=>{
let li=document.createElement("li")
li.textContent=item
lista.appendChild(li)
})

}

function mostrarHistorial(){

if(!sesionActiva){
alert("Debes iniciar sesión primero ⚓")
mostrarLogin()
return
}

ocultarTodo()
document.getElementById("historial").classList.remove("oculto")

let historial=JSON.parse(localStorage.getItem("historial"))||[]

let lista=document.getElementById("listaHistorial")

lista.innerHTML=""

historial.forEach(r=>{
let li=document.createElement("li")
li.textContent=r
lista.appendChild(li)
})

}

function mostrarRegistro(){
ocultarTodo()
document.getElementById("registro").classList.remove("oculto")
}

function mostrarLogin(){
ocultarTodo()
document.getElementById("login").classList.remove("oculto")
}

function ocultarTodo(){

document.getElementById("inicio").classList.add("oculto")
document.getElementById("menu").classList.add("oculto")
document.getElementById("carrito").classList.add("oculto")
document.getElementById("historial").classList.add("oculto")
document.getElementById("login").classList.add("oculto")
document.getElementById("registro").classList.add("oculto")

}

function registrar(){

let nombre=document.getElementById("nombre").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

let usuario={nombre,email,password}

localStorage.setItem("usuario",JSON.stringify(usuario))

alert("Registro exitoso")

mostrarLogin()

}

function login(){

let email=document.getElementById("loginEmail").value
let password=document.getElementById("loginPassword").value

let usuario=JSON.parse(localStorage.getItem("usuario"))

if(usuario && usuario.email===email && usuario.password===password){

sesionActiva=true

alert("Bienvenido "+usuario.nombre)

mostrarMenu()

}else{

alert("Datos incorrectos")

}

}

function cerrarSesion(){

sesionActiva=false

alert("Sesión cerrada")

mostrarInicio()

}

function agregarCarrito(tipo,idFecha){

if(!sesionActiva){
alert("Debes iniciar sesión para reservar")
mostrarLogin()
return
}

let fecha=document.getElementById(idFecha).value

if(!fecha){
alert("Seleccione una fecha")
return
}

let reserva=tipo+" para "+fecha

let carrito=JSON.parse(localStorage.getItem("carrito"))||[]

carrito.push(reserva)

localStorage.setItem("carrito",JSON.stringify(carrito))

alert("Agregado al carrito 🛒")

}

function confirmarReservas(){

let carrito=JSON.parse(localStorage.getItem("carrito"))||[]

let historial=JSON.parse(localStorage.getItem("historial"))||[]

historial=historial.concat(carrito)

localStorage.setItem("historial",JSON.stringify(historial))

localStorage.removeItem("carrito")

alert("Reservas confirmadas ⚓")

mostrarHistorial()

}