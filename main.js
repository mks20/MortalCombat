const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    attack:  function attack(){
        console.log(player1 + ' ' + 'figth...');
    }
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    attack:  function attack(){
        console.log(player2 + ' ' + 'figth...');
    }
};

function createElement(tag, classname) {
    const $tag = document.createElement(tag);
    if(classname) {
        $tag.classList.add(classname);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressBar = createElement('div', 'progressbar');
    const $charater = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressBar.appendChild($name);
    $progressBar.appendChild($life);
    $charater.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($charater);   

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';

    if(player.hp < 0) {
        $playerLife.style.width = 0;
        $arenas.appendChild(playerLose(player.name));
        $randomButton.disabled = true;
        
    }
    
    
}

function playerLose(name) {
        const $loseTitle = createElement('div', 'loseTitle');
        $loseTitle.innerText = name + ' lose';
    
        return $loseTitle;
    }


$randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
