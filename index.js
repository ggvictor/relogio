let hrs = document.getElementById("horas")
let min = document.getElementById("minutos")
let seg = document.getElementById("segundos")
setInterval(() =>{
    let data = new Date();
    hrs.innerHTML = data.getHours();
    min.innerHTML= data.getMinutes();
    seg.innerHTML = data.getSeconds();

},1000)