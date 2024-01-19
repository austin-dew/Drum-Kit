let res = [['./images/crash.png','./sounds/crash.mp3'], ['./images/kick.png','./sounds/kick-bass.mp3'], ['./images/snare.png','./sounds/snare.mp3'], ['./images/tom1.png','./sounds/tom-1.mp3'], ['./images/tom2.png','./sounds/tom-2.mp3'], ['./images/tom3.png','./sounds/tom-3.mp3'], ['./images/tom4.png','./sounds/tom-4.mp3']];

let drums = document.querySelectorAll('.drum');
drums.forEach((d,i)=> {
        d.style.backgroundImage = "url(" + res[i][0] + ")";
        d.addEventListener('click', e => {
            new Audio(res[i][1]).play();
            d.classList.add('pressed');
            setTimeout(() => {
                d.classList.remove('pressed');
            }, 100);
        })
        d.letter = d.innerHTML;
    }
);

document.body.addEventListener('keydown', e => {
    switch(e.key) {
        case 'w': 
            drums[0].click();
        break;
        case 'a': 
            drums[1].click();
        break;
        case 's': 
            drums[2].click();
        break;
        case 'd': 
            drums[3].click();
        break;
        case 'j': 
            drums[4].click();
        break;
        case 'k': 
            drums[5].click();
        break;
        case 'l': 
            drums[6].click();
        break;
        default:
    } 
})

