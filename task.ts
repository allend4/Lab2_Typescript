import { taskInterface } from './interface';

class myTaskManager implements taskInterface {
    tasks: Array<String> = [];

    constructor(){

    }

    addTask(task: String): number {
        this.tasks.push(task);
        console.log("Item " + task + " has been added to the Array");
        let count: number = this.tasks.length;
        return count;
    }

    listAllTasks(): void {
        console.log("List all items in the Array")
        this.tasks.forEach(function (task) {
            console.log(task);
        })
    }

    deleteTask(task: String): number {
        let index: number = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Element " + task + " removed from Array");
        }
        else {
            console.log("Element " + task + " not from Array");

        }
        let myArrayLength = this.tasks.length;
        return myArrayLength;
    }
}

let myTaskManager1 = new myTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();

