const perguntas = [
    {
        pergunta: "Qual foi o primeiro filme do Studio Ghibli?",
        respostas: ["Meu Amigo Totoro", "O Castelo no Céu", "Princesa Mononoke", "A Viagem de Chihiro"],
        correta: 1
    },
    {
        pergunta: "Qual desses filmes ganhou um Oscar de Melhor Animação?",
        respostas: ["O Serviço de Entregas da Kiki", "O Castelo Animado", "A Viagem de Chihiro", "O Conto da Princesa Kaguya"],
        correta: 2
    },
    {
        pergunta: "Quem é o cofundador e diretor mais famoso do Studio Ghibli?",
        respostas: ["Mamoru Hosoda", "Hayao Miyazaki", "Isao Takahata", "Makoto Shinkai"],
        correta: 1
    },
    {
        pergunta: "Em 'Meu Amigo Totoro', qual o nome das duas irmãs protagonistas?",
        respostas: ["Chihiro e San", "Nausicaä e Kiki", "Satsuki e Mei", "Ponyo e Kaguya"],
        correta: 2
    },
    {
        pergunta: "Qual desses filmes NÃO foi dirigido por Hayao Miyazaki?",
        respostas: ["O Castelo no Céu", "O Túmulo dos Vagalumes", "O Castelo Animado", "Ponyo"],
        correta: 1
    },
    {
        pergunta: "Em 'A Viagem de Chihiro', como os pais de Chihiro são transformados?",
        respostas: ["Em sapos", "Em fantasmas", "Em porcos", "Em estátuas"],
        correta: 2
    },
    {
        pergunta: "Qual filme do Studio Ghibli se passa em um mundo onde as pessoas moram no céu?",
        respostas: ["O Castelo no Céu", "O Serviço de Entregas da Kiki", "O Castelo Animado", "Vidas ao Vento"],
        correta: 0
    },
    {
        pergunta: "Qual dessas protagonistas NÃO é do Studio Ghibli?",
        respostas: ["Kiki", "San", "Sophie", "Hatsune Miku"],
        correta: 3
    },
    {
        pergunta: "Qual o nome do espírito que acompanha Chihiro no filme 'A Viagem de Chihiro'?",
        respostas: ["Kaonashi (Sem Rosto)", "Totoro", "Moro", "Boh"],
        correta: 0
    },
    {
        pergunta: "Em 'O Castelo Animado', como se chama o demônio de fogo que ajuda Sophie?",
        respostas: ["Haku", "Calcifer", "Turnip Head", "Jiji"],
        correta: 1
    }
];

function carregarQuiz() {
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    
    perguntas.forEach((pergunta, index) => {
        let perguntaHTML = `<p><strong>${pergunta.pergunta}</strong></p>`;
        pergunta.respostas.forEach((resposta, i) => {
            perguntaHTML += `<input type="radio" name="pergunta${index}" value="${i}"> ${resposta}<br>`;
        });
        quizDiv.innerHTML += perguntaHTML;
    });
}

function verificarRespostas() {
    let pontuacao = 0;

    perguntas.forEach((pergunta, index) => {
        let opcoes = document.getElementsByName(`pergunta${index}`);
        opcoes.forEach(opcao => {
            if (opcao.checked && parseInt(opcao.value) === pergunta.correta) {
                pontuacao++;
            }
        });
    });

    document.getElementById("resultado").textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

carregarQuiz();