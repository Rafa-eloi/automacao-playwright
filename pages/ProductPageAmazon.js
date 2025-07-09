// Importa o método 'expect' do Playwright para fazer validações nos testes
const { expect } = require('@playwright/test');

// Define a classe que representa a página de detalhes de um produto na Amazon
class ProductPage {
    constructor() {
        // Mapeia os seletores utilizados nesta página
        this.ObjectsPage = {
            ProductTitle: '#productTitle', // Título do produto
            ProductDesc: '#bookDescription_feature_div', // Descrição do produto (livro)
            ProductValue: '#price', // Preço do produto (não utilizado atualmente)
            addCartButton: '#wishlistButtonStack', // Botão "Adicionar ao carrinho"
            //BuyNow: '#buyNow', // Botão "Comprar agora"
        };
    }

    // Retorna o elemento do título do produto, garantindo que esteja visível
    async getTitleProduct() {
        let productName = await page.locator(this.ObjectsPage.ProductTitle);
        await productName.waitFor('visible');
        return productName;
    }

    // Retorna o elemento da descrição do produto
    async getDescProduct() {
        let productDesc = await page.locator(this.ObjectsPage.ProductDesc);
        await productDesc.waitFor('visible');
        return productDesc;
    }

    // Retorna o elemento que mostra o valor/preço do produto
    async getValueProduct() {
        let productValue = await page.locator(this.ObjectsPage.ProductValue);
        await productValue.waitFor('visible');
        return productValue;
    }

    // Retorna o botão "Adicionar ao carrinho"
    async getAddCart() {
        let addCartButton = await page.locator(this.ObjectsPage.addCartButton).first();
        await addCartButton.waitFor('visible');
        return addCartButton;
    }

    // Retorna o botão "Comprar agora"
    // async getBuyNow() {
    //     let buyNow = await page.locator(this.ObjectsPage.BuyNow);
    //     await buyNow.waitFor('visible');
    //     return buyNow;
    // }

    // Clica no botão "Adicionar ao carrinho"
    async clickAddCart() {
        let addCart = await this.getAddCart();
        await addCart.click();
    }

    // Valida os elementos principais da página do produto
    async validateProductPage(productName, productDesc) {
        // Aguarda e obtém os elementos de título e descrição
        let elementName = await this.getTitleProduct();
        let elementDesc = await this.getDescProduct();

        // Aguarda os botões de ação estarem visíveis
        let addCartButton = await this.getAddCart();
        //let buyNow = await this.getBuyNow();

        // Valida se o nome do produto corresponde ao esperado
        expect(elementName).toHaveText(productName);

        // Valida se a descrição do produto contém o conteúdo esperado
        //expect(elementDesc).toContainText(productDesc);

        // Valida os textos dos botões principais da página
        //expect(addCartButton).toContainText("Adicionar ao carrinho");
        //expect(buyNow).toContainText(" Comprar agora ");
    }
}

// Exporta a classe para ser utilizada nos testes automatizados
module.exports = { ProductPage };
