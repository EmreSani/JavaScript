let numberInput = document.getElementById("num");
let startButton = document.querySelector(".btn-start");
let guessButton = document.querySelector(".btn-guess");
let resultP = document.querySelector("#result");
let randomNumber;


const createRandomNumber = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min;


const startGame = ()=>{
    randomNumber = createRandomNumber(1, 100);
    console.log(randomNumber);
    startButton.style.display = "none";
    numberInput.style.display = "inline";
    guessButton.style.display = "inline";
    resultP.innerHTML = "";
}

const guessNumber = ()=>{
    let num = Number(numberInput.value);

    if(num >= 1 && num <= 100 && Number.isInteger(num)){

        if(num > randomNumber){
            resultP.innerHTML = "Büyük sayı girdiniz.";
        }
        else if(num < randomNumber){
            resultP.innerHTML = "Küçük sayı girdiniz.";
        }
        else {
            resultP.innerHTML = "Tebrikler, bildiniz. Sayı: " + randomNumber;
            startButton.style.display = "inline";
            numberInput.style.display = "none";
            guessButton.style.display = "none";
        }

        numberInput.value = "";
        numberInput.focus();
    }
    else {
        resultP.innerHTML = "Lütfen 1'den 100'e kadar bir sayı giriniz."
    }

    
}
