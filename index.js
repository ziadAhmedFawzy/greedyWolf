let moneyFeild = document.getElementById("moneyFeild");
let guessing = document.getElementById("guessing");
let GO = document.getElementById("GO");
let COUNT = document.getElementById("COUNT");
let account = document.getElementById("account");
let prize = document.getElementById("prize");

// delete this is to play
localStorage.setItem("money", 5000);

let acc = localStorage.getItem("money");
let prizeNumber = Math.ceil(Math.random() * 20);

account.innerHTML = acc + " $";
prize.innerHTML = prizeNumber; 

// function to give random number
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

let n2 = Math.floor(Math.random() * 50);
let n = randomNumber(n2), i = 0;

let counter = () => {
    if(i < n) {
        COUNT.innerHTML = i;
    }
    i++;
}

GO.addEventListener("click", function() {
    setInterval(counter, 50);
    if(guessing.value == n) {
        guessing.value = '';
        moneyFeild.value = '';
        localStorage.setItem("money", +acc + prizeNumber);
    }
    else {
        localStorage.setItem("money", acc - moneyFeild.value);
        guessing.value = '';
        moneyFeild.value = '';
    }
})