# 🐾 Projeto ONG Amor de 4 Patas

## 📌 Descrição do Projeto
Este é um **site institucional fictício** de uma ONG dedicada ao resgate, cuidado e proteção de animais em situação de abandono ou maus-tratos. O site contém informações sobre a ONG, seus projetos, formas de ajudar e um formulário para cadastro de voluntários.

---

## 🗂️ Estrutura do Projeto

### 1. Home (`home.html`)
- **Seções principais:**
  - Cabeçalho (`<header>`) com título e menu de navegação.
  - Imagem principal responsiva (`<picture>`).
  - Quem Somos: descrição da ONG.
  - Missão, Visão e Valores (cada item em `<article>`).
  - Como Ajudar: lista de formas de contribuição.
  - Contatos: telefone, WhatsApp, e-mail e endereço.
- **Rodapé (`<footer>`)** com direitos autorais.

### 2. Projetos (`projetos.html`)
- **Seções principais:**
  - Cabeçalho com menu de navegação.
  - Imagem responsiva (`<picture>`).
  - Projetos (cada projeto em `<article>`):
    - Resgate
    - Atendimento Veterinário
    - Castração
    - Lar Temporário
    - Feiras de Adoção
    - Educação e Conscientização
  - Depoimentos de adotantes, voluntários e veterinários.
  - Mensagem de incentivo à colaboração.
- Rodapé idêntico ao da Home.

### 3. Cadastro (`cadastro.html`)
- **Seções principais:**
  - Cabeçalho com menu de navegação.
  - Imagem responsiva.
  - Introdução ao formulário.
  - Formulário de cadastro de voluntários:
    - **Dados Pessoais:** nome, e-mail, telefone, CPF, data de nascimento.
    - **Endereço:** endereço, CEP, cidade, estado.
    - **Área de Apoio:** opções pré-definidas + campo “Outro”.
    - Todos os campos possuem `required` e validação de formato quando necessário.
  - Agradecimento após o envio.
- Rodapé idêntico às demais páginas.

---

## 🖼️ Imagens Responsivas
- Todas as imagens usam `<picture>` com diferentes `srcset` para adaptar a visualização:
  - Celular pequeno
  - Celular grande
  - Tablet
  - Desktop
- Imagens em desktop com largura máxima de **500px**.

---

## 📝 Formulário de Cadastro
- Envio de dados feito por **Formspree**.
- Método `POST`.
- Campos validados com `required` e `pattern` (telefone, CPF, CEP).

---

## 🔗 Navegação
- Menu consistente em todas as páginas:
  - Home
  - Projetos
  - Cadastro

---

## 📥 Rodapé
- Créditos do projeto acadêmico e direitos reservados.

---

## 🌐 Como Visualizar o Site

### Online
O site da ONG Amor de 4 Patas pode ser acessado por qualquer pessoa através do link público do GitHub Pages:

[https://seu-usuario.github.io/nome-do-repositorio/](https://seu-usuario.github.io/nome-do-repositorio/)

Clique no link ou copie e cole em qualquer navegador para ver o site em diferentes dispositivos.

### Local
Caso queira abrir o projeto no computador sem depender do link online:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Abra qualquer arquivo `.html` no navegador clicando duas vezes ou utilizando **"Abrir com > Navegador"** no VS Code.

---

## 🔧 Próximos Passos

O site já possui a estrutura de conteúdo organizada. Futuramente, serão aplicadas melhorias na apresentação visual com estilos mais elaborados e adicionadas funcionalidades interativas usando scripts para tornar a navegação mais dinâmica e envolvente.

---

## 🛠️ Observações

- HTML puro, sem CSS externo além de ajustes mínimos para imagens.
- Estrutura semanticamente organizada (`header`, `main`, `section`, `article`, `footer`).
- Comentários explicativos incluídos em todo o HTML para facilitar a compreensão.

---

## 👩‍💻 Autor

**Laíse Dantas**  
Projeto acadêmico fictício da ONG Amor de 4 Patas
