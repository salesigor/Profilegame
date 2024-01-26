const card = document.getElementById('card');
const tipoElement = document.getElementById('tipo');
const nomeElement = document.getElementById('nome');
const conteudoElement = document.getElementById('conteudo');

const cartas = {
    filme: [
        {
            "name": "Piratas do Caribe: A Maldição do Pérola Negra",
            "content": [
                "Eu sou uma obra de aventura e fantasia.",
                "Johnny Depp brilha como o excêntrico Jack Sparrow.",
                "Exploro o mundo dos piratas e tesouros misteriosos.",
                "Uma maldição sobrenatural envolve um tesouro de ouro.",
                "A trilha sonora, com temas inesquecíveis, intensifica a atmosfera.",
                "Esta é a primeira de várias sequências emocionantes.",
                "O mar é um cenário espetacular que desempenha um papel crucial.",
                "Lançado nos cinemas no início dos anos 2000, um sucesso instantâneo.",
                "Inspirado em uma atração clássica da Disney.",
                "A direção magistral é de Gore Verbinski."
            ]
        },
        {
            "name": "Tropa de Elite",
            "content": [
                "Eu sou uma obra de ação policial brasileira.",
                "Dirigido por José Padilha.",
                "Wagner Moura interpreta o Capitão Nascimento.",
                "Explora o BOPE no combate ao tráfico no Rio de Janeiro.",
                "Ganhou o Urso de Ouro em Berlim.",
                "Conhecido pelo estilo de filmagem realista.",
                "Lançado em 2007."
            ]
        },
        {
            "name": "Cidade de Deus",
            "content": [
                "Eu sou uma obra de drama brasileiro.",
                "Dirigido por Fernando Meirelles.",
                "Baseado no livro de Paulo Lins.",
                "Explora a vida nas favelas do Rio de Janeiro.",
                "Lançado em 2002.",
                "Trilha sonora marcante de funk carioca.",
                "Ganhou prêmios e foi indicado ao Oscar.",
                "Narrativa não linear."
            ]
        },
        {
            "name": "Central do Brasil",
            "content": [
                "Eu sou uma obra de drama brasileiro.",
                "Dirigido por Walter Salles.",
                "Fernanda Montenegro é a protagonista.",
                "A história segue uma viagem pelo Brasil.",
                "Ganhou o Urso de Ouro em Berlim.",
                "Indicado ao Oscar de Melhor Filme Estrangeiro.",
                "Lançado em 1998."
            ]
        },
        {
            "name": "O Auto da Compadecida",
            "content": [
                "Eu sou uma obra de comédia brasileira.",
                "Baseado na peça de Ariano Suassuna.",
                "Dirigido por Guel Arraes.",
                "Matheus Nachtergaele interpreta João Grilo.",
                "Explora elementos do folclore nordestino.",
                "Lançado em 2000.",
                "Recebeu diversos prêmios.",
                "Trilha sonora regional e humor irreverente."
            ]
        },
        {
            "name": "Tropa de Elite 2: O Inimigo Agora é Outro",
            "content": [
                "Eu sou uma obra de ação policial brasileira.",
                "Sequência de Tropa de Elite.",
                "Wagner Moura reprisa o papel de Capitão Nascimento.",
                "Explora a corrupção policial e política no Rio de Janeiro.",
                "Lançado em 2010.",
                "Quebrou recordes de bilheteria no Brasil.",
                "Dirigido por José Padilha."
            ]
        },
        {
            "name": "O Que é Isso, Companheiro?",
            "content": [
                "Eu sou uma obra de drama brasileiro.",
                "Dirigido por Bruno Barreto.",
                "Baseado no livro de Fernando Gabeira.",
                "Explora o sequestro do embaixador dos EUA no Brasil em 1969.",
                "Indicado ao Oscar de Melhor Filme Estrangeiro.",
                "Lançado em 1997.",
                "Conta com Alan Arkin no elenco."
            ]
        },
        {
            "name": "Bacurau",
            "content": [
                "Eu sou uma obra de ficção científica brasileira.",
                "Dirigido por Kleber Mendonça Filho e Juliano Dornelles.",
                "Explora um Brasil fictício em um futuro próximo.",
                "Venceu o Prêmio do Júri no Festival de Cannes.",
                "Lançado em 2019.",
                "Combina elementos de western e thriller."
            ]
        },
        {
            "name": "O Senhor dos Anéis: A Sociedade do Anel",
            "content": [
                "Eu sou uma obra de fantasia épica.",
                "Dirigido por Peter Jackson.",
                "Baseado no livro de J.R.R. Tolkien.",
                "Parte da trilogia O Senhor dos Anéis.",
                "Ganhou 4 Oscars.",
                "Lançado em 2001.",
                "A jornada do Um Anel é central na trama."
            ]
        },
        {
            "name": "Coco",
            "content": [
                "Eu sou uma obra de animação da Pixar.",
                "Dirigido por Lee Unkrich e Adrian Molina.",
                "Explora a tradição mexicana do Dia dos Mortos.",
                "Ganhou 2 Oscars, incluindo Melhor Animação.",
                "Lançado em 2017.",
                "Trilha sonora emocionante e visual deslumbrante."
            ]
        },
        {
            "name": "O Poderoso Chefão: Parte II",
            "content": [
                "Eu sou uma obra de drama criminal.",
                "Dirigido por Francis Ford Coppola.",
                "Sequência de O Poderoso Chefão.",
                "Explora a ascensão de Vito Corleone e a vida de seu filho Michael.",
                "Ganhou 6 Oscars, incluindo Melhor Filme.",
                "Lançado em 1974.",
                "Considerado uma das melhores sequências de todos os tempos."
            ]
        },
        {
            "name": "Pantera Negra",
            "content": [
                "Eu sou uma obra de super-herói da Marvel.",
                "Dirigido por Ryan Coogler.",
                "Chadwick Boseman interpreta o rei T'Challa.",
                "Explora o reino fictício de Wakanda.",
                "Ganhou 3 Oscars.",
                "Lançado em 2018.",
                "Significativo pela representação e diversidade."
            ]
        },
        {
            "name": "O Exorcista",
            "content": [
                "Eu sou uma obra de horror sobrenatural.",
                "Dirigido por William Friedkin.",
                "Baseado no livro de William Peter Blatty.",
                "Explora a possessão demoníaca de uma menina.",
                "Lançado em 1973.",
                "Cena da cabeça girando é icônica.",
                "Ganhou 2 Oscars."
            ]
        },
        {
            "name": "A Vida é Bela",
            "content": [
                "Eu sou uma obra de comédia dramática italiana.",
                "Dirigido por Roberto Benigni.",
                "Ganhou o Oscar de Melhor Filme Estrangeiro.",
                "Explora a relação de um pai e seu filho em um campo de concentração.",
                "Lançado em 1997.",
                "Mistura humor e emoção de maneira única."
            ]
        },
        {
            "name": "Matrix",
            "content": [
                "Eu sou uma obra de ficção científica revolucionária.",
                "Dirigido pelos irmãos Wachowski.",
                "Lançado em 1999.",
                "Explora realidade virtual e inteligência artificial.",
                "Famosa cena de 'bullet time'.",
                "Influenciou a cultura pop.",
                "Trilogia completa com Reloaded e Revolutions."
            ]
        },
        {
            "name": "O Rei Leão",
            "content": [
                "Eu sou uma obra de animação clássica da Disney.",
                "Dirigido por Roger Allers e Rob Minkoff.",
                "Lançado em 1994.",
                "Trilha sonora inesquecível de Elton John e Tim Rice.",
                "Explora temas de amizade e responsabilidade.",
                "Ganhou 2 Oscars, incluindo Melhor Canção Original."
            ]
        },
        {
            "name": "O Fabuloso Destino de Amélie Poulain",
            "content": [
                "Eu sou uma obra de comédia romântica francesa.",
                "Dirigido por Jean-Pierre Jeunet.",
                "Audrey Tautou interpreta Amélie.",
                "Explora a vida de uma jovem em Montmartre, Paris.",
                "Lançado em 2001.",
                "Visualmente encantador e narrativa única."
            ]
        },
        {
            "name": "Interestelar",
            "content": [
                "Eu sou uma obra de ficção científica.",
                "Dirigido por Christopher Nolan.",
                "Explora viagens interestelares para salvar a humanidade.",
                "Matthew McConaughey é o protagonista.",
                "Efeitos visuais espetaculares.",
                "Lançado em 2014.",
                "Aborda teorias científicas complexas."
            ]
        },
        {
            "name": "Mad Max: Estrada da Fúria",
            "content": [
                "Eu sou uma obra de ação pós-apocalíptica.",
                "Dirigido por George Miller.",
                "Tom Hardy interpreta Max Rockatansky.",
                "Charlize Theron é Imperatriz Furiosa.",
                "Ganhou 6 Oscars.",
                "Cenas de ação intensas e visual arrebatador.",
                "Lançado em 2015."
            ]
        },
        {
            "name": "O Labirinto do Fauno",
            "content": [
                "Eu sou uma obra de fantasia sombria.",
                "Dirigido por Guillermo del Toro.",
                "Lançado em 2006.",
                "Explora a Espanha pós-Guerra Civil.",
                "Uma jovem se aventura em um mundo mágico.",
                "Ganhou 3 Oscars.",
                "Narrativa adulta com elementos de conto de fadas."
            ]
        },
        {
            "name": "A Origem",
            "content": [
                "Eu sou uma obra de ficção científica.",
                "Dirigido por Christopher Nolan.",
                "Leonardo DiCaprio é o protagonista.",
                "Explora a arquitetura dos sonhos.",
                "Ganhou 4 Oscars.",
                "Enredo complexo e reviravoltas surpreendentes.",
                "Lançado em 2010."
            ]
        }
    ],
    lugar: [
        {
          "nome": "Coliseu de Roma",
          "content": [
            "Sou um antigo anfiteatro romano.",
            "Estou localizado no centro de Roma, Itália.",
            "Fui construído no século I d.C.",
            "Fui palco de combates de gladiadores e eventos públicos.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Minha arquitetura é imponente e grandiosa.",
            "Já acomodei dezenas de milhares de espectadores.",
            "Sou testemunha de eventos históricos significativos.",
            "Sou visitado por milhões de turistas anualmente.",
            "Sou um símbolo icônico da Roma Antiga."
          ]
        },
        {
          "nome": "Torre Eiffel",
          "content": [
            "Sou um monumento emblemático de Paris, França.",
            "Fui projetado por Gustave Eiffel.",
            "Minha construção foi para a Exposição Mundial de 1889.",
            "Tenho uma altura de 324 metros.",
            "Minha estrutura é distintiva de ferro.",
            "Ofereço vistas panorâmicas da cidade.",
            "Sou um dos pontos turísticos mais visitados do mundo.",
            "Sou iluminada à noite, criando um espetáculo visual.",
            "Sou um elemento central da paisagem parisiense.",
            "Simbolizo a elegância e a engenhosidade arquitetônica."
          ]
        },
        {
          "nome": "Monte Rushmore",
          "content": [
            "Sou um conjunto de esculturas em montanha nos Estados Unidos.",
            "Estou localizado no estado da Dakota do Sul.",
            "Represento quatro presidentes dos EUA: Washington, Jefferson, Roosevelt e Lincoln.",
            "Fui criado pelo escultor Gutzon Borglum.",
            "Fui concluído em 1941.",
            "Tenho enormes rostos esculpidos na pedra.",
            "Sou uma atração turística nacional.",
            "Reflito a história e a liderança americana.",
            "Estou situado em uma paisagem pitoresca.",
            "Quem sou eu?"
          ]
        },
        {
          "nome": "Cataratas do Iguaçu",
          "content": [
            "Sou um conjunto de quedas d'água na fronteira Brasil-Argentina.",
            "Estou entre as maiores do mundo em volume de água.",
            "Sou rodeado por uma exuberante floresta tropical.",
            "Fui designado como Patrimônio Mundial pela UNESCO.",
            "Ofereço impressionantes passeios de barco.",
            "Proporciono visões espetaculares das cataratas.",
            "Sou habitat para uma variedade de flora e fauna.",
            "Sou um local de importância ambiental e turística.",
            "Sou visitado por entusiastas de natureza e aventura.",
            "Sou um impactante símbolo natural da América do Sul."
          ]
        },
        {
          "nome": "Praia de Bora Bora",
          "content": [
            "Estou localizada na Polinésia Francesa, no Pacífico Sul.",
            "Sou conhecida por minhas águas cristalinas e areias brancas.",
            "Sou um destino popular para lua de mel.",
            "Sou cenário de paisagens tropicais deslumbrantes.",
            "Ofereço atividades de mergulho e snorkeling excepcionais.",
            "Disponho de acomodações em bangalôs sobre a água.",
            "Sou rodeada por recifes de coral coloridos.",
            "Ofereço uma experiência luxuosa em um paraíso tropical.",
            "Sou um refúgio tranquilo com vistas espetaculares.",
            "Sou considerada uma das praias mais bonitas do mundo."
          ]
        },
        {
          "nome": "Acrópole de Atenas",
          "content": [
            "Sou uma antiga cidade fortificada em Atenas, Grécia.",
            "Meu destaque é o Parthenon, templo dedicado a Atena.",
            "Fui construída durante o século V a.C.",
            "Sou um importante sítio arqueológico.",
            "Fui reconhecida como Patrimônio Mundial pela UNESCO.",
            "Domino a paisagem urbana de Atenas.",
            "Sou uma representação da grandiosidade da arquitetura grega.",
            "Fui cenário de eventos históricos e culturais.",
            "Sou um ponto de referência simbólico na história da civilização.",
            "Quem sou eu?"
          ]
        },
        {
          "nome": "Muralha da China",
          "content": [
            "Sou uma imponente estrutura defensiva na China.",
            "Minha extensão percorre milhares de quilômetros.",
            "Fui construída para proteger contra invasões.",
            "Sou um grande marco arquitetônico e militar.",
            "Sou testemunha de eventos ao longo dos séculos.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Meus passeios oferecem vistas panorâmicas.",
            "Sou uma das maravilhas arquitetônicas do mundo.",
            "Sou um símbolo da habilidade técnica e estratégica chinesa.",
            "Quem sou eu?"
          ]
        },
        {
          "nome": "Palácio de Versalhes",
          "content": [
            "Sou uma residência real em Versalhes, França.",
            "Fui construído durante o século XVII.",
            "Sou um símbolo do absolutismo francês.",
            "Tenho magníficos jardins e arquitetura opulenta.",
            "Fui palco de decisões políticas cruciais.",
            "Reflito o luxo e a grandiosidade da monarquia.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Sou um visível exemplo da arquitetura barroca.",
            "Sou visitado por turistas de todo o mundo.",
            "Quem sou eu?"
          ]
        },
        {
          "nome": "Cidade Proibida",
          "content": [
            "Sou um palácio imperial no centro de Pequim, China.",
            "Fui construído durante a dinastia Ming.",
            "Fui o centro político da China por quase 500 anos.",
            "Tenho um complexo arquitetônico grandioso.",
            "Meus pátios, salões e pavilhões são majestosos.",
            "Meu nome é derivado da proibição de entrada pública.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Reflito a riqueza da cultura chinesa.",
            "Estou aberto ao público como museu.",
            "Testemunhei eventos históricos e culturais. Quem sou eu?"
          ]
        },
        {
          "nome": "Parque Nacional de Yellowstone",
          "content": [
            "Sou o primeiro parque nacional do mundo, nos Estados Unidos.",
            "Estou localizado em Wyoming, Montana e Idaho.",
            "Sou uma vasta área de geotermal, incluindo geysers.",
            "Tenho uma abundante vida selvagem, incluindo ursos e bisões.",
            "Minhas paisagens naturais são variadas e deslumbrantes.",
            "Fui designado como Patrimônio Mundial da UNESCO.",
            "Ofereço uma experiência única na natureza.",
            "Sou visitado por entusiastas de ecoturismo.",
            "Minhas trilhas para caminhadas e atividades ao ar livre são populares.",
            "Quem sou eu?"
          ]
        },
        {
          "nome": "Panteão de Roma",
          "content": [
            "Sou um antigo templo em Roma, Itália.",
            "Fui construído durante o século II d.C.",
            "Sou caracterizado pela cúpula impressionante.",
            "Fui dedicado a todos os deuses do panteão romano.",
            "Sou uma importante obra da arquitetura romana.",
            "Permaneci bem preservado ao longo dos séculos.",
            "Meu interior é notável, com oculus aberto.",
            "Fui local de eventos históricos e religiosos.",
            "Sou visitado por turistas e estudiosos de arquitetura.",
            "Sou um símbolo da habilidade construtiva romana."
          ]
        },
        {
          "nome": "Museu do Louvre",
          "content": [
            "Estou localizado em Paris, França.",
            "Sou um dos maiores e mais visitados museus do mundo.",
            "Abrigo uma vasta coleção de arte e antiguidades.",
            "Tenho destaque para a Mona Lisa e a Vênus de Milo.",
            "Minhas instalações arquitetônicas são magníficas.",
            "Fui um palácio real convertido em museu durante a Revolução Francesa.",
            "Testemunhei a história e cultura mundial.",
            "Sou um elemento central na cena artística parisiense.",
            "Ofereço uma experiência cultural incomparável.",
            "Sou um ponto de referência icônico na paisagem parisiense."
          ]
        },
        {
          "nome": "Taj Mahal",
          "content": [
            "Sou um monumento branco em Agra, Índia.",
            "Fui construído pelo imperador Shah Jahan.",
            "Minha construção foi em homenagem à sua esposa Mumtaz Mahal.",
            "Minha arquitetura é majestosa em estilo indo-islâmico.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Sou um símbolo de amor e devoção eterna.",
            "Meus passeios noturnos destacam minha beleza.",
            "Meus jardins são charmosos e simétricos.",
            "Sou um dos destinos turísticos mais famosos do mundo.",
            "Reflito a riqueza cultural da Índia."
          ]
        },
        {
          "nome": "Catedral de São Basílio",
          "content": [
            "Estou localizada na Praça Vermelha, Moscou, Rússia.",
            "Fui construída durante o século XVI.",
            "Tenho uma arquitetura única com cúpulas coloridas.",
            "Sou associada ao czar Ivan, o Terrível.",
            "Sou testemunha de eventos históricos russos.",
            "Meu design é inovador e ornamentos são detalhados.",
            "Já funciono como catedral e museu.",
            "Tenho o título de Patrimônio Mundial da UNESCO.",
            "Sou visitada por milhões de turistas anualmente.",
            "Sou uma representação da arquitetura religiosa russa."
          ]
        },
        {
          "nome": "Praça de São Pedro",
          "content": [
            "Estou localizada no Vaticano, Roma, Itália.",
            "Sou uma praça em frente à Basílica de São Pedro.",
            "Fui projetada por Gian Lorenzo Bernini.",
            "Sou palco de eventos religiosos e públicos.",
            "Sou caracterizada por uma colunata elíptica.",
            "Sou um destino para peregrinos e turistas.",
            "Já fui palco de celebrações papais.",
            "Sou um centro espiritual e simbólico.",
            "Meus passeios noturnos destacam minha grandiosidade.",
            "Faço parte essencial da experiência vaticana."
          ]
        },
        {
          "nome": "Ilha de Páscoa",
          "content": [
            "Estou localizada no Oceano Pacífico, pertencente ao Chile.",
            "Sou conhecida pelas estátuas de pedra, chamadas moai.",
            "Fui desenvolvida pela civilização Rapa Nui.",
            "Tenho o título de Patrimônio Mundial pela UNESCO.",
            "Existe mistério em torno da construção dos moai.",
            "Minhas paisagens vulcânicas são únicas.",
            "Preservo a cultura e história polinésias.",
            "Sou visitada por arqueólogos e entusiastas da história.",
            "Ofereço oportunidades para mergulho e exploração.",
            "Sou um destino remoto com uma rica herança cultural."
          ]
        }
    ],
    musica: [
        [
            {
                "name": "Amazing Grace (Tradicional Gospel)",
                "content": [
                    "A letra destaca a redenção e graça divina.",
                    "Conhecida por sua simplicidade melódica e poder espiritual.",
                    "Versões instrumentais oferecem interpretações únicas.",
                    "Uma emocionante canção gospel que transcende fronteiras culturais."
                ]
            },
            {
                "name": "Bohemian Rhapsody (Queen)",
                "content": [
                    "Lançada em 1975, no álbum 'A Night at the Opera'.",
                    "Famosa por sua estrutura única e mistura de estilos.",
                    "Brian May brilha com um solo de guitarra icônico.",
                    "Uma obra-prima de Freddie Mercury e Queen."
                ]
            },
            {
                "name": "Lingus (Snarky Puppy)",
                "content": [
                    "Destaca-se pelo solo de teclado virtuoso de Cory Henry.",
                    "Gravada ao vivo em 2014 no Family Dinner - Volume 1.",
                    "Um exemplo da fusão magistral de jazz, funk e música mundial.",
                    "Uma jornada musical de Snarky Puppy, liderada por Cory Henry."
                ]
            },
            {
                "name": "Velours (Anomalie)",
                "content": [
                    "Lançada em 2017, destacando-se pelo groove irresistível.",
                    "Anomalie, pianista e produtor, é conhecido por sua abordagem única.",
                    "Gravada no estúdio de Anomalie em Montreal, Canadá.",
                    "Uma peça cativante do álbum 'Métropole' de Anomalie."
                ]
            },
            {
                "name": "Boogie Wonderland (Earth, Wind & Fire)",
                "content": [
                    "Destaque para a colaboração com The Emotions.",
                    "A seção de metais e a batida contagiosa são inconfundíveis.",
                    "Um clássico da era disco lançado em 1979.",
                    "Verdadeiro hino da pista de dança."
                ]
            },
            {
                "name": "The Red Hands (Walk off the Earth)",
                "content": [
                    "Lançada em 2013, conhecida por sua instrumentação única.",
                    "A habilidade vocal de Sarah Blackwood é um destaque.",
                    "A banda ganhou popularidade por covers únicos no YouTube.",
                    "Uma composição vibrante desta banda indie."
                ]
            },
            {
                "name": "Shape of My Heart (Sting)",
                "content": [
                    "Destaque para a habilidade poética de Sting na letra.",
                    "A guitarra flamenca de Dominic Miller é marcante.",
                    "Lançada em 1993, é uma reflexão profunda sobre a vida.",
                    "Uma balada atemporal do álbum 'Ten Summoner's Tales'."
                ]
            },
            {
                "name": "Mr. Brightside (The Killers)",
                "content": [
                    "Brandon Flowers lidera com uma narrativa envolvente.",
                    "A guitarra enérgica de Dave Keuning é inesquecível.",
                    "Gravada no estúdio de Las Vegas, terra natal da banda.",
                    "Um sucesso indie rock lançado em 2003."
                ]
            },
            {
                "name": "What's Going On (Marvin Gaye)",
                "content": [
                    "A letra aborda questões sociais e políticas.",
                    "O álbum foi gravado no estúdio Hitsville USA, da Motown.",
                    "James Jamerson, lendário baixista, contribui para a magia musical.",
                    "Uma obra-prima soul de Marvin Gaye de 1971."
                ]
            },
            {
                "name": "Samba Pa Ti (Santana)",
                "content": [
                    "Lançada em 1970, destaca-se pela guitarra emocional.",
                    "Gravada no Pacific Recording Studios, San Mateo, Califórnia.",
                    "Uma peça instrumental única de Carlos Santana.",
                    "Uma jornada sonora que captura a essência da música latina."
                ]
            },
            {
                "name": "Take Five (Dave Brubeck Quartet)",
                "content": [
                    "Conhecido pelo incomum compasso 5/4.",
                    "Paul Desmond brilha no saxofone alto.",
                    "Gravado no Columbia 30th Street Studio, Nova York.",
                    "Um clássico do jazz lançado em 1959."
                ]
            },
            {
                "name": "Rolling in the Deep (Adele)",
                "content": [
                    "Adele mostra sua potência vocal na performance.",
                    "O álbum '21' foi gravado nos estúdios Abbey Road, Londres.",
                    "A música explora a dor e a superação em relacionamentos.",
                    "Um poderoso hit soul-pop lançado em 2010."
                ]
            },
            {
                "name": "Chameleon (Herbie Hancock)",
                "content": [
                    "Destaca-se pela fusão de jazz, funk e eletrônica.",
                    "Harvey Mason fornece uma batida infecciosa na bateria.",
                    "Gravado no estúdio Wally Heider, em San Francisco.",
                    "Uma faixa emblemática do álbum 'Head Hunters' de 1973."
                ]
            },
            {
                "name": "Yellow (Coldplay)",
                "content": [
                    "Chris Martin entrega uma melodia cativante.",
                    "A guitarra de Jonny Buckland é sutil e eficaz.",
                    "A canção captura uma atmosfera de esperança e nostalgia.",
                    "Um sucesso alternativo lançado em 2000."
                ]
            },
            {
                "name": "Sir Duke (Stevie Wonder)",
                "content": [
                    "Lançada em 1977, do álbum 'Songs in the Key of Life'.",
                    "A habilidade de Stevie Wonder como multi-instrumentista brilha.",
                    "Gravado nos estúdios Crystal Sound, Los Angeles.",
                    "Uma homenagem musical a Duke Ellington."
                ]
            },
            {
                "name": "Hotel California (Eagles)",
                "content": [
                    "Destaca-se pela guitarra dupla de Don Felder e Joe Walsh.",
                    "A letra evoca imagens enigmáticas da Califórnia.",
                    "Gravado nos estúdios Criteria, Miami.",
                    "Um clássico do rock lançado em 1976."
                ]
            },
            {
                "name": "Hallelujah (Leonard Cohen)",
                "content": [
                    "Lançada em 1984, tornou-se um clássico.",
                    "A melodia e a poesia são profundas e comoventes.",
                    "Gravado nos estúdios Quadrasonic Sound, Nova York.",
                    "Uma balada atemporal de Leonard Cohen."
                ]
            },
            {
                "name": "Smooth (Santana ft. Rob Thomas)",
                "content": [
                    "Lançada em 1999, tornou-se um sucesso instantâneo.",
                    "A guitarra de Santana e a voz de Rob Thomas se complementam.",
                    "Gravado no estúdio The Plant, em Sausalito, Califórnia.",
                    "Uma colaboração de Santana com o vocalista Rob Thomas."
                ]
            },
            {
                "name": "Take the 'A' Train (Duke Ellington)",
                "content": [
                    "Billy Strayhorn compôs a música, imortalizada por Ellington.",
                    "O trompete de Cootie Williams é marcante na gravação.",
                    "Gravado no estúdio RCA Victor, Hollywood.",
                    "Um clássico do jazz lançado em 1941."
                ]
            },
            {
                "name": "Viva la Vida (Coldplay)",
                "content": [
                    "Chris Martin explora temas de poder e redenção.",
                    "Destaque para a orquestração e arranjos inovadores.",
                    "Gravado nos estúdios Abbey Road, Londres.",
                    "Um épico pop-rock lançado em 2008."
                ]
            }
        ]
    ],
    pessoa: [
        {
            "name": "Elon Musk",
            "content": [
                "Fundador da SpaceX e Tesla, Inc.",
                "Empresário e empreendedor sul-africano.",
                "Objetivo de colonizar Marte.",
                "Co-fundador do PayPal e Neuralink.",
                "Presença ativa nas redes sociais e mídia.",
                "Visionário no desenvolvimento de tecnologias espaciais.",
                "Defensor de energia sustentável e veículos elétricos.",
                "Participou da criação da OpenAI.",
                "Envolvimento em projetos de transporte de alta velocidade.",
                "Papel importante na popularização dos carros elétricos."
            ]
        },
        {
            "name": "Emma Watson",
            "content": [
                "Ativista pelos direitos das mulheres.",
                "Conhecida por seu papel como Hermione Granger em Harry Potter.",
                "Engajada em questões sociais e ambientais.",
                "Graduada em Literatura Inglesa pela Brown University.",
                "Defende a igualdade de gênero e direitos humanos.",
                "Embaixadora da Boa Vontade da ONU Mulheres.",
                "Mantém uma presença discreta nas redes sociais.",
                "Participou de filmes após a saga Harry Potter.",
                "Estilo de moda consciente e sustentável.",
                "Conhecida por sua atuação e ativismo global."
            ]
        },
        {
            "name": "Mahatma Gandhi",
            "content": [
                "Líder pacifista e defensor dos direitos civis.",
                "Conduziu a Índia à independência do domínio britânico.",
                "Advogado e pensador político.",
                "Liderou campanhas não violentas de desobediência civil.",
                "Inspirou movimentos pelos direitos civis em todo o mundo.",
                "Conhecido como 'Mahatma', que significa 'grande alma'.",
                "Desenvolveu o conceito de Satyagraha, resistência não violenta.",
                "Ativista contra a discriminação racial e social.",
                "Presença marcante na história da independência indiana.",
                "Seu aniversário é celebrado como o Dia Internacional da Não Violência."
            ]
        },
        {
            "name": "Marie Curie",
            "content": [
                "Cientista polonesa-francesa pioneira em pesquisas radioativas.",
                "Primeira mulher a ganhar um Prêmio Nobel em duas áreas diferentes.",
                "Ganhadora do Nobel em Física (1903) e Química (1911).",
                "Descobriu os elementos polônio e rádio.",
                "Contribuiu significativamente para a compreensão da radioatividade.",
                "Primeira professora na Universidade de Paris.",
                "Inspirou mulheres a buscar carreiras científicas.",
                "Fundadora do Instituto Curie para Pesquisa Radiológica.",
                "Legado duradouro na ciência e no avanço da igualdade de gênero.",
                "Sua vida foi retratada em diversos filmes e livros."
            ]
        },
        {
            "name": "Nelson Mandela",
            "content": [
                "Líder anti-apartheid e ex-presidente da África do Sul.",
                "Defensor dos direitos humanos e reconciliação racial.",
                "Prêmio Nobel da Paz em 1993, junto com Frederik Willem de Klerk.",
                "Preso por 27 anos por sua oposição ao apartheid.",
                "Líder do Congresso Nacional Africano (CNA).",
                "Estabeleceu a Comissão de Verdade e Reconciliação.",
                "Influenciou a transição pacífica para a democracia na África do Sul.",
                "Um dos líderes mais respeitados da história contemporânea.",
                "Dia 18 de julho, seu aniversário, é o Dia Internacional Nelson Mandela.",
                "Conhecido como 'Madiba', um título de respeito na cultura africana."
            ]
        },
        {
            "name": "Ada Lovelace",
            "content": [
                "Matemática britânica e escritora, considerada a primeira programadora.",
                "Colaborou com Charles Babbage na máquina analítica.",
                "Escreveu o primeiro algoritmo destinado a ser processado por uma máquina.",
                "Vislumbrou as possibilidades de computadores além de cálculos matemáticos.",
                "Seu trabalho influenciou o desenvolvimento da ciência da computação.",
                "Concebeu a ideia de instruções de máquina e software.",
                "Seu trabalho foi redescoberto no século 20, ganhando reconhecimento.",
                "Mulher visionária em um campo dominado por homens no século 19.",
                "O Dia Ada Lovelace, em outubro, celebra sua contribuição à computação.",
                "Inspirou gerações de mulheres na tecnologia e ciência da computação."
            ]
        },
        {
            "name": "Leonardo da Vinci",
            "content": [
                "Polímata italiano do Renascimento.",
                "Pintor, escultor, arquiteto, cientista, matemático, engenheiro e inventor.",
                "Obras-primas incluem 'Mona Lisa' e 'A Última Ceia'.",
                "Contribuiu para áreas como anatomia, engenharia e paleontologia.",
                "Desenhos detalhados de máquinas voadoras, tanques e dispositivos mecânicos.",
                "Considerado um dos maiores gênios da história.",
                "Observador meticuloso da natureza e da anatomia humana.",
                "Influenciou artistas e cientistas por séculos.",
                "Visão visionária de possibilidades futuras.",
                "Mente curiosa e inquisitiva, explorando diversas disciplinas."
            ]
        },
        {
            "name": "Frida Kahlo",
            "content": [
                "Pintora mexicana e ícone do surrealismo.",
                "Obras autorretratísticas refletem sua vida e emoções intensas.",
                "Casada com o famoso pintor Diego Rivera.",
                "Superou lesões graves e problemas de saúde ao longo da vida.",
                "Envolvimento ativo no movimento comunista mexicano.",
                "Participou do renascimento artístico mexicano pós-Revolução.",
                "Conhecida por seu estilo distintivo e trajes tradicionais mexicanos.",
                "Influenciou a arte contemporânea e movimentos feministas.",
                "Sua casa, a Casa Azul, é um museu dedicado à sua vida e obra.",
                "Figura inspiradora na celebração da cultura mexicana."
            ]
        },
        {
            "name": "Martin Luther King Jr.",
            "content": [
                "Líder dos direitos civis e defensor da igualdade racial.",
                "Famoso por seu discurso 'Eu Tenho um Sonho'.",
                "Prêmio Nobel da Paz em 1964.",
                "Ativista não violento na luta contra a segregação racial.",
                "Liderou o movimento pelos direitos civis nos Estados Unidos.",
                "Influenciou a legislação dos direitos civis e o fim da segregação.",
                "Dia de Martin Luther King Jr. é celebrado como feriado nos EUA.",
                "Conduziu protestos pacíficos e marchas históricas.",
                "Símbolo de resistência e perseverança na busca da igualdade.",
                "Assassinado em 1968, seu legado continua a inspirar movimentos."
            ]
        },
        {
            "name": "Marie Antoinette",
            "content": [
                "Arquiduquesa da Áustria e Rainha Consorte da França.",
                "Caso controverso e frequentemente mal compreendido na história.",
                "Casada com o rei Luís XVI durante a Revolução Francesa.",
                "Conhecida por sua vida extravagante e gosto pela moda.",
                "Famosa frase 'Se o povo não tem pão, que comam brioches'.",
                "Envolvimento em questões políticas e sociais complexas.",
                "Sua vida e morte foram temas de debates e representações artísticas.",
                "Símbolo de luxo e excessos em meio à crise social na França.",
                "Executada por guilhotina durante a Revolução Francesa.",
                "Seu legado é complexo, envolvendo romance, política e tragédia."
            ]
        },
        {
            "name": "Stephen Hawking",
            "content": [
                "Físico teórico britânico e cosmólogo renomado.",
                "Autor do best-seller 'Uma Breve História do Tempo'.",
                "Contribuiu para a compreensão de buracos negros e a natureza do universo.",
                "Diagnosticado com esclerose lateral amiotrófica (ELA) aos 21 anos.",
                "Usava um sintetizador de voz para se comunicar.",
                "Professor Lucasiano de Matemática na Universidade de Cambridge.",
                "Explorou as fronteiras da física teórica até sua morte em 2018.",
                "Recebeu inúmeros prêmios e honras, incluindo a Ordem do Mérito.",
                "Sua história foi retratada no filme 'A Teoria de Tudo'.",
                "Advogou pela exploração espacial e busca por vida extraterrestre."
            ]
        },
        {
            "name": "Malala Yousafzai",
            "content": [
                "Ativista paquistanesa pelos direitos das mulheres e educação.",
                "Sobrevivente de um atentado do Talibã aos 15 anos.",
                "Prêmio Nobel da Paz em 2014, a mais jovem laureada.",
                "Co-autora do livro 'Eu Sou Malala'.",
                "Defensora global da educação como um direito fundamental.",
                "Estudante universitária em Oxford, continuando sua defesa.",
                "Presença influente nas redes sociais e discursos internacionais.",
                "Fundou a Fundação Malala para promover a educação de meninas.",
                "Luta contra a discriminação de gênero e extremismos.",
                "Inspiradora para jovens em todo o mundo pela sua coragem e determinação."
            ]
        },
        {
            "name": "Vincent van Gogh",
            "content": [
                "Pintor pós-impressionista holandês.",
                "Obras-primas incluem 'Noite Estrelada' e 'Girassóis'.",
                "Vida marcada por lutas emocionais e dificuldades financeiras.",
                "Produziu mais de 2.000 obras de arte em sua breve carreira.",
                "Mentalidade autodidata e busca incessante por expressão artística.",
                "Relação conturbada com o colega pintor Paul Gauguin.",
                "Tragédia de cortar a própria orelha durante um surto psicótico.",
                "Reconhecido após sua morte como um gênio da arte.",
                "Influenciou movimentos artísticos do século 20.",
                "Sua vida foi retratada em filmes, livros e peças de teatro."
            ]
        },
        {
            "name": "Rosa Parks",
            "content": [
                "Figura central no movimento pelos direitos civis nos EUA.",
                "Recusou-se a ceder seu assento no ônibus a um branco em 1955.",
                "Atitude desencadeou o boicote aos ônibus de Montgomery.",
                "Mãe do movimento moderno pelos direitos civis.",
                "Recebeu ameaças e enfrentou dificuldades após seu ato de resistência.",
                "Trabalhou com Martin Luther King Jr. e outros líderes dos direitos civis.",
                "Homenageada com a Medalha Presidencial da Liberdade.",
                "Continuou a lutar pelos direitos civis ao longo de sua vida.",
                "Seu ato de coragem mudou o curso da história americana.",
                "Conhecida como a 'Mãe do Movimento pelos Direitos Civis'."
            ]
        },
        {
            "name": "Winston Churchill",
            "content": [
                "Líder britânico durante a Segunda Guerra Mundial.",
                "Primeiro-ministro do Reino Unido em dois períodos diferentes.",
                "Conhecido por seus discursos inspiradores durante a guerra.",
                "Ganhou o Prêmio Nobel de Literatura em 1953.",
                "Estadista, orador e escritor prolífico.",
                "Liderou o Reino Unido com determinação e coragem.",
                "Defensor da democracia e crítico feroz do totalitarismo.",
                "Influenciou eventos cruciais da história do século 20.",
                "Famoso por sua liderança forte e resoluta.",
                "Apelidado de 'Bulldog Britânico' por sua determinação."
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
        },
        {
            "name": "Game of Thrones",
            "content": [
                "Baseada na série de livros 'As Crônicas de Gelo e Fogo' de George R.R. Martin.",
                "Inúmeras famílias nobres lutam pelo controle do Trono de Ferro.",
                "Intrigas políticas, guerra e elementos fantásticos são destaque.",
                "Personagens complexos e imprevisíveis.",
                "Dragões são parte crucial da narrativa.",
                "Morte de personagens principais é uma característica constante.",
                "A muralha protegendo contra ameaças ao norte é fundamental.",
                "Exploração de temas como honra, poder e lealdade.",
                "Episódios épicos e batalhas grandiosas.",
                "Sucesso global, mas recebeu opiniões divergentes na última temporada."
            ]
        },
        {
            "name": "The Mandalorian",
            "content": [
                "Parte do universo Star Wars.",
                "Protagonizado por um caçador de recompensas Mandaloriano.",
                "Relação próxima com a criatura apelidada de 'Baby Yoda'.",
                "Estética faroeste e elementos de ficção científica.",
                "Exploração de diferentes planetas e culturas.",
                "Abordagem mais individual e menos centrada na Força.",
                "Recebeu elogios pela narrativa e efeitos visuais.",
                "Contribuições para a expansão do universo Star Wars.",
                "Criado por Jon Favreau, conhecido por seu trabalho na Marvel.",
                "Combinação de ação, humor e momentos emotivos."
            ]
        },
        {
            "name": "Black Mirror",
            "content": [
                "Série antológica explorando distopias relacionadas à tecnologia.",
                "Episódios independentes, cada um um universo próprio.",
                "Reflexão sobre as consequências sociais e psicológicas da tecnologia.",
                "Temas como inteligência artificial, realidade virtual e vigilância.",
                "Abordagem provocativa e frequentemente perturbadora.",
                "Criada por Charlie Brooker, conhecido por sua sátira social.",
                "Episódios autônomos, permitindo espectadores começarem por qualquer um.",
                "Recebeu prêmios e críticas positivas pela originalidade.",
                "Influência de obras de ficção científica e distopia.",
                "Cada episódio é um mergulho profundo em questões éticas e sociais."
            ]
        },
        {
            "name": "The Crown",
            "content": [
                "Drama histórico sobre o reinado da Rainha Elizabeth II.",
                "Explora eventos desde seu início até períodos mais recentes.",
                "Detalhes da vida pessoal da monarca e eventos políticos da época.",
                "Troca de elenco para representar diferentes períodos.",
                "Fidelidade histórica e produção luxuosa são marcas registradas.",
                "Desdobramentos emocionais dentro da família real britânica.",
                "Atuações notáveis, especialmente de atrizes que interpretaram a rainha.",
                "Revelações sobre eventos pouco conhecidos da história recente.",
                "Elogios pela representação cuidadosa dos eventos reais.",
                "Combinação de drama, história e intriga política."
            ]
        },
        {
            "name": "Sherlock",
            "content": [
                "Adaptação moderna das histórias clássicas de Sherlock Holmes.",
                "Protagonizado por Benedict Cumberbatch como Sherlock e Martin Freeman como Watson.",
                "Episódios com duração estendida, explorando casos complexos.",
                "Abordagem contemporânea, incluindo tecnologia e mídias sociais.",
                "Raciocínio lógico e dedução são marcas distintivas de Sherlock.",
                "Criação de Steven Moffat e Mark Gatiss, ambos fãs de Arthur Conan Doyle.",
                "Elementos de suspense e mistério mantêm os espectadores intrigados.",
                "Atuação marcante de Cumberbatch como o detetive brilhante.",
                "Recebeu prêmios e indicações por roteiro e atuações.",
                "Fãs elogiam a atualização moderna sem perder a essência das histórias originais."
            ]
        },
        {
            "name": "The Witcher",
            "content": [
                "Baseada na série de livros polonesa de Andrzej Sapkowski.",
                "Protagonizada por Henry Cavill como Geralt de Rívia.",
                "Exploração de um mundo de fantasia sombria e intrigas políticas.",
                "História não linear e convergência de três linhas temporais.",
                "Presença de monstros, bruxos e magia é central na narrativa.",
                "Recepção positiva por fãs do material original e novos espectadores.",
                "Destaca a complexidade moral dos personagens.",
                "Cavill recebeu elogios pela interpretação de Geralt.",
                "Cenas de ação coreografadas e efeitos visuais impressionantes.",
                "Amito de quebra de recordes de audiência após seu lançamento na Netflix."
            ]
        },
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
            "name": "Money Heist (La Casa de Papel)",
            "content": [
                "Série espanhola sobre um assalto à Casa da Moeda da Espanha.",
                "Liderado por um homem conhecido como 'Professor'.",
                "Personagens usam nomes de cidades para esconder suas identidades.",
                "Explora temas de resistência e desigualdade social.",
                "Flashbacks revelam histórias pessoais dos assaltantes.",
                "Elementos de suspense e estratégia são constantes.",
                "Recepção internacional positiva e grande base de fãs.",
                "Particular ênfase em relacionamentos complexos entre personagens.",
                "Trajes vermelhos e máscaras de Salvador Dalí são marcas visuais.",
                "Impacto cultural significativo, especialmente em termos de moda e referências."
            ]
        },
        {
            "name": "Westworld",
            "content": [
                "Baseada no filme homônimo de Michael Crichton.",
                "Parque temático de alta tecnologia com androides conscientes.",
                "Explora questões de livre arbítrio e consciência artificial.",
                "Narrativa não linear e reviravoltas surpreendentes.",
                "Conflitos entre humanos e anfitriões sintéticos.",
                "Elenco impressionante, incluindo Anthony Hopkins e Evan Rachel Wood.",
                "Criação de Jonathan Nolan e Lisa Joy.",
                "Visualmente impressionante, com cenários futuristas e efeitos especiais.",
                "Reflexões sobre a natureza da humanidade e sua relação com a tecnologia.",
                "Recebeu elogios por sua complexidade e abordagem filosófica."
            ]
        },
        {
            "name": "Friends",
            "content": [
                "Clássica sitcom centrada em um grupo de amigos em Nova York.",
                "Criada por David Crane e Marta Kauffman.",
                "Seis protagonistas: Rachel, Ross, Monica, Chandler, Joey e Phoebe.",
                "Explora amizade, amor e carreiras ao longo de 10 temporadas.",
                "Central Perk, o café, é um ponto de encontro recorrente.",
                "Momentos icônicos como 'We were on a break!' e 'Pivot!' são lembrados.",
                "Transcendeu gerações, permanecendo popular mesmo após o término.",
                "Elogios pela química do elenco e roteiro humorístico.",
                "O episódio final é um dos eventos televisivos mais assistidos.",
                "Cultuada por fãs devido à sua autenticidade e conexão emocional."
            ]
        },
        {
            "name": "The Office",
            "content": [
                "Mockumentary situacional sobre a vida em um escritório.",
                "Versões americana e britânica, ambas com sucesso.",
                "Estilo de documentário, com personagens frequentemente quebrando a quarta parede.",
                "Protagonizado por Steve Carell como o chefe Michael Scott.",
                "Humor seco e situações constrangedoras são marcas registradas.",
                "Episódios centrados em eventos cotidianos do escritório, como festas e reuniões.",
                "Personagens memoráveis, incluindo Jim, Pam e Dwight.",
                "Elogiado por satirizar a cultura corporativa e seus absurdos.",
                "Recepção positiva ao longo das temporadas, especialmente a evolução dos personagens.",
                "O episódio de despedida é conhecido por suas emoções e encerramento satisfatório."
            ]
        },
        {
            "name": "Narcos",
            "content": [
                "Baseada em eventos reais sobre cartéis de drogas colombianos.",
                "Narra a ascensão e queda de Pablo Escobar.",
                "Aborda o papel da DEA (Agência Antidrogas dos EUA) na investigação.",
                "Narcotráfico, corrupção e violência são temas centrais.",
                "Narração em primeira pessoa por um agente da DEA.",
                "Atuações impressionantes, especialmente de Wagner Moura como Escobar.",
                "Contextualiza historicamente o impacto do tráfico de drogas na Colômbia.",
                "Violência gráfica e retrato realista da guerra contra as drogas.",
                "Recebeu elogios por seu retrato autêntico dos eventos históricos."
            ]
        }
    ],
    coisa: [
        {
            "name": "Mouse",
            "content": [
                "Dispositivo de entrada para computadores.",
                "Utilizado para mover o cursor na tela.",
                "Cliques e movimentos são suas principais funções.",
                "Existem modelos com fio e sem fio.",
                "Alguns possuem botões adicionais para funções específicas.",
                "Essencial para navegação e interação em sistemas operacionais.",
                "A tecnologia óptica substituiu as antigas bolas de rolagem.",
                "Variedade de designs ergonômicos para diferentes preferências.",
                "Personalizável com luzes RGB em alguns modelos.",
                "Marcas conhecidas incluem Logitech, Microsoft e Razer."
            ]
        },
        {
            "name": "Teclado",
            "content": [
                "Dispositivo de entrada essencial para computadores.",
                "Possui teclas representando letras, números e funções.",
                "Existem teclados mecânicos e de membrana.",
                "Teclas retroiluminadas são comuns em modelos modernos.",
                "Teclados ergonômicos visam reduzir o cansaço durante o uso prolongado.",
                "Alguns teclados possuem teclas programáveis para atalhos.",
                "Conecta-se ao computador via USB ou Bluetooth.",
                "Teclados gamer frequentemente incluem anti-ghosting e switches específicos.",
                "Utilizado para digitar documentos, comandos e mensagens.",
                "Marcas populares incluem Corsair, Logitech e Razer."
            ]
        },
        {
            "name": "Memória RAM",
            "content": [
                "Abreviação para Memória de Acesso Aleatório.",
                "Componente crucial em computadores e dispositivos eletrônicos.",
                "Armazena dados temporários para acesso rápido pelo processador.",
                "Medida em gigabytes (GB) ou terabytes (TB).",
                "Tipos comuns incluem DDR3, DDR4 e DDR5.",
                "Frequência mais alta geralmente significa maior desempenho.",
                "Essencial para a execução de aplicativos e sistemas operacionais.",
                "A quantidade de RAM afeta a multitarefa e a velocidade do computador.",
                "Alguns sistemas permitem a atualização da RAM para melhorar o desempenho.",
                "Marcas populares incluem Corsair, Kingston e Crucial."
            ]
        },
        {
            "name": "Rodo Aspirador",
            "content": [
                "Dispositivo de limpeza doméstica.",
                "Combina a ação de varrer e aspirar em um único aparelho.",
                "Ideal para limpeza eficiente de pisos.",
                "Alguns modelos possuem função de lavagem.",
                "Adequado para diferentes tipos de superfícies, incluindo carpetes e azulejos.",
                "Disponível em versões com fio e sem fio.",
                "Tanque de água integrado para a função de lavagem em alguns modelos.",
                "Frequentemente equipado com filtros para reter poeira e alérgenos.",
                "Design compacto para fácil armazenamento.",
                "Marcas conhecidas incluem Dyson, Roomba e Electrolux."
            ]
        },
        {
            "name": "Smartphone",
            "content": [
                "Dispositivo móvel multifuncional.",
                "Combina telefone, câmera, navegador e muito mais.",
                "Sistemas operacionais comuns incluem Android e iOS.",
                "Conectividade Wi-Fi e dados móveis para acesso à internet.",
                "Ampla variedade de aplicativos disponíveis para download.",
                "Tela sensível ao toque é padrão na maioria dos modelos.",
                "Câmeras traseiras e frontais para fotografias e videochamadas.",
                "Armazenamento interno para aplicativos, fotos e vídeos.",
                "Sensores incluem GPS, acelerômetro e leitor de impressão digital.",
                "Marcas líderes incluem Apple, Samsung, e Huawei."
            ]
        },
        {
            "name": "Cadeira Ergonômica",
            "content": [
                "Desenhada para proporcionar conforto e suporte durante longos períodos de uso.",
                "Projetada para manter uma postura saudável enquanto sentado.",
                "Ajustes de altura e inclinação para personalização.",
                "Almofadas de suporte lombar e cervical são comuns.",
                "Material acolchoado para maior conforto.",
                "Base giratória e rodízios para mobilidade.",
                "Opções de cadeiras ergonômicas para escritório e jogos.",
                "Previne problemas de saúde relacionados à má postura.",
                "Design estilizado e moderno para se adequar a diferentes ambientes.",
                "Marcas renomadas incluem Herman Miller, Steelcase e Secretlab."
            ]
        },
        {
            "name": "Cafeteira",
            "content": [
                "Eletrodoméstico utilizado para preparar café.",
                "Existem diversos tipos, incluindo cafeteiras de filtro, expresso e cápsulas.",
                "Alguns modelos possuem moedores integrados para grãos frescos.",
                "Programação para preparar café automaticamente em horários específicos.",
                "Opções de ajuste de intensidade e tamanho da xícara.",
                "Máquinas de café expresso oferecem espuma de leite para cappuccinos.",
                "Cafeteiras de cápsulas proporcionam conveniência e variedade de sabores.",
                "Design moderno e compacto para se adequar a cozinhas de diferentes estilos.",
                "Filtro removível e fácil limpeza são características desejáveis.",
                "Marcas populares incluem Keurig, Nespresso e Breville."
            ]
        },
        {
            "name": "Fones de Ouvido Bluetooth",
            "content": [
                "Dispositivos de áudio sem fio para ouvir música e atender chamadas.",
                "Conectam-se a dispositivos via Bluetooth.",
                "Modelos variam de intra-auriculares a over-ear.",
                "Alguns possuem cancelamento de ruído para uma experiência imersiva.",
                "Bateria recarregável para uso prolongado.",
                "Controles táteis ou botões físicos para ajuste de volume e reprodução.",
                "Microfone embutido para chamadas telefônicas e interação com assistentes virtuais.",
                "Portáteis e dobráveis para facilitar o transporte.",
                "Estilo e design modernos são características valorizadas.",
                "Marcas populares incluem Apple, Sony e Bose."
            ]
        },
        {
            "name": "Relógio Inteligente (Smartwatch)",
            "content": [
                "Dispositivo vestível com funcionalidades avançadas.",
                "Monitora atividades físicas, frequência cardíaca e qualidade do sono.",
                "Notificações de mensagens, chamadas e aplicativos diretamente no pulso.",
                "Integração com smartphones para controle remoto de músicas e câmera.",
                "Diversidade de mostradores e opções de personalização.",
                "Alguns modelos oferecem GPS embutido para rastreamento de localização.",
                "Resistência à água para uso durante exercícios aquáticos.",
                "Bateria recarregável com autonomia que varia entre os modelos.",
                "Aplicativos dedicados para ampliar funcionalidades.",
                "Marcas líderes incluem Apple, Samsung e Garmin."
            ]
        },
        {
            "name": "Máquina de Lavar Roupa",
            "content": [
                "Eletrodoméstico essencial para a lavagem de roupas.",
                "Modelos variam entre carga frontal e carga superior.",
                "Capacidades diferentes para atender a necessidades familiares.",
                "Opções de programas para diferentes tipos de tecido e níveis de sujeira.",
                "Alguns modelos possuem função de secagem integrada.",
                "Eficiência energética e consumo de água são fatores considerados.",
                "Design moderno e intuitivo, com controles digitais.",
                "Centrífuga eficiente para reduzir a umidade nas roupas.",
                "Máquinas de lavar roupa conectadas à internet oferecem controle remoto.",
                "Marcas reconhecidas incluem LG, Samsung e Whirlpool."
            ]
        },
        {
            "name": "Óculos de Realidade Virtual",
            "content": [
                "Dispositivos que proporcionam experiências imersivas em ambientes virtuais.",
                "Usados para jogos, simulações e experiências interativas.",
                "Sensores de movimento para rastreamento preciso.",
                "Alguns modelos permitem ajustes para usuários com óculos de grau.",
                "Conectam-se a computadores, consoles ou smartphones.",
                "Fones de ouvido integrados para áudio tridimensional.",
                "Controles manuais para interação dentro do ambiente virtual.",
                "Variedade de aplicativos e jogos disponíveis nas plataformas VR.",
                "Utilizados em treinamento, educação e entretenimento.",
                "Marcas líderes incluem Oculus, HTC Vive e PlayStation VR."
            ]
        },
        {
            "name": "Caixa de Som Bluetooth",
            "content": [
                "Dispositivo de áudio sem fio para reprodução de música.",
                "Conecta-se a dispositivos via Bluetooth.",
                "Modelos variam de portáteis a sistemas de som estacionários.",
                "Bateria recarregável para uso em ambientes externos.",
                "Alguns possuem resistência à água para uso em ambientes úmidos.",
                "Controles táteis ou botões físicos para ajuste de volume e reprodução.",
                "Função de emparelhamento para criar sistemas de som estéreo.",
                "Design moderno e compacto para fácil transporte.",
                "Alguns modelos oferecem iluminação LED sincronizada com a música.",
                "Marcas populares incluem JBL, Bose e Sony."
            ]
        },
        {
            "name": "Ventilador de Teto",
            "content": [
                "Dispositivo de ventilação suspenso no teto de ambientes internos.",
                "Proporciona circulação de ar para resfriamento e conforto térmico.",
                "Modelos com lâmpadas integradas oferecem iluminação adicional.",
                "Controle remoto ou interruptores de parede para ajuste de velocidade.",
                "Design variado para se adequar a diferentes estilos de decoração.",
                "Eficiência energética é um fator considerado na escolha.",
                "Alguns modelos possuem reversão para funcionar no inverno, distribuindo calor.",
                "Utilizado em residências, escritórios e espaços comerciais.",
                "Silenciosos para não causar desconforto durante o uso.",
                "Marcas conhecidas incluem Hunter, Casablanca e Westinghouse."
            ]
        },
        {
            "name": "Máquina de Café Espresso",
            "content": [
                "Eletrodoméstico especializado na preparação de café espresso.",
                "Utiliza pressão para extrair o sabor do café moído.",
                "Bico de vapor para espumar leite e criar bebidas como cappuccino.",
                "Algumas máquinas possuem moedores integrados para grãos frescos.",
                "Design compacto para uso doméstico e profissional.",
                "Controles programáveis para ajustar a intensidade e o volume do café.",
                "Fácil limpeza, com bandeja removível para borras de café.",
                "Modelos automáticos e manuais disponíveis no mercado.",
                "Utiliza cápsulas ou café moído, dependendo do modelo.",
                "Marcas renomadas incluem Breville, De'Longhi e Nespresso."
            ]
        },
        {
            "name": "Aspirador de Pó Robô",
            "content": [
                "Dispositivo automatizado para limpeza de pisos.",
                "Navegação autônoma por sensores e câmeras integradas.",
                "Alguns modelos podem ser controlados por aplicativos móveis.",
                "Funcionalidade de mapeamento para navegação eficiente.",
                "Bateria recarregável para autonomia durante a limpeza.",
                "Sistemas de sucção e escovas para capturar poeira e detritos.",
                "Recarrega automaticamente quando a bateria está baixa.",
                "Projetado para evitar obstáculos e quedas.",
                "Ideal para manter pisos limpos entre limpezas mais profundas.",
                "Marcas populares incluem Roomba, Eufy e Xiaomi."
            ]
        },
        {
            "name": "Tablet",
            "content": [
                "Dispositivo portátil com tela sensível ao toque.",
                "Ideal para consumo de conteúdo, leitura e produtividade leve.",
                "Sistemas operacionais incluem Android, iOS e Windows.",
                "Variedade de tamanhos de tela e capacidades de armazenamento.",
                "Alguns modelos suportam canetas stylus para desenho e anotações.",
                "Conectividade Wi-Fi e, em alguns casos, dados móveis.",
                "Ampla seleção de aplicativos disponíveis nas respectivas lojas.",
                "Utilizado para jogos, streaming de vídeo, navegação e trabalho.",
                "Design fino e portátil para facilitar o transporte."
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
