const enviar = (event) => {
    event.preventDefault()

    const tarea = document.getElementById("tarea").value

    const descripcion = document.getElementById("DESCRIPCION ID").value

    const tareaToDo = {
        tarea,
        descripcion
    }

    console.log(tareaToDo)
    //para dar almacenamientos se puede usar al formularios y asi 
    localStorage.setItem("tareaTodo",JSON.stringify(tareaToDo));
}





