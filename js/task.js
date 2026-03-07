let tasks=[]

function addTask(){

let task=document.getElementById("taskInput").value
let date=document.getElementById("taskDate").value

let taskObj={
name:task,
date:date,
done:false
}

tasks.push(taskObj)

displayTasks()

}

function displayTasks(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((t,index)=>{

let li=document.createElement("li")

li.innerHTML=
t.name+" ("+t.date+")"+
" <button onclick='completeTask("+index+")'>Done</button>"+
" <button onclick='deleteTask("+index+")'>Delete</button>"

list.appendChild(li)

})

updateProgress()

}

function deleteTask(index){

tasks.splice(index,1)

displayTasks()

}

function completeTask(index){

tasks[index].done=true

displayTasks()

}