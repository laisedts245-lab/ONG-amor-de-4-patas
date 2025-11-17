// Seleciona todos os formulários da página
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    let valido = true; // flag para saber se o formulário está correto
    let mensagens = []; // mensagens de erro

    // Exemplo: campo "nome"
    const nome = form.querySelector('input[name="nome"]');
    if(nome && nome.value.trim() === "") {
      valido = false;
      mensagens.push("Por favor, preencha o nome.");
    }

    // Exemplo: campo "email"
    const email = form.querySelector('input[name="email"]');
    if(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email.value.trim() === "" || !regexEmail.test(email.value)) {
        valido = false;
        mensagens.push("Por favor, digite um e-mail válido.");
      }
    }

    // Exemplo: campo "mensagem"
    const mensagem = form.querySelector('textarea[name="mensagem"]');
    if(mensagem && mensagem.value.trim() === "") {
      valido = false;
      mensagens.push("Por favor, escreva sua mensagem.");
    }

    // Se algum campo estiver errado, impede envio e mostra alert
    if(!valido) {
      e.preventDefault();
      alert(mensagens.join("\n"));
    }
  });
});
