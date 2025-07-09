// @ts-check - Ativa verificação de tipos no JavaScript
const { test, expect } = require('@playwright/test');

// Importa as classes das páginas estruturadas pelo padrão Page Object
const { AmazonHomePage } = require("../pages/homePageAmazon");
const { ProductPage } = require("../pages/ProductPageAmazon");
const { CartPage } = require("../pages/CartPageAmazon");

// Instancia os objetos das páginas para reutilização nos testes
const HomePage = new AmazonHomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

////////////////////////////////////////////////////////////
// Teste 1: Adiciona um produto ao carrinho
////////////////////////////////////////////////////////////
test('Add Product to Cart', async ({ page }) => {
  // Torna a instância do page global novamente
  global.page = page;

  // Etapa 1: Acessa a página principal da Amazon
  await test.step('Navigate to the main screen of amazon.com', async () => {
    await HomePage.navegatTo();
  });

  // Etapa 2: Valida se a tela principal foi carregada corretamente
  await test.step('Main screen of Amazon is displayed', async () => {
    await HomePage.validateHomePage();
  });

  // Etapa 3: Clica na caixa do produto nos resultados da busca para acessar a página do produto
  await test.step(`Access the  ${HomePage.ObjectsPage.ProductTarget}  product page.`, async () => {
    await HomePage.clickBoxResultAfterSearch(HomePage.ObjectsPage.ProductTarget);
  });

  // Etapa 4: Valida se a página do produto foi carregada corretamente e adiciona ao carrinho
  await test.step(`Validate the product page.`, async () => {
    const descProduct = "Uma sociedade secreta, traiçoeira e liderada por famílias ricas e influentes assombra os cidadãos de Gotham City [...]"; 
    await productPage.validateProductPage(HomePage.ObjectsPage.ProductTarget, descProduct);
    //await productPage.clickAddCart(); // Clica para adicionar o produto ao carrinho
  });

  // Etapa 5: Valida se o produto aparece corretamente no carrinho
  // await test.step(`Validate the product in the cart.`, async () => {
  //   await cartPage.validateFirstCart(); // Validação geral do carrinho
  //   await cartPage.validateSecondCart(HomePage.ObjectsPage.ProductTarget); // Valida se o produto específico está no carrinho
  // });
});
