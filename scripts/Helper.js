// to adjust speed
let speed=1000;
let delay_time=10000/(Math.floor(arrSize/10)*speed); 
arrSpeed.addEventListener("input", varSpeed);

function varSpeed(){
    // console.log(this.value);
    let val= parseInt(this.value) ;
    switch (val) {
        case 1:
            speed=1;
         
            break;
        case 2:
            speed=10;
            break;
        case 3:
            speed=100;
            break;
        case 4:
            speed=1000;
            break;
        case 5:
            speed=100000;
            break;
        
        default:
            break;
    }
    delay_time=10000/(Math.floor(arrSize/10)*speed);
    // console.log(speed);
    // console.log(delay_time);
}