const generateBtn = document.getElementById('generate-btn');
const card = document.getElementById('card');
const cardTitle = document.querySelector('.card .card-header .topic-title');
const cardContent = document.querySelector('.card .card-content');

function gerarNovaCarta() {
    const topics = [
        {
            type: 'FILME',
            color: 'green',
            name: 'Piratas do Caribe',
            content: [
                'Tem Johnny Depp como protagonista.',
                'Fala sobre piratas e tesouros.',
                'O personagem principal é Jack Sparrow.',
                'Há uma maldição envolvendo o ouro.',
                'A trilha sonora é marcante.',
                'Possui várias sequências.',
                'O mar é um cenário frequente.',
                'Lançado no início dos anos 2000.',
                'É baseado em uma atração da Disney.',
                'Dirigido por Gore Verbinski.'
            ]
        },
        {
            type: 'SERIE',
            color: 'red',
            name: 'Stranger Things',
            content: [
                'Passa-se na década de 80.',
                'Envolvimento de ficção científica.',
                'A cidade é Hawkins.',
                'Há personagens com habilidades especiais.',
                'Uma dimensão alternativa é central na trama.',
                'Um grupo de crianças é protagonista.',
                'O laboratório é um local importante.',
                'Monstros conhecidos como Demogorgon.',
                'A amizade é um tema chave.',
                'Criação dos irmãos Duffer.'
            ]
        },
        {
            type: 'COISA',
            color: 'blue',
            name: 'Computador',
            content: [
                'É uma máquina eletrônica.',
                'Processa dados rapidamente.',
                'Possui uma unidade de armazenamento.',
                'Permite acesso à internet.',
                'Utiliza um sistema operacional.',
                'Pode ser usado para jogos.',
                'É essencial no trabalho atual.',
                'Existem diferentes marcas e modelos.',
                'Tem periféricos como teclado e mouse.',
                'Desenvolvido ao longo da história.'
            ]
        },
        {
            type: 'PESSOA',
            color: 'yellow',
            name: 'Albert Einstein',
            content: [
                'Famoso físico alemão.',
                'Autor da Teoria da Relatividade.',
                'Nasceu em 1879 e morreu em 1955.',
                'Ganhou o Prêmio Nobel de Física em 1921.',
                'Contribuiu para o desenvolvimento da bomba atômica.',
                'Era conhecido por sua mente brilhante e personalidade excêntrica.',
                'Trabalhou na Universidade de Princeton.',
                'Era pacifista e ativista político.',
                'Imigrante judeu durante a Segunda Guerra Mundial.',
                'Teve importantes contribuições para a física teórica.'
            ]
        },
        {
            type: 'LUGAR',
            color: 'purple',
            name: 'Paris',
            content: [
                'Capital da França.',
                'Conhecida como "Cidade Luz".',
                'Famosa pela Torre Eiffel.',
                'O rio Sena atravessa a cidade.',
                'Centro de moda e cultura.',
                'Possui vários museus renomados.',
                'Lar da Catedral de Notre-Dame.',
                'Gastronomia conhecida mundialmente.',
                'Bairro de Montmartre é famoso por sua arte.',
                'Importante centro histórico e político.'
            ]
        },
        // Adicione mais objetos para outros tipos de cartas conforme necessário.
    ];

    const topic = topics[Math.floor(Math.random() * topics.length)];

    cardTitle.innerHTML = `
        <div class="topic-title ${topic.type.toLowerCase()}">${topic.type}</div>
    `;

    cardName.innerHTML = `
        <div class="topic-name" style="color: ${topic.color}">${topic.name}</div>
    `;

    cardContent.innerHTML = topic.content.map((tip, index) => `
        <div class="tip">${index + 1}. ${tip}</div>
    `).join('');

    card.className = `card ${topic.color} ${topic.type.toLowerCase()}`;
}

generateBtn.addEventListener('click', gerarNovaCarta);

// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();