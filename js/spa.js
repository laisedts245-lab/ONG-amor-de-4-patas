const main = document.getElementById("main-content");

// TEMPLATES
const templates = {
    home: `
        <h1 class="header-title">Amor de 4 Patas</h1>
        <img src="imagens/home/imagem-home-desk.png" alt="Imagem principal" class="home-img">

        <div class="principal">
            <section class="quem-somos">
                <h2>Quem Somos</h2>
                <p>
                    O Amor de 4 Patas é uma ONG dedicada ao resgate, cuidado e proteção de animais em situação de abandono ou maus-tratos.
                    Atuamos no resgate, atendimento veterinário, castração e encaminhamento para adoção responsável.<br>
                    Também promovemos campanhas de conscientização sobre posse responsável e contamos com voluntários e doadores para transformar a vida de cada animal resgatado.
                    Nosso objetivo é construir uma sociedade mais empática e solidária, oferecendo a cada animal a chance de um lar seguro e cheio de amor.
                </p>
            </section>

            <h2>Missão, Visão e Valores</h2>
            <section class="mvv">
                <article class="box-missao">
                    <h3>Missão</h3>
                    <p>Proteger e promover o bem-estar de animais em situação de vulnerabilidade, oferecendo resgate, cuidado, tratamento e encaminhamento para adoção responsável.</p>
                </article>
                <article class="box-visao">
                    <h3>Visão</h3>
                    <p>Ser referência na proteção animal, contribuindo para uma sociedade mais consciente, empática e comprometida com a vida de todos os animais.</p>
                </article>
                <article class="box-valores">
                    <h3>Valores</h3>
                    <ul>
                        <li>Respeito e cuidado com todos os seres vivos.</li>
                        <li>Transparência e ética em nossas ações.</li>
                        <li>Empatia e solidariedade.</li>
                        <li>Educação e conscientização sobre adoção responsável.</li>
                    </ul>
                </article>
            </section>

            <section class="como-ajudar">
                <h2>Como Ajudar?</h2>
                <div class="cards-container">
                    <div class="card"><img src="imagens/como-ajudar/doacao.jpg" alt="Doações financeiras"><p>Doações financeiras</p></div>
                    <div class="card"><img src="imagens/como-ajudar/racao.jpg" alt="Doações de rações e materiais"><p>Doações de rações e materiais</p></div>
                    <div class="card"><img src="imagens/como-ajudar/voluntario.jpg" alt="Trabalho voluntário"><p>Trabalho voluntário</p></div>
                    <div class="card"><img src="imagens/como-ajudar/adocao.jpg" alt="Adoção"><p>Adoção</p></div>
                    <div class="card"><img src="imagens/como-ajudar/lar-temporario.jpg" alt="Lar temporário"><p>Lar temporário</p></div>
                </div>
                <a class="cta-cadastro" href="#" data-page="cadastro">Clique aqui para se cadastrar</a>
            </section>

            <section class="contatos">
                <h2>Contatos</h2>
                <p class="contatos-intro">Queremos ouvir você! Seja para tirar dúvidas, enviar sugestões ou conhecer melhor o trabalho do Amor de 4 Patas, estamos à disposição para ajudar.</p>
                <div class="contatos-container">
                    <div class="contato-card"><h3>Fale Conosco</h3><p>Entre em contato com nossa equipe para dúvidas e informações gerais.</p><p>E-mail: <strong>contato@amorde4patas.org</strong></p></div>
                    <div class="contato-card"><h3>Telefones</h3><ul><li>Telefone: (00) 1234-5678</li><li>WhatsApp: (00) 91234-5678</li></ul></div>
                    <div class="contato-card"><h3>Endereço</h3><p>Rua dos Animais Felizes, 123<br>Cidade — Estado</p></div>
                </div>
            </section>
        </div>
    `,
    projetos: `
        <h1 class="header-title">Nossos Projetos</h1>
        <img src="imagens/projetos/projetos-desktop.jpg" alt="Projetos" class="img-fundo">
        <div class="principal">
            <section class="projetos">
                <h2>Projetos</h2>
                <div class="lista-projetos">
                    <article class="card-projeto"><span class="icon"></span><h3>Resgate</h3><p>Realizamos buscas e atendimentos a animais abandonados, feridos ou vítimas de maus-tratos.</p></article>
                    <article class="card-projeto"><span class="icon"></span><h3>Atendimento Veterinário</h3><p>Após o resgate, os animais recebem avaliação clínica, tratamento médico e vacinação através de profissionais parceiros.</p></article>
                    <article class="card-projeto"><span class="icon"></span><h3>Castração</h3><p>Promovemos mutirões gratuitos ou acessíveis, ajudando a reduzir o abandono e melhorar a qualidade de vida dos animais.</p></article>
                    <article class="card-projeto"><span class="icon"></span><h3>Lar Temporário</h3><p>Voluntários oferecem abrigo provisório para animais em recuperação até que encontrem um lar definitivo.</p></article>
                    <article class="card-projeto"><span class="icon"></span><h3>Feiras de Adoção</h3><p>Eventos em locais públicos para conectar animais disponíveis a famílias que desejam adotar com responsabilidade.</p></article>
                    <article class="card-projeto"><span class="icon"></span><h3>Educação e Conscientização</h3><p>Ações em escolas, empresas e redes sociais sobre posse responsável, bem-estar animal e adoção consciente.</p></article>
                </div>
            </section>

            <h2 class="depoimentos-title">Depoimentos</h2>
            <section class="depoimentos">
                <details class="card-depoimento"><summary><div class="emoji">🐶</div><h3>Juliana</h3><blockquote><p>“Adotar o Max foi a melhor decisão da minha vida.”</p></blockquote><p class="autor">– Juliana, adotante</p></summary><div class="texto-completo">Conheci a ONG Amor de 4 Patas em uma feira de adoção. Hoje ele é meu companheiro inseparável.</div></details>
                <details class="card-depoimento"><summary><div class="emoji">🐾</div><h3>Dr. Rafael</h3><blockquote><p>“A parceria com a ONG transforma vidas.”</p></blockquote><p class="autor">– Dr. Rafael, veterinário</p></summary><div class="texto-completo">Trabalhar com a equipe da ONG é inspirador e essencial para a saúde pública e bem-estar animal.</div></details>
                <details class="card-depoimento"><summary><div class="emoji">🐕</div><h3>Carla</h3><blockquote><p>“Ser lar temporário me ensinou empatia.”</p></blockquote><p class="autor">– Carla, voluntária</p></summary><div class="texto-completo">Já acolhi cinco animais em casa, oferecendo conforto até que encontrassem família.</div></details>
            </section>
        </div>
    `,
    cadastro: `
        <h1 class="header-title">Faça Parte do Amor de 4 Patas</h1>
        <img src="imagens/cadastro/cadastro-desktop.jpg" alt="Cadastro" class="img-fundo">
        <div class="principal">
            <section>
                <h2 class="form-titulo">Junte-se a nós!</h2>
                <p class="form-sub">Preencha o formulário abaixo e faça parte da nossa equipe de voluntários.</p>
            </section>
            <section>
                <h2>Formulário de Cadastro</h2>
                <form id="form-cadastro" action="https://formspree.io/f/xpwykown" method="POST">
                    <!-- Campos simplificados para exemplo -->
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" name="nome" required>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
    `
};

// CARREGAR PÁGINA
function loadPage(page) {
    main.innerHTML = templates[page] || "<p>Página não encontrada</p>";

    // Atualiza menu ativo
    document.querySelectorAll(".btn-nav").forEach(btn => {
        btn.classList.remove("ativo");
        if(btn.dataset.page === page) btn.classList.add("ativo");
    });

    // Inicializa scripts dependentes do template
    initDepoimentos();
    initCardsScroll();
    initFormValidation();
}

// DEPOIMENTOS (accordion)
function initDepoimentos() {
    const cards = document.querySelectorAll(".card-depoimento");
    cards.forEach(card => {
        const summary = card.querySelector("summary");

        summary.addEventListener("click", e => {
            e.preventDefault();
            const isExpanded = card.classList.contains("expanded");

            // Fecha todos
            cards.forEach(c => {
                c.classList.remove("expanded");
                c.removeAttribute("open");
            });

            // Abre o clicado
            if(!isExpanded){
                card.classList.add("expanded");
                card.setAttribute("open","");
            }
        });
    });
}

// CARDS HORIZONTAL
function initCardsScroll() {
    const containers = document.querySelectorAll(".cards-container");
    containers.forEach(container => {
        container.addEventListener("wheel", e => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
    });
}

// VALIDAÇÃO FORMULÁRIO (placeholder)
function initFormValidation() {
    const form = document.getElementById("form-cadastro");
    if(!form) return;

    form.addEventListener("submit", e => {
        // Aqui você pode colocar validações extras
        // Exemplo: verificar se campos obrigatórios estão preenchidos
        console.log("Formulário enviado!");
    });
}

// EVENTOS DE MENU
document.querySelectorAll(".btn-nav").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        loadPage(btn.dataset.page);
        window.scrollTo(0,0);
    });
});

// CARREGA HOME POR PADRÃO
loadPage("home");
