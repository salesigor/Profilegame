const generateBtn = document.getElementById('generate-btn');
const card = document.getElementById('card');
function gerarNovaCarta() {
    const topics = [
        {
            name: 'FILME',
            color: 'green',
            content: 'Sou uma série de filmes de fantasia. Meus personagens vin de uma região do Golfo do México.'
        },
        {
            name: 'COISA',
            color: 'blue',
            content: 'Piratas do Caribe 2 tenho asas. Sou muito rápido. Minhas histórias se passam entre 1650 e 1730.'
        },
        {
            name: 'SÉRIE',
            color: 'red',
            content: 'Sou uma sitcom da década de 2000. Conto a história de uma família desajustada. O melhor amigo de Gregory Weiger é meu pai.'
        },
        {
            name: 'PESSOA',
            color: 'yellow',
            content: 'Sou uma garota tímida. Tive pouca vida social e desconfio das pessoas. Nasci em um laboratório. Sou muito leal aos meus amigos.'
        },
        {
            name: 'MÚSICA',
            color: 'purple',
            content: 'A música é sobre um lugar onde as pessoas vão se divertir. Tem um ritmo acelerado e é muito popular nas festas.'
        },
    ];

    const topic = topics[Math.floor(Math.random() * topics.length)];

    card.innerHTML = `
        <div class="topic">${topic.name}</div>
        <div class="content">${topic.content}</div>
    `;

    card.className = `card ${topic.color}`;
}

generateBtn.addEventListener('click', gerarNovaCarta);
// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();