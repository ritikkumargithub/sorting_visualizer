function Insertion() {
  //Setting Time complexities
  document.getElementById("Time_Worst").textContent = "O(N^2)";
  document.getElementById("Time_Average").textContent = "Θ(N^2)";
  document.getElementById("Time_Best").textContent = "Ω(N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").textContent = "O(1)";

  c_delay = 0;

  for (let i = 1; i < arrSize ; i++) {
    // let index = -1,
    //   prev = i;
    let temp = div_sizes[i];
    let j=i-1;
    div_update(divs[i], div_sizes[i], "yellow"); //Color update

    while (j >= 0 && div_sizes[j]>temp) {
      
     
        div_sizes[j+1] = div_sizes[j];
        div_update(divs[j], div_sizes[j], "red"); //Height update
        if(j+1!=i){

            div_update(divs[j+1], div_sizes[j+1], "green"); //Height update
        }
        // prev=index;
        // div_update(divs[index],div_sizes[index], "red");//Color update
      
      // if(prev!=i){

      //     div_update(divs[prev],div_sizes[prev], "blue");//Color updat
      // }
      j--;
    }
   

    div_sizes[j+1] = temp;
    div_update(divs[j+1], div_sizes[j+1], "green");
    div_update(divs[0], div_sizes[0], "green");
    div_update(divs[i], temp, "green");
    
    // div_update(divs[index], div_sizes[index], "blue"); //Color updat
    // div_update(divs[j+1], div_sizes[j+1], "#0D6EFD"); //Color update
  }
  div_update(divs[arrSize - 1], div_sizes[arrSize - 1], "green"); //Color update

  // enable_buttons();
}