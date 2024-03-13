let ip=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let task=document.createElement("li");

    let delBtn=document.createElement("button");//new task added will have delete button.
    delBtn.innerText="Delete";
    delBtn.classList.add("Delbtns");

    task.innerText=ip.value;
    ul.appendChild(task);
    
    let lineBreak = document.createElement("br");
    ul.appendChild(lineBreak);

    ip.value=""; //Reset text box

    task.appendChild(delBtn);

});


//Concept of bubling=>when child triggered , it calls parent.
//In our case, when button triggered it calls li and ul

ul.addEventListener("click",function(event){ 
    console.dir(event.target)
    if(event.target.nodeName=="BUTTON"){ //We want this event target to button not li. 
        let itemList=event.target.parentElement;
        itemList.remove();
        console.log("deleted");
    } //else if we click on li ul will be triggered but if block will not get executed.
    
})
