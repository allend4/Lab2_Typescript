let tasks: Array<String> = [];

function addTask(task: String): number {
    tasks.push(task);
    console.log("Item " + task + " has been added to the Array");

    let count: number = tasks.length;
    return count;
}

function listAllTasks(): void {
    //for (let i = 0; i < tasks.length; i++) {
    //}
    console.log("List all items in the Array")
    tasks.forEach(function (task) {
        console.log(task);
    })
}

function deleteTask(task: String): number {
    let index: number = tasks.indexOf(task);

    if (index > -1) {
        tasks.splice(index,1);
        console.log("Element " + task + " removed from Array");
    }
    else {
        console.log("Element " + task + " not from Array");

    }
    let myArrayLength = tasks.length;
    return myArrayLength;
}

addTask("Number Two");
addTask("Number Three");
let elementCount: number = addTask("Number One");
console.log(elementCount);

listAllTasks();
let x:number = deleteTask("Number Two");
console.log(x);