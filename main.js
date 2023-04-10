var dog = 0;
var cat = 0;

function count(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/US2bUnTRH/model.json', modelReady);
   

}

 function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
if (error) {
    console.log("error");
}

else {
    console.log("result");

    r = Math.floor(Math.random() * 255) + 1;
     g= Math.floor(Math.random() * 255) + 1;
     b = Math.floor(Math.random() * 255) + 1;



document.getElementById("detected_voice").innerHTML = result[0].label;
document.getElementById("Cat_number").innerHTML = cat;
document.getElementById("Dog_number").innerHTML = dog;

document.getElementById("dog_num").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("cat_num").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";


if (result[0].label == "Cat") {
    
   
    document.getElementById("Cat_number").innerHTML = cat++ ;
    document.getElementById("image_animal").src = "cat.jpg";


}

else if (result[0].label == "Dog") {

    document.getElementById("Dog_number").innerHTML = dog++ ;
    document.getElementById("image_animal").src = "dog.jpg";

}

else {

    document.getElementById("image_animal").src = "background_sound.png";
}



}
}