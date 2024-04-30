

//Verificar qual tecla foi clicada
document.addEventListener("keydown", function (event) {
    let tec = event.key;
    switchUse(tec);
    buttonAnimation(tec);
});


//verificar qual card(botao) foi selecionado 
let numberOfButtons = document.querySelectorAll(".drum").length;
    
    for (let i = 0; i <= numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        let num = this.innerHTML;
        switchUse(num);
        buttonAnimation(num);

    });
}


    //Acionar o som denpendendo de qual tecla ou botao foi clicado
        function switchUse(variable){
            switch(variable){
            case 'w':
                let music01 = new Audio("sounds/crash.mp3");
                music01.play();
                break;
            case 'a':
                let music02 = new Audio("sounds/kick-bass.mp3");
                music02.play();
                break;
            case 's':
                    let music03 = new Audio("sounds/snare.mp3");
                    music03.play();
                    break;
            case 'd':
                    let music04 = new Audio("sounds/tom-1.mp3");
                    music04.play();
                    break;
            case 'j':
                    let music05 = new Audio("sounds/tom-2.mp3");
                    music05.play();
                    break;
            case 'k':
                    let music06 = new Audio("sounds/tom-3.mp3");
                    music06.play();
                    break;
            case 'l':
                let music07 = new Audio("sounds/tom-4.mp3");
                music07.play();
                break;
        }
        }

//let music01 = new Audio("sounds/crash.mp3");
//music01.play();

/*function anotheAddEventListener (typeOfEvent, callBack) {
    let eventThatHappened = {
        eventType: "keydown",
        key: k,
        durationOfTheKeydown: 2
    }
    if(eventThatHappened.eventType === typeOfEvent){
        callBack(eventThatHappened);
    }
}*/
function buttonAnimation(keySelect){
    let sim = document.querySelector("." + keySelect);
    sim.classList.add("clickButton");


    setTimeout(() => {
        sim.classList.remove("clickButton");
    }, 100);
}