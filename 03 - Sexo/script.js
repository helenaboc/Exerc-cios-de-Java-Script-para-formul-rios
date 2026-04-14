function pedirSexo() {
    // Variável que vai guardar o valor digitado
    let sexo;

    // Repete até o usuário digitar uma opção válida
    while (true) {
        sexo = prompt("Digite seu sexo: masculino, feminino ou outro");

        // Se cancelar, encerra a função
        if (sexo === null) {
            alert("Cadastro cancelado.");
            return null;
        }

        // trim remove espaços antes e depois
        // toLowerCase transforma tudo em letra minúscula
        sexo = sexo.trim().toLowerCase();

        // Não permite vazio
        if (sexo === "") {
            alert("O campo sexo não pode ficar vazio.");
            continue;
        }

        // Verifica se foi digitada uma das opções permitidas
        if (sexo !== "masculino" && sexo !== "feminino" && sexo !== "outro") {
            alert("Digite apenas: masculino, feminino ou outro.");
            continue;
        }

        // Se estiver tudo certo, retorna o sexo
        return sexo;
    }
}

function iniciarCadastro() {
    let sexo = pedirSexo();

    if (sexo === null) {
        document.getElementById("resultado").innerHTML =
            "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento.</p>";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2><p><strong>Sexo:</strong> " + sexo + "</p>";
}