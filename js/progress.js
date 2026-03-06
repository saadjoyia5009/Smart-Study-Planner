function updateProgress(){

let total=tasks.length

let completed=tasks.filter(t=>t.done).length

document.getElementById("total").innerText=total
document.getElementById("completed").innerText=completed

let percent=0

if(total>0){

percent=(completed/total)*100

}

document.getElementById("progressBar").style.width=percent+"%"

}