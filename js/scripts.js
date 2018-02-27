function ToDoList(task) {
  this.newTask = task;
}
// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedNewTaskName = $("input#new-task-name").val();


    var nuTask = new ToDoList(inputtedNewTaskName);

    $("ul#list").append("<li><span class='task'>" + nuTask.newTask + "</span><button id='deleteNewTaskButton'>delete</button></li>");
    $("ul#ToDoList").on("click", "button", function(event) {
        event.preventDefault();
        $(this).list().clear();
  });
});
});
