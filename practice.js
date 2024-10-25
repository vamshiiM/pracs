// if and else 

// const username = "vam";

// if(username == "Mav"){
//     console.log("correct!");
// }
// else{
//     console.log("Not Correct!")
// }

// while loop :- run the loop until the condition becomes true
// number finding game


// predicting numbers

// const max = 100;
// const min = 1;
// const num = Math.floor((Math.random()*(max-min +1)+min))

// console.log(num)

// let attempts = 0;
// let play = true;
// let msg;


// while(play){
      
//     msg = prompt("ENTER YOUR NUMBER:")
//     msg = Number(msg);
     
//      if(isNaN(msg)){
//      window.alert("enter a valid number")

//     }else if(msg < min || msg > max){
        
//      window.alert("enter a valid number")

//     }else{
         
//         attempts++;
//         console.log(attempts)

//         if(msg>num){
//             window.alert("little high")
//         }
//         else if(msg<num){
//             window.alert("little low")
//         }
//         else{
//             window.alert(`congrats ${msg} is the correct Number`)
//         }

//         play = false;
        
//     }

// }


// funcitons and loops

const arr = new Array(1,2,3,4,5,6,7,8,9,10);

let number = 15

function Numbers(num){
    if(num == 5){
        console.log("none")

    }else if(num < 5)
    {
        console.log("less than 5")
    }
    else{
        console.log("greater than 5")
    }

}

Numbers(number)


function scann(arr){
    for (let i=0 ; i<arr.length ; i++)
    {
        console.log(`num:${arr[i]} status:${Numbers(arr[i])}`)
    }

}
