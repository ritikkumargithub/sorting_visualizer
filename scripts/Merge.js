

function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";


    c_delay=0;
    merge_partition(0,arrSize-1);
    function merge_partition(start,end)
{
    if(start < end)
    {
        let mid=Math.floor((start + end) / 2);
        
        div_update(divs[mid],div_sizes[mid],"green");//Color update

        merge_partition(start,mid);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
function merge_sort(start,mid,end)
{
    let sizeLeft=mid+1-start,sizeRight=end-mid;

    let left=[],right=[]
    for(let i=0; i<sizeLeft; i++){
        left[i]=div_sizes[i+start];
      
    }
    for(let i=0; i<sizeRight; i++){
        right[i]=div_sizes[i+mid+1];
    }

    let j=0,i=0,k=start;
        while(i<sizeLeft||j<sizeRight){
            if(i<sizeLeft&&j<sizeRight){
                if(left[i]<right[j]){
                    div_sizes[k++]=left[i++];
                    div_update(divs[k-1],div_sizes[k-1],"red");//Color update
                    
                }
                else{
                    div_sizes[k++]=right[j++];
                    div_update(divs[k-1],div_sizes[k-1],"red");//Color update
                    
                }
            }
            else if(i<sizeLeft){
                div_sizes[k++]=left[i++];
                div_update(divs[k-1],div_sizes[k-1],"red");
         
            }
            else if(j<sizeRight){
                div_sizes[k++]=right[j++];
                div_update(divs[k-1],div_sizes[k-1],"red");//Color
            }
            div_update(divs[k-1],div_sizes[k-1],"green");//Color update
           
        }
}

    
    // enable_buttons();
}