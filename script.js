function changerStyle(taskId) {
    var checkbox = document.getElementById('box ' + taskId);
    var taskSpan = document.getElementById(taskId);

    if (checkbox.checked) {
        taskSpan.setAttribute('done', 'true');
        alert("La " + taskSpan.id + " est cochée !");
    } else {
        taskSpan.setAttribute('done', 'false');
    }
}