// Code your solutions in this file
//  Define the array names.
const names=["Guadalupe", "Ollie", "Aki"];
// Define the function writeCards().
// Return an array of thank you messages for each name provided to the function.
function writeCards(names, event){
    let messages= []
    for ( let i =0; i< names.length; i++){
        messages.push('Thank you, ' + names[i] +', for the wonderful surprise gift!')
    }
    return messages;
}
console.log(writeCards(names, 'surprise'))
let i; 
// Invoke the console.log once for each number, counting down form the number provided to zero.
// Log each number when counting down, starting from the number provided.
function countDown(i) {
    while (i>-1){
        console.log(i);
        i--;
    }
}
countDown(10);