const gridArea = document.querySelector('.game_area');
const areas = document.querySelectorAll('.area');
const scoreX_div = document.querySelector('.score_count-1');
const scoreO_div = document.querySelector('.score_count-2');
const turnText = document.querySelector('#turn');
let turn = 'x';

move = e =>{
    const area = e.currentTarget;
    const areaNum = area.id.match(/\d/g).toString();
    if (area.classList.contains('areaBusy')){
        console.log(`Not null`);
    }else{
        if (turn == 'x'){
            area.innerHTML = '<p>X</p>';
            turnText.innerHTML = 'O Turn now.'
        } else{
            area.innerHTML = '<p>O</p>';
            turnText.innerHTML = 'X Turn now.'
        }
        turn = (turn == 'x') ? 'o' : 'x';
        area.classList.add('areaBusy');
    }
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