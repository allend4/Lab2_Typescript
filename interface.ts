export interface taskInterface{
    addTask(task:String):number;
    listAllTasks():void;
    deleteTask(task:String):number;
    tasks: Array<String>;
}