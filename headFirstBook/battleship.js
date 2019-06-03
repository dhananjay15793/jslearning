var location1=3;
var location2=4;
var location3=5;
var guess;
var hit =0;
var guesses =0;
var isSunk =false;

while(isSunk == false){
    guess=prompt("Ready ,aim ,fire! (Enter a number from 0-6) :");
    if(guess<0 || guess>6){
        alert("Please Enter a valid cell number !");
    }else{
        guesses = guesses+1;
        if(guess ==location1 || guess==location2||guess==location3){
            alert("Hit!")
            hit = hit + 1;
            if(hit == 3){
                isSunk=true;
                alert("you shank my battleship !");
            }

        }else{
            alert("Miss!")
        }
    }
}
var status = "you took " + guesses + " guesses to sink battleship ,"
+"which means your shooting accuracy was "+(3/guesses);
alert(status)