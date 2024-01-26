const card = document.getElementById('card');
const tipoElement = document.getElementById('tipo');
const nomeElement = document.getElementById('nome');
const conteudoElement = document.getElementById('conteudo');

async function fetchCartas(tipo) {
    try {
        const tiposAceitos = ['filme', 'serie', 'musica', 'pessoa', 'lugar', 'coisa'];
        
        // Verifica se o tipo fornecido está entre os aceitos
        if (!tiposAceitos.includes(tipo.toLowerCase())) {
            throw new Error('Tipo inválido.');
        }

        const url = `Cartas/${tipo.toLowerCase()}.json`;
        console.log(`Solicitando dados para o tipo: ${tipo} - URL: ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro ao carregar dados.');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        return { name: 'Erro', content: ['Falha ao carregar dados.'] };
    }
}

async function gerarNovaCarta() {
    const tipos = ['FILME', 'SERIE', 'COISA', 'PESSOA', 'LUGAR', 'MUSICA'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const { name, content } = await fetchCartas(tipo);
    tipoElement.textContent = tipo;
    nomeElement.textContent = name;
    conteudoElement.innerHTML = content.map((tip, index) => `
        <div class="tip">${index + 1}. ${tip}</div>
    `).join('');
    card.className = `card ${tipo.toLowerCase()}`;
}
// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();