
    // Array para armazenar os nomes dos amigos
    const amigos = [];

    function adicionarAmigo() {
      const input = document.getElementById('amigo');
      const nome = input.value.trim(); // Remove espaços em branco nas extremidades

      // Validação
      if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
      }

      // Adiciona ao array
      amigos.push(nome);
  
      atualizarListaAmigos();
      input.value = "";
    }
      //Atualiza lista
    function atualizarListaAmigos() {
      const lista = document.getElementById('resultado');
      lista.innerHTML = "";

      for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
      }
    }

    function sortearAmigo() {
        const resultado = document.getElementById('resultado');
      
        // Verifica se há amigos cadastrados
        if (amigos.length === 0) {
          resultado.innerHTML = "Nenhum amigo para sortear.";
          return;
        }
      
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      
        // Obtém o nome sorteado
        const nomeSorteado = amigos[indiceAleatorio];
      
        // Exibe o resultado
        resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
      }
      