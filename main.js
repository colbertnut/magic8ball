function test() {
var answer1 = "wouldn't it be funny to die in a living room";
var answer2 = "You know you're asking a plastic ball full of blue water...";
var answer3 = "Four score & seven years ago";
var answer4 = "!TRY AGAIN!";
var answer5 = "A full mouth gathers no feet";
var easterEgg = "a starship ride has been promised to you by the galactic wizard";
var myarray = new Array(answer1, answer2, answer3,  answer4, answer5, easterEgg);
console.log(myarray);
var random = myarray[Math.floor(Math.random() * myarray.length)];
document.getElementById("container").innerHTML=random;
}

function clearAll(){
  document.getElementById("container").innerHTML="";
}
