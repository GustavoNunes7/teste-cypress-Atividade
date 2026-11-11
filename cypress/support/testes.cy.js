
describe("Testes da página inicial", () => {

    beforeEach(() => {
        cy.visit("http://localhost:4173");
    });

    // TESTE 1: Verificar a página inicial
    it("Deve carregar a página corretamente", () => {
        cy.contains("Minha página de teste").should("be.visible");
        cy.contains("Bem-vindo ao meu site!").should("be.visible");
    });

    // TESTE 2: Verificar o botão
    it("Deve verificar o funcionamento do botão", () => {
        cy.get("#botao").click();

        cy.get("#resultado")
            .should("contain", "Botão funcionando!");
    });

    // TESTE 3: Verificar o link
    it("Deve acessar a seção Sobre", () => {
        cy.contains("Ir para Sobre").click();

        cy.get("#sobre").should("be.visible");
    });

    // TESTE 4: Verificar formulário vazio
    it("Deve mostrar erro ao enviar formulário vazio", () => {
        cy.get("#formulario button").click();

        cy.get("#mensagem")
            .should("contain", "Preencha todos os campos!");
    });

    // TESTE 5: Verificar envio correto
    it("Deve enviar o formulário preenchido", () => {
        cy.get("#nome").type("Gustavo");
        cy.get("#email").type("teste@email.com");

        cy.get("#formulario button").click();

        cy.get("#mensagem")
            .should("contain", "Formulário enviado com sucesso!");
    });

});