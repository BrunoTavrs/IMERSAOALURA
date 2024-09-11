function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um alteta ou algo realcionado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //se no titulo include campoPesquisa
        //então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}" alt="${dado.titulo}">
                <h2>
                    <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}












// console.log (dados);

//esse código fora do function, executa todas as vezes mesmo sem clicar
// let section = document.getElementById("resultados-pesquisa")
// console.log(section);

// let resultados = ""

// // para cada dados dentro da lista de dados
// for (let dado of dados) {
//     resultados += `
//     <div class="item-resultado">
//         <h2>
//             <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
//         </h2>
//             <p class="descricao-meta">${dado.descricao}</p>
//             <a href="${dado.link}" target="_blank">Mais informações</a>
//     </div>
// `

// }

// section.innerHTML = resultados