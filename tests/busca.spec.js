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
// Teste 1: Busca por um produto na Amazon
////////////////////////////////////////////////////////////
test(`Search for product`, async ({ page }) => {
  // Torna a instância do page global (não recomendado para todos os projetos, mas funciona para testes isolados)
  global.page = page;

  // Etapa 1: Acessa a página principal da Amazon
  await test.step('Navigate to the main screen of amazon.com', async () => {
    await HomePage.navegatTo();
  });

  // Etapa 2: Valida se a tela principal foi carregada corretamente
  await test.step('Main screen of Amazon is displayed', async () => {
    await HomePage.validateHomePage();
  });

  // Etapa 3: Realiza a busca pelo produto desejado
  await test.step(`Search for the product  ${HomePage.ObjectsPage.ProductTarget}`, async () => {
    await HomePage.validateSearchProduct(HomePage.ObjectsPage.ProductTarget);
  });

  // Etapa 4: Valida se o produto foi encontrado nos resultados
  await test.step(`Validate the found product`, async () => {
    await HomePage.validateSearchProduct(HomePage.ObjectsPage.ProductTarget);
  });
});
