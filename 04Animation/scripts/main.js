

 // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');
var ring1 = document.getElementById('ring1');
var ring2 = document.getElementById('ring2');
var boxMiddle = document.getElementById('boxMiddle');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed;
myOtherBox.object3D.rotation.y += rotationSpeed;
myOtherBox.object3D.rotation.z += rotationSpeed;
ring1.object3D.rotation.x += rotationSpeed;
ring2.object3D.rotation.y += rotationSpeed;
boxMiddle.object3D.rotation.x += rotationSpeed;
boxMiddle.object3D.rotation.y += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, -16); // equivalent to 60 fps
