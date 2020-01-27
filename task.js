"use strict";
exports.__esModule = true;
var myTaskManager = /** @class */ (function () {
    function myTaskManager() {
        this.tasks = [];
    }
    myTaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item " + task + " has been added to the Array");
        var count = this.tasks.length;
        return count;
    };
    myTaskManager.prototype.listAllTasks = function () {
        console.log("List all items in the Array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    myTaskManager.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Element " + task + " removed from Array");
        }
        else {
            console.log("Element " + task + " not from Array");
        }
        var myArrayLength = this.tasks.length;
        return myArrayLength;
    };
    return myTaskManager;
}());
var myTaskManager1 = new myTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();
