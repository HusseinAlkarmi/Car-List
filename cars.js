

var name = prompt("what is your name")

alert("wlecome to my car website " + name )

var favCar = prompt("what is you fav car?")


if(favCar == "ford"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://cdn.jdpower.com/JDPA_2021%20Ford%20Explorer%20Platinum%20White%20Front%20Quarter%20View.jpg'   width='250'  />" + "</div>")
}
else if (favCar =="kia"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*' width='250'     />" + "</div>")
}
else if(favCar =="range rover"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/range-rover-evoque-1.jpg?itok=Ks7kn0hf' width='250'    />" + "</div>")
}
else{
  alert('Sorry we dont have this car')
}