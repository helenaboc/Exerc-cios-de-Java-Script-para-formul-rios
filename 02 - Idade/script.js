function pedirIdade() {
    // Esta variável vai guardar o texto digitado no prompt
    let idadeTexto;

    // O laço repete até a idade ficar válida
    while (true) {
        idadeTexto = prompt("Digite sua idade:");

        // Se o usuário cancelar, a função para aqui
        if (idadeTexto === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // Remove espaços desnecessários
        idadeTexto = idadeTexto.trim();

        // Não permite campo vazio
        if (idadeTexto === "") {
            alert("A idade não pode ficar vazia.");
            continue;
        }

        // Number converte o texto em número
        let idade = Number(idadeTexto);

        // isNaN verifica se não é número
        // idade < 0 impede número negativo
        // Number.isInteger impede número decimal
        if (isNaN(idade) || idade < 0 || !Number.isInteger(idade)) {
            alert("Digite uma idade válida usando apenas números inteiros.");
            continue;
        }

        // Se estiver correta, retorna a idade
        return idade;
    }
}

function iniciarCadastro() {
    let idade = pedirIdade();

    if (idade === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2><p><strong>Idade:</strong> " + idade + " anos</p>";
}