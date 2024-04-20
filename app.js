const myImage = ['dice1','dice2','dice3','dice4','dice5','dice6'];

var setDice1 = document.querySelector('.img1');
var setDice2 = document.querySelector('.img2');

// if(randomNumber1>randomNumber2){
//     getTitle.innerHTML = '	&#128681'+" Player 1 Wins ";
// }else if(randomNumber1<randomNumber2){
//     getTitle.innerHTML = "Player 2 Wins"+ ' 	&#128681';
// }else{
//     getTitle.innerHTML = 'Draw';
// }

function generate(){
    var randomNumber1= Math.floor(Math.random()*6)+0; 
    var randomNumber2= Math.floor(Math.random()*6)+0; 

    var random1 = randomNumber1 + 1;
    var random2 = randomNumber2 + 1;
    
    var selectImg1 = myImage[randomNumber1];
    var selectImg2 = myImage[randomNumber2];
    setDice1.setAttribute('src','./'+selectImg1+'.png');
    setDice2.setAttribute('src','./'+selectImg2+'.png');

// setDice1.src = images[2];

    var getTitle = document.querySelector('h1');

    var sum = random1+random2;

    if(sum%2==0){
        getTitle.innerHTML = sum + " nút ";
        getTitle.innerHTML += "<span> chẵn </span>"
        var even = document.querySelector('span');
        even.style.color = 'yellow';
    }else if(sum%2!=0){
        getTitle.innerHTML = sum +" nút ";
        getTitle.innerHTML += "<span> lẻ </span>"
        var even = document.querySelector('span');
        even.style.color = 'red';
    }
}