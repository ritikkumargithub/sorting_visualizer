//variables
let size=document.getElementById('arr_size')
let arrSize=size.value;

let generateBtn=document.getElementById("arr_generate");
let arrSpeed=document.getElementById("arr_speed");
let arrContainer=document.getElementById("array_container");
let alogoBtn= document.querySelectorAll(".algos .btn");

let div_sizes=[];
let divs=[];

let c_delay=0;


//Array generation and updation.
generateBtn.addEventListener("click",generateArr)
function generateArr()
{
    arrContainer.innerHTML="";

    for(let i=0;i<arrSize;i++)
    {
        div_sizes[i]=randomNumber(size.min,size.max) 
        divs[i]=document.createElement("div");
        arrContainer.appendChild(divs[i]);
        divs[i].classList.add("arrBar")
        divs[i].style=`width:${100/arrSize-.2}%; height:${div_sizes[i]}%;`      
     
    }
}
// randomnumber generation 
function randomNumber(startVal,endVal){
    return(
        (Math.floor(Math.random()*.5*(endVal-startVal))+10)
    )
}

// update arraysize
size.addEventListener("input",update_array_size)
function update_array_size()
{
    arrSize=size.value;
    generateArr();
}

//Running the appropriate algorithm.

alogoBtn.forEach(element => {
    element.addEventListener("click", runAlgo)
    
});

function runAlgo()
{
    // disable_buttons();
    // console.log(this.innerText=="Bubble");
    // this.classList.add("butt_selected");
    switch(this.innerText)
    {
        case "Bubble":Bubble();
        
        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        // case "Heap":Heap();
        //                 break;
    }
}

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=`width:${100/arrSize-.2}%; height:${height}%; background-color:${color};`
    },c_delay+=delay_time);
    
}


window.onload=update_array_size();
