// Importa o método 'expect' do Playwright para fazer asserções nos testes
const { expect } = require('@playwright/test');

// Define a classe responsável por interagir com a página do carrinho da Amazon
class CartPage {
    constructor() {
        // Mapeia os seletores dos elementos usados na página do carrinho
        this.ObjectsPage = {
            "CarTitle": '[id="NATC_SMART_WAGON_CONF_MSG_SUCCESS"]', // Mensagem de confirmação de produto adicionado
            "closeBuy": '[id="sc-buy-box-ptc-button"] [class="sc-with-multicart"]', // Botão de finalizar compra (compra rápida)
            "goToCart": '[data-csa-c-content-id="sw-gtc_CONTENT"]', // Botão "Ir para o carrinho"
            "ProductTitle": '[data-a-max-rows="2"] [class="a-truncate-full a-offscreen"]', // Título do produto listado no carrinho
        }
    }

    // Retorna o elemento de título de confirmação do carrinho, após garantir que está visível
    async getcartTitle() {
        let CarTitle = await page.locator(this.ObjectsPage.CarTitle);
        await CarTitle.waitFor('visible');
        return CarTitle;
    }

    // Retorna o botão de finalizar compra, após garantir que está visível
    async getcloseBuy() {
        let closeBuy = await page.locator(this.ObjectsPage.closeBuy);
        await closeBuy.waitFor('visible');
        return closeBuy;
    }

    // Retorna o botão "Ir para o carrinho", após garantir que está visível
    async getgoToCart() {
        let goToCart = await page.locator(this.ObjectsPage.goToCart);
        await goToCart.waitFor('visible');
        return goToCart;
    }

    // Retorna o título do primeiro produto no carrinho (caso tenha múltiplos)
    async getProductTitle() {
        let ProductTitle = await page.locator(this.ObjectsPage.ProductTitle).first();
        await ProductTitle.waitFor('visible');
        return ProductTitle;
    }

    // Clica no botão "Ir para o carrinho"
    async clickGotoCart() {
        let goToCart = await this.getgoToCart();
        await goToCart.click();
    }

    // Valida se os elementos principais do carrinho estão presentes com os textos esperados
    async validateFirstCart() {
        let cartTitle = await this.getcartTitle();
        let closeBuy = await this.getcloseBuy();
        let goToCart = await this.getgoToCart();

        // Verifica se as mensagens/textos estão de acordo com o esperado
        await expect(cartTitle).toContainText("Adicionado ao carrinho");
        await expect(closeBuy).toContainText("Finalizar carrinho da Amazon");
        await expect(goToCart).toContainText("Ir para o carrinho");
    }

    // Valida se o produto correto aparece no carrinho após clicar para acessá-lo
    async validateSecondCart(ProducName) {
        await this.clickGotoCart(); // Vai até a tela do carrinho
        let producTitle = await this.getProductTitle();

        // Verifica se o título do produto no carrinho contém o nome esperado
        await expect(producTitle).toContainText(ProducName);
    }
}

// Exporta a classe para ser usada em outros arquivos (como os testes)
module.exports = { CartPage: CartPage };
