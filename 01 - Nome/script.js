function pedirNome() {
    // Esta variável vai guardar o nome digitado pelo usuário
    let nome;

    // Esta expressão regular permite:
    // - letras maiúsculas e minúsculas
    // - letras com acento
    // - espaços
    // Não permite números nem símbolos
    let regexNome = /^[A-Za-zÀ-ÿ\s]+$/;

    while (true) {
        // Abre o prompt para o usuário digitar o nome
        nome = prompt("Digite seu nome completo:");

        // Se o usuário clicar em Cancelar, o prompt retorna null
        if (nome === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // Remove espaços do começo e do fim
        nome = nome.trim();

        // Não permite campo vazio
        if (nome === "") {
            alert("O nome não pode ficar vazio.");
            continue;
        }

        // Verifica se o nome possui apenas letras e espaços
        if (!regexNome.test(nome)) {
            alert("Digite apenas letras e espaços no nome.");
            continue;
        }

        // Divide o nome em partes para verificar se existe nome e sobrenome
        let partesNome = nome.split(/\s+/);

        // Exige pelo menos duas palavras
        if (partesNome.length < 2) {
            alert("Digite o nome completo, com nome e sobrenome.");
            continue;
        }

        // Exige pelo menos 3 caracteres no total
        if (nome.length < 3) {
            alert("Digite um nome válido.");
            continue;
        }

        // Se estiver tudo certo, retorna o nome
        return nome;
    }
}

function iniciarCadastro() {
    let nome = pedirNome();

    if (nome === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p><strong>Nome completo:</strong> " + nome + "</p>";
}