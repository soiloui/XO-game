const gridArea = document.querySelector('.game_area');
const areas = document.querySelectorAll('.area');
const scoreX_div = document.querySelector('.score_count-1');
const scoreO_div = document.querySelector('.score_count-2');
let turn = 'x';

move = e =>{
    const area = e.currentTarget;
    const areaNum = area.id.match(/\d/g).toString();
    if (area.innerHTML != ''){
        console.log(`Not null`);
    }else{
        console.log(`Null`);
    }
}


areas.forEach(area => {
    area.addEventListener('click', move);
});