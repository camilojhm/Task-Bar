let tareas = [];
let estados = [];

function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const descripcion = input.value.trim();

  if (descripcion.length === 0) {
    alert("La descripción de la tarea no puede estar vacía.");
    return;
  }

  tareas.push(descripcion);
  estados.push(false);

  input.value = "";
  mostrarTareas();
}

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  if (tareas.length === 0) {
    lista.innerHTML = "<li>No hay tareas en la lista.</li>";
    return;
  }

  tareas.forEach((tarea, i) => {
    const li = document.createElement("li");
    if (estados[i]) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = estados[i];
    checkbox.onchange = () => marcarCompletada(i, checkbox.checked);

    const span = document.createElement("span");
    span.textContent = `${i + 1}. ${tarea}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => eliminarTarea(i);

    const leftSide = document.createElement("div");
    leftSide.style.display = "flex";
    leftSide.style.alignItems = "center";
    leftSide.style.gap = "10px";
    leftSide.appendChild(checkbox);
    leftSide.appendChild(span);

    li.appendChild(leftSide);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function marcarCompletada(indice, estado) {
  estados[indice] = estado;
  mostrarTareas();
}

function eliminarTarea(indice) {
  if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
    tareas.splice(indice, 1);
    estados.splice(indice, 1);
    mostrarTareas();
  }
}
