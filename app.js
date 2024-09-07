function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 
    //console.log ("campo-pesquisa");

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de uma bebida  </p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let Titulo = "";
    let descricao = "";
    let tags = "" ;

  
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
       Titulo = dado.Titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
       tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if(Titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.Titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="b">Mais informações </a>
        </div>
      `;
    }
      }
      
      if (!resultados ) {
        resultados = "<P>Digite o nome da bebida </p>"
      }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
 