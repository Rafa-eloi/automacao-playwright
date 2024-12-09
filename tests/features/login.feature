Feature: Login

    Scenario: Login Válido
        Given Eu estou na página de Login
        When Eu digito nome e senha corretamente
        Then Faço login com sucesso