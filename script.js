window.addEventListener("load", function() {
    document.getElementById("boton").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objetoJSON = JSON.parse(this.responseText);
                var tabla = document.createElement('table');
                tabla.innerHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Nota</th><th>Convocatoria</th></tr></thead>";
                for (var i = 0; i < objetoJSON.length; i++) {
                    var fila = tabla.insertRow();
                    let alumno = objetoJSON[i];
                    fila.insertCell().innerText = alumno.nombre;
                    fila.insertCell().innerText = alumno.apellido;
                    fila.insertCell().innerText = alumno.nota;
                    fila.insertCell().innerText = alumno.convocatoria;
                }
                document.getElementById("contenedor").innerHTML = tabla.outerHTML;
            }
        }
        xhr.open("GET", "./tabla.JSON", true)
        xhr.send()
    })
})
window.addEventListener("load", function() {
    document.getElementById("boton2").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var objetoJSON = JSON.parse(this.responseText);
                var tabla = document.createElement('table');
                let tablaHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Nota</th><th>Convocatoria</th></tr></thead>";
                for (var i = 0; i < objetoJSON.length; i++) {
                    let alumno = objetoJSON[i];
                    tablaHTML += "<tr><td>" + alumno.nombre + "</td><td>" + alumno.apellido + "</td><td>" + alumno.nota + "</td><td>" + alumno.convocatoria + "</td></tr>";
                }
                tabla.innerHTML = tablaHTML;
                document.getElementById("contenedor").innerHTML = tabla.outerHTML;
            }
        }
        xhr.open("GET", "./tabla.JSON", true)
        xhr.send()
    })
})