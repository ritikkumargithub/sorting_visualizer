
function Bubble()
{
    // console.log("hi");
    //Setting Time complexities
    document.getElementById("Time_Worst").textContent="O(N^2)";
    document.getElementById("Time_Average").textContent="Θ(N^2)";
    document.getElementById("Time_Best").textContent="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").textContent="O(1)";

    c_delay=0;

     for(let i=0;i<arrSize-1;i++)
    {
        let j=0;
        for(;j<arrSize-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                let temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "green");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    // enable_buttons();
}