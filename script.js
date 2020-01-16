const gridArea = document.querySelector('.game_area');
const areas = document.querySelectorAll('.area');
const reset_button = document.querySelector('#reset_score')
const scoreX_div = document.querySelector('.score_count-1');
const scoreO_div = document.querySelector('.score_count-2');
let scoreX = 0;
let scoreO = 0;
const turnText = document.querySelector('#turn');
const winText = document.querySelector('.winner');
const winTemplate = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let xTemplate = [];
let oTemplate = [];
let turn = 'x';

move = e =>{
    const area = e.currentTarget;
    const areaNum = area.id.match(/\d/g).toString();
    if (area.classList.contains('areaBusy')){
        console.log(`Not null`);
    }else{
        let xoro;
        if (turn == 'x'){
            area.innerHTML = '<p>X</p>';
            turnText.innerHTML = 'O Turn now.'
            xTemplate.push(areaNum);
            xoro = [xTemplate, turn];
        } else{
            area.innerHTML = '<p>O</p>';
            turnText.innerHTML = 'X Turn now.'
            oTemplate.push(areaNum);
            xoro = [oTemplate, turn];
        }
        turn = (turn == 'x') ? 'o' : 'x';
        area.classList.add('areaBusy');
        xoro[0].sort((a, b) => a > b ? 1 : -1).toString();
        checkMove(xoro[0], xoro[1]);
    }
}

checkMove = (template, xoro) =>{
    
    if (template.length > 2){
        let finded = false;
        console.log(template);
        winTemplate.forEach(combination =>{
            if(template.toString().includes(combination) && finded == false){
                if(xoro == 'x'){
                    scoreX++;
                    scoreX_div.innerHTML = scoreX;
                }else{
                    scoreO++;
                    scoreO_div.innerHTML = scoreO;
                }
                finded = true;
                endRound(xoro);
            }
        });
        if((xTemplate.length + oTemplate.length) == 9){
            resetAreas();
            return
        }
    }
}

endRound = (xoro) =>{
    winText.innerHTML = xoro;
    winText.classList.remove('winner_non-visible');
    let showHideAnimation = setInterval(function(){ winText.classList.toggle('winner_non-visible'); }, 250);
    setTimeout(function(){ 
        clearInterval(showHideAnimation);
        winText.classList.add('winner_non-visible');
    }, 1400);
    resetAreas();
}

resetGame = () =>{
    resetAreas();
    scoreX = 0;
    scoreO = 0;
    scoreO_div.innerHTML = scoreO;
    scoreX_div.innerHTML = scoreX;
}

resetAreas = () =>{
    areas.forEach(area =>{
        area.innerHTML = '';
        area.classList.remove('areaBusy');
    });
    xTemplate.length = 0;
    oTemplate.length = 0;
    turn = 'x';
    turnText.innerHTML = 'X Turn now.';
}



areas.forEach(area => {
    area.addEventListener('click', move);
    area.addEventListener('mouseover',() => {
        if (!area.classList.contains('areaBusy')){
            area.innerHTML = turn;
        }
    });
    area.addEventListener('mouseout',() => {
        if (!area.classList.contains('areaBusy')){
            area.innerHTML = '';
        }
    });
});

reset_button.addEventListener('click', resetGame);