//Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");

const resetBtn = document.querySelector("#resetBtn");

//Varbiales for time values

let seconds = 0 ;
let minutes = 0;
let hours = 0 ;

//stop watch logic/function

function stopWatch(){
    seconds++;

    if(seconds / 60 ===1){

    }
        seconds = 0;
        minutes ++;
        
        if(minutes/60 ===1){
            minutes=0;
            hours++;
        }

        

     

}