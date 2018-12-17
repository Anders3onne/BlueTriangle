
function run(){
  var firstside= parseInt(document.getElementById('one').value);
  var secondside= parseInt(document.getElementById('two').value);
  var thirdside= parseInt(document.getElementById('three').value);
  var array=[firstside,secondside,thirdside];
  var text;
//if entering positive value with 3 side
if (firstside <=0 || secondside <= 0 || thirdside <= 0) {
  text = "A triangle must have 3 sides with positive definite length!";
}
 //This is not a triangle

else if (
        (firstside + secondside <= thirdside &&
            secondside + firstside <= thirdside) ||
        (firstside + thirdside <= secondside &&
            thirdside + firstside <= secondside) ||
        (secondside + thirdside <= firstside && thirdside + secondside <= firstside)
    ) {
        text = " Not a Triangle";

    }
// this is Equivalateral Triangle

else if (
  firstside === secondside &&
  secondside === thirdside &&
  thirdside === firstside
) {
  text = " equilateral.";
}


// this is an Isoscele Triangle

else if(firstside!==secondside && firstside!==thirdside &&secondside!==thirdside){
  text="Scalene Triangle.";
}
// this is Scalene Triangle

else if (
  firstside === secondside ||
  secondside === thirdside ||
  thirdside === firstside
) {
  text = " isosceles.";
}
//if triangle is scalene

else if (
  firstside !== secondside &&

  firstside !== thirdside &&

  secondN !== thirdside
) {
  text = " scalene";
}
//if triangle is error

else {
  text = " error";
}
document.getElementById("demo").innerHTML = "["+array+"]"+" is ";
document.getElementById("demo").innerHTML += text;
}
