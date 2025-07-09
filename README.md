# 🛒 Automação de Testes - Amazon com Playwright

Este projeto foi desenvolvido como estudo prático de automação de testes utilizando **Playwright** com **JavaScript**, aplicando o padrão **Page Object Model (POM)** para estruturar os testes de forma modular, reutilizável e de fácil manutenção.

O fluxo de testes simula a experiência de um usuário que:

1. Acessa o site da Amazon Brasil  
2. Realiza uma busca pelo livro **"Batman - A Corte das Corujas"**  
3. Valida os resultados da busca  
4. Acessa a página do produto e valida seus dados  
5. Adiciona o item ao carrinho  
6. Valida se o item foi corretamente adicionado  

---

## 📁 Estrutura do Projeto

├── tests
│ └── amazon.test.js # Arquivo principal com os testes automatizados
├── pages
│ ├── homePageAmazon.js # Page Object da home da Amazon
│ ├── ProductPageAmazon.js # Page Object da página do produto
│ └── CartPageAmazon.js # Page Object da página de carrinho
├── playwright.config.js # Configurações globais do Playwright
├── package.json # Dependências e scripts do projeto
└── README.md # Documentação do projeto


---

## 🚀 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- JavaScript (Node.js)
- Padrão **Page Object Model (POM)**
- VS Code com DevContainer (opcional)
- Git + GitHub

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo-playwright.git
cd seu-repo-playwright
```

2. Instale as dependências
```bash
npm install
```

3. Execute os testes
```bash
npx playwright test
```

4. Para ver os testes rodando no navegador (modo headed)
```bash
npx playwright test --headed
```

5. Para gerar e visualizar o relatório HTML
```bash
npx playwright show-report
```


✅ Funcionalidades Automatizadas
Abertura da página inicial da Amazon

- Validação de carregamento da home

- Busca por produto (usando "Batman - A Corte das Corujas")

- Validação do resultado da busca

- Acesso à página do produto

- Validação de nome, descrição e botões

- Adição ao carrinho e validação de inclusão


🔍 Diferenciais do Projeto
- Uso de Page Object Model: separa responsabilidades, facilita manutenções e reaproveitamento de código.

- Boas práticas de automação: uso de test.step() para melhor rastreabilidade.

- Código totalmente comentado: para fins de estudo e entendimento.

- Testes dinâmicos e realistas: simulando fluxos de navegação reais de usuário.


📷 Prints ou Gravações


👨‍💻 Autor
Rafael Pereira Eloi do Nascimento

