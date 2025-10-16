# 🧮 Calculadora de Média Escolar

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)

Um script simples, executado no navegador, que calcula a média de notas de um aluno e determina se ele foi aprovado ou reprovado com base na média e na presença. O projeto foi desenvolvido para praticar conceitos fundamentais de JavaScript, como variáveis, entrada de dados, validação, operadores e condicionais.

---

### ✨ Demonstração

Toda a interação com o script ocorre através de caixas de diálogo (`prompt` e `alert`) do navegador.

<p align="center">
  <a href="https://m-dia-escolar.vercel.app/"><strong>Acesse a demonstração »</strong></a>
</p>

---

### 📋 Índice

* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades](#-funcionalidades)
* [Regras de Negócio](#-regras-de-negócio)
* [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [Como Executar o Projeto](#-como-executar-o-projeto)
* [Autor](#-autor)

---

## 📖 Sobre o Projeto

Este projeto consiste em uma página HTML que carrega um script em JavaScript. O script interage com o usuário através de uma série de `prompts` para coletar informações como nome do aluno, matérias, notas e frequência. Após coletar e validar os dados, ele calcula a média das notas e aplica uma regra de negócio para determinar o status de aprovação do aluno, exibindo o resultado final em um `alert`.

---

## ⚙️ Funcionalidades

-   **🗣️ Interação com o Usuário:** Coleta de dados através de `prompt`.
-   **✔️ Validação de Dados:** Verifica se o nome tem mais de 5 caracteres, se as notas estão entre 0 e 10 e se a presença é um número positivo.
-   **➗ Cálculo de Média:** Calcula a média aritmética de três notas inseridas.
-   **⚖️ Lógica de Aprovação:** Utiliza uma estrutura condicional (`if/else`) para verificar se o aluno atende aos critérios de aprovação.
-   **📢 Exibição do Resultado:** Mostra o resultado final (nome, média, presença e status) em um `alert` para o usuário.

---
## 📜 Regras de Negócio

Para ser considerado **APROVADO**, o aluno precisa atender a **ambos** os critérios abaixo:

1.  A **média das notas** deve ser **maior ou igual a 8**.
2.  A **presença** deve ser **maior ou igual a 6**.

Se um ou ambos os critérios não forem atendidos, o aluno será considerado **REPROVADO**.

---

## 🛠️ Tecnologias Utilizadas

* **HTML**: Para a estrutura básica da página que carrega o script.
* **JavaScript**: Para toda a lógica de interação, cálculo e validação.

---

## 🚀 Como Executar o Projeto

Este projeto não necessita de nenhuma instalação, apenas de um navegador web.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd NOME-DO-SEU-REPOSITORIO
    ```

3.  **Abra o arquivo no navegador:**
    Abra o arquivo `index.html` diretamente no seu navegador. O script começará a ser executado automaticamente, exibindo as caixas de diálogo.

---

## 📝 Licença

Este projeto é apenas para fins educacionais.

---

Desenvolvido por Renato Nascimento

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-renatonascimento/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:renatonascimento2001@gmail.com)
