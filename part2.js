var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Item " + task + " has been added to the Array");
    var count = tasks.length;
    return count;
}
function listAllTasks() {
    //for (let i = 0; i < tasks.length; i++) {
    //}
    console.log("List all items in the Array");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Element " + task + " removed from Array");
    }
    else {
        console.log("Element " + task + " not from Array");
    }
    var myArrayLength = tasks.length;
    return myArrayLength;
}
addTask("Number Two");
addTask("Number Three");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("Number Two");
console.log(x);
