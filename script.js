const card = document.getElementById('card');
const tipoElement = document.getElementById('tipo');
const nomeElement = document.getElementById('nome');
const conteudoElement = document.getElementById('conteudo');

const cartas = {
    filme: [
        {
            "name": "Piratas do Caribe",
            "content": [
                "Tem Johnny Depp como protagonista.",
                "Fala sobre piratas e tesouros.",
                "O personagem principal é Jack Sparrow.",
                "Há uma maldição envolvendo o ouro.",
                "A trilha sonora é marcante.",
                "Possui várias sequências.",
                "O mar é um cenário frequente.",
                "Lançado no início dos anos 2000.",
                "É baseado em uma atração da Disney.",
                "Dirigido por Gore Verbinski."
            ]
        },
        {
            "name": "Inception",
            "content": [
                "Dirigido por Christopher Nolan.",
                "Explora o conceito de sonhos.",
                "Elenco estelar com Leonardo DiCaprio.",
                "Cenas de ação espetaculares.",
                "Ganhou 4 Oscars.",
                "Mistura de ficção científica e ação.",
                "Efeitos visuais impressionantes.",
                "Enredo complexo e intrigante.",
                "Recebeu aclamação da crítica.",
                "Influência de filmes noir."
            ]
        }
    ],
    lugar: [
        {
            "name": "Machu Picchu",
            "content": [
                "Antiga cidade inca no Peru.",
                "Localizada nas montanhas dos Andes.",
                "Construída no século XV.",
                "Patrimônio Mundial da UNESCO.",
                "Acesso via trilha Inca ou trem.",
                "Vistas panorâmicas deslumbrantes.",
                "Arquitetura sofisticada e engenhosa.",
                "Templos, terraços e praças preservados.",
                "Mistério em torno de sua finalidade original.",
                "Um dos destinos turísticos mais visitados."
            ]
        },
        {
            "name": "Grande Barreira de Coral",
            "content": [
                "Sistema de recifes no nordeste da Austrália.",
                "Maior estrutura de coral do mundo.",
                "Estende-se por mais de 2.300 quilômetros.",
                "Casa de uma diversidade incrível de vida marinha.",
                "Inclui mais de 2.900 recifes individuais.",
                "Patrimônio Mundial da UNESCO desde 1981.",
                "Ameaçada por mudanças climáticas.",
                "Destino popular para mergulho e snorkeling.",
                "Visível do espaço.",
                "Importante para ecossistema marinho global."
            ]
        }
    ],
    musica: [
        {
            "name": "Aline Barros",
            "content": [
                "Cantora gospel brasileira.",
                "Referência na música gospel contemporânea.",
                "Várias vezes premiada, incluindo Grammy Latino.",
                "Hits como 'Ressuscita-me' e 'Sonda-me, Usa-me'.",
                "Atua como pastora e é envolvida em causas sociais.",
                "Carreira marcada por álbuns de sucesso.",
                "Presença ativa nas redes sociais e na comunidade evangélica.",
                "Participação em projetos de louvor e adoração.",
                "Reconhecida por sua voz potente e interpretação emocional.",
                "Contribuições significativas para a música gospel no Brasil."
            ]
        },
        {
            "name": "Snarky Puppy",
            "content": [
                "Grupo de música instrumental fusion.",
                "Formado por Michael League em 2004.",
                "Ganhador de vários Grammy Awards.",
                "Conhecido por sua fusão única de estilos musicais.",
                "Colaborações com diversos artistas renomados.",
                "Presença forte na cena internacional de jazz e fusion.",
                "Música instrumental complexa e envolvente.",
                "Álbuns aclamados como 'We Like It Here' e 'Culcha Vulcha'.",
                "Integrantes trazem influências diversas à banda.",
                "Shows ao vivo conhecidos pela energia contagiante."
            ]
        }
    ],
    pessoa: [
        {
            "name": "Elon Musk",
            "content": [
                "Empresário e empreendedor sul-africano.",
                "Fundador da SpaceX e Tesla, Inc.",
                "Co-fundador do PayPal e Neuralink.",
                "Visionário no desenvolvimento de tecnologias espaciais.",
                "Defensor de energia sustentável e veículos elétricos.",
                "Participou da criação da OpenAI.",
                "Envolvimento em projetos de transporte de alta velocidade.",
                "Papel importante na popularização dos carros elétricos.",
                "Objetivo de colonizar Marte.",
                "Presença ativa nas redes sociais e mídia."
            ]
        },
        {
            "name": "Emma Watson",
            "content": [
                "Atriz britânica.",
                "Conhecida por seu papel como Hermione Granger em Harry Potter.",
                "Ativista pelos direitos das mulheres.",
                "Embaixadora da Boa Vontade da ONU Mulheres.",
                "Graduada em Literatura Inglesa pela Brown University.",
                "Participou de filmes após a saga Harry Potter.",
                "Defende a igualdade de gênero e direitos humanos.",
                "Engajada em questões sociais e ambientais.",
                "Estilo de moda consciente e sustentável.",
                "Mantém uma presença discreta nas redes sociais."
            ]
        }
    ],
    serie: [
        {
            "name": "Stranger Things",
            "content": [
                "Passa-se na década de 80.",
                "Envolvimento de ficção científica.",
                "A cidade é Hawkins.",
                "Há personagens com habilidades especiais.",
                "Uma dimensão alternativa é central na trama.",
                "Um grupo de crianças é protagonista.",
                "O laboratório é um local importante.",
                "Monstros conhecidos como Demogorgon.",
                "A amizade é um tema chave.",
                "Criação dos irmãos Duffer."
            ]
        },
        {
            "name": "Breaking Bad",
            "content": [
                "Um professor de química se envolve no tráfico de metanfetamina.",
                "Transformação do protagonista ao longo da série.",
                "Parceria com um ex-aluno.",
                "Personagem icônico: Walter White.",
                "Exploração de temas éticos e morais.",
                "Presença marcante do cartel de drogas.",
                "Suspense e reviravoltas constantes.",
                "A série se passa em Albuquerque, Novo México.",
                "A busca pelo poder é um elemento central.",
                "Concluída em cinco temporadas."
            ]
        }
    ]
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function gerarNovaCarta() {
    const tipos = Object.keys(cartas);
    const tipoAleatorio = getRandomItem(tipos);
    const { name, content } = getRandomItem(cartas[tipoAleatorio]);

    tipoElement.textContent = tipoAleatorio;
    nomeElement.textContent = name;
    conteudoElement.innerHTML = content.map((tip, index) => `
        <div class="tip">${index + 1}. ${tip}</div>
    `).join('');
    card.className = `card ${tipoAleatorio.toLowerCase()}`;
}

// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();
