

function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").textContent="O(N^2)";
    document.getElementById("Time_Average").textContent="Θ(N^2)";
    document.getElementById("Time_Best").textContent="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").textContent="O(1)";

    c_delay=0;

    for(let i=0;i<arrSize-1;i++)
    {
        let index=i,prev=i;
        let j;
        for(j=i+1;j<arrSize;j++)
        {
            div_update(divs[i],div_sizes[i],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index])
           
            {  
                

                    prev=index;
               
                index=j;
                div_update(divs[index],div_sizes[index], "red");//Color update
                 
            }
            if(prev!=i){
            
                div_update(divs[prev],div_sizes[prev], "green");//Color updat 
            }
           
           
        }
        let temp=div_sizes[i];
        div_sizes[i]=div_sizes[index];
        div_sizes[index]=temp;
        div_update(divs[i],div_sizes[i], "red");//Height update
        div_update(divs[index],div_sizes[index], "red");//Height update
        div_update(divs[index],div_sizes[index], "green");//Color updat 
        div_update(divs[i],div_sizes[i], "green");//Color update
        
    }
    div_update(divs[arrSize-1],div_sizes[arrSize-1], "green");//Color update

    // enable_buttons();
}