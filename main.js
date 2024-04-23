#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let Ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["add", "update", "view", "delete", "exite"]
        },
    ]);
    if (Ans.select === "add") {
        let addtodos = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "add item and in the list",
        });
        todos.push(addtodos.todo);
        console.log(todos);
    }
    if (Ans.select === "update") {
        let updatetodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "update item in the list",
            choices: todos.map(item => item)
        });
        let addtodos = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "add item and in the list",
        });
        let newtodo = todos.filter(val => val !== updatetodo.todo);
        todos = [...newtodo, addtodos.todo];
        console.log(todos);
    }
    if (Ans.select === "view") {
        console.log("***** TO_DO LIST *****");
        console.log(todos);
    }
    if (Ans.select === "delete") {
        let deletetodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "select item to delete",
            choices: todos.map(item => item)
        });
        let newtodo = todos.filter(val => val !== deletetodo.todo);
        todos = [...newtodo];
        console.log(todos);
    }
    if (Ans.select === "exite") {
        console.log("Extinig program ...");
        condition = false;
    }
}
