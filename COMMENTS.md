# Comentários sobre as Bibliotecas e Arquitetura do Projeto

## Testando o projeto
https://www.youtube.com/watch?v=DNQP9uZToHs

## Frontend (React)
- **React**: Biblioteca para construção de interfaces de usuário.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições.

## Backend (Node.js)
- **Express**: Framework web rápido e minimalista para Node.js.
- **MongoDB**: Driver oficial para Node.js para trabalhar com MongoDB.
- **CORS**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Script Python
- **wave**: Biblioteca padrão para manipulação de arquivos WAV.
- **pydub**: Biblioteca para manipulação de áudio.
- **google-cloud-storage**: Cliente Python para Google Cloud Storage.
- **google-cloud-speech**: Cliente Python para Google Cloud Speech-to-Text API.
- **google-cloud-vision**: Cliente Python para Google Cloud Vision API.
- **google-oauth**: Biblioteca para autenticação com credenciais de serviço do Google.
- **pymongo**: Driver Python para MongoDB.
- **fitz (PyMuPDF)**: Biblioteca para manipulação de documentos PDF.

## Arquitetura do Projeto

### Frontend (React)
O frontend do projeto é desenvolvido em React, um popular framework JavaScript para construção de interfaces de usuário. A comunicação com o backend é realizada via requisições HTTP usando Axios.

### Backend (Node.js)
O backend é construído usando Node.js com o framework Express. Ele gerencia as operações CRUD (Create, Read, Update, Delete) com um banco de dados MongoDB, bem como um endpoint para processamento de perguntas. O backend está configurado para permitir requisições de origem cruzada (CORS).

### Serviços de Nuvem (Google Cloud)
O projeto utiliza vários serviços da Google Cloud Platform (GCP):
- **Google Cloud Storage**: Para armazenamento de arquivos.
- **Google Cloud Speech-to-Text API**: Para transcrição de áudio.
- **Google Cloud Vision API**: Para análise de imagens.

### Banco de Dados (MongoDB)
O MongoDB é usado como banco de dados para armazenar dados persistentes, como perguntas e respostas. O acesso ao MongoDB é realizado tanto pelo backend em Node.js quanto pelo script em Python.

### Script Python
O script Python é utilizado para processar arquivos de áudio e PDF, e interagir com as APIs do Google Cloud para transcrição de áudio e análise de imagens. Ele também se comunica com o MongoDB para armazenar ou recuperar dados.

### Melhorias do projeto
Subir para uma máquina virtual e gerar um link que acesse em qualquer navegador 

### Para rodar o front e o back abra o cmd da pastinha do projeto e execute os seguintes comandos
node index.js (back)
cd front\todoapp (front)

### Possíveis perguntas do projeto
- "Quais são os elementos principais de uma página HTML5?";
- "Quais tags compõem a estrutura básica de uma página HTML5?";
- "Como é feita a formatação de texto em HTML5?";
- "Quais tags são recomendadas para formatação de texto em HTML5?";
- "Como criar listas em uma página HTML5?";
- "Quais tags são usadas para criar listas em HTML5?";
- "Como criar tabelas em HTML5?";
- "Quais são as tags principais para criar tabelas em HTML5?";
- "Para que serve a instrução <!DOCTYPE html> em uma página HTML5?";
- "Para que serve a tag < nav > em HTML5?";
- "Como utilizar a tag < nav > em uma página HTML5?";
- "Qual a função da tag < section > em HTML5?";
- "Como utilizar a tag < section > em uma página HTML5?";
- "Para que serve a tag < article > em HTML5?";
- "Como utilizar a tag < article > em uma página HTML5?";
- "Qual a função da tag < h2 > em HTML5?";
- "Como utilizar a tag < h2 > em uma página HTML5?";
- "Como usar a tag < pre > em HTML5?";
- "Para que serve a tag < pre > em HTML5?";
- "Como criar âncoras em HTML5?";
- "Qual a função das âncoras em HTML5?";
- "Para que serve a tag < title > em HTML5?";
- "Qual a função da tag < title > em uma página HTML5?";
- "Para que serve a tag < header > em HTML5?";
- "Qual a função do header em uma página HTML5?";
- "O que colocar no < header > de uma página HTML5?";
- "Quais informações devem estar no < header > em HTML5?";
- "Para que serve a tag < footer > em HTML5?";
- "Qual a função do footer em uma página HTML5?";
- "O que colocar no < footer > de uma página HTML5?";
- "Quais informações devem estar no <footer> em HTML5?"

