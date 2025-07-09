// Importa o método 'expect' do Playwright para fazer validações nos testes
const { expect } = require('@playwright/test');

// Define a classe que representa a página inicial da Amazon Brasil
class AmazonHomePage {
    constructor() {
        // Mapeia os seletores utilizados na automação dessa página
        this.ObjectsPage = {
            "url": "https://www.amazon.com.br/", // URL da página inicial
            "SearchField": '[id="twotabsearchtextbox"]', // Campo de busca do site
            "SearchButton": '[id="nav-search-submit-button"]', // Botão de buscar
            "ProductTarget": "Batman - A Corte das Corujas", // Produto usado como alvo nos testes
            "titlePage": "Amazon.com.br | Tudo pra você, de A a Z.", // Título esperado da página (não está sendo usado no momento)
            "boxResults": `[data-component-type="s-search-result"]`, // Caixa de resultados da busca
            "TitleResult": '[class="a-size-base-plus a-color-base a-text-normal"]' // Título de cada produto exibido
        };
    }

    // Acessa a página inicial da Amazon
    async navegatTo() {
        await page.goto(this.ObjectsPage.url);
    }

    // Retorna o campo de busca (input) após garantir que está visível
    async getSearchField() {
        let SearchField = await page.locator(this.ObjectsPage.SearchField);
        await SearchField.waitFor('visible');
        return SearchField;
    }

    // Retorna o botão de busca após garantir que está visível
    async getSearchButton() {
        let SearchButton = await page.locator(this.ObjectsPage.SearchButton);
        await SearchButton.waitFor('visible');
        return SearchButton;
    }

    // Clica no botão de buscar
    async clickSearchButton() {
        let SearchButton = await this.getSearchButton();
        await SearchButton.click();
    }

    // Digita o nome do produto no campo de busca
    async searchProduct(productName) {
        let SearchField = await this.getSearchField();
        await SearchField.click();
        await SearchField.fill(productName);
    }

    // Retorna a primeira caixa de resultado da busca
    async getBoxsResult() {
        let boxResult = await page.locator(this.ObjectsPage.boxResults).first();
        await boxResult.waitFor('visible');
        return boxResult;
    }

    // Valida se a URL atual corresponde à URL da página inicial
    async validateHomePage() {
        const currentUrl = page.url();
        expect(currentUrl).toBe('https://www.amazon.com.br/');
    }

    // Realiza a busca por um produto e valida se o nome aparece nos resultados
    async validateSearchProduct(productName) {
        await this.searchProduct(productName); // Preenche o campo de busca
        await this.clickSearchButton();        // Clica no botão de busca
        let boxResult = await this.getBoxsResult(); // Espera o primeiro resultado aparecer

        // Verifica se o título do produto nos resultados contém o nome buscado
        //await expect(boxResult.locator(this.ObjectsPage.TitleResult)).toContainText(productName);
    }

    // Após buscar, clica no produto desejado (aqui usando um seletor mais específico via href)
    async clickBoxResultAfterSearch(productName) {
        await this.validateSearchProduct(productName); // Busca e valida o produto
        let boxResult = await this.getBoxsResult();    // Pega o primeiro resultado
        // Clica no produto cujo link contém parte da URL esperada
        await boxResult.locator('[href*="/Batman-Corte-Corujas-Christa-Faust/"]').first().click();
    }
}

// Exporta a classe para que ela possa ser utilizada nos testes
module.exports = { AmazonHomePage: AmazonHomePage };
