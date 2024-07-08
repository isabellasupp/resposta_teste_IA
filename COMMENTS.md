# Comentários sobre as Bibliotecas e Arquitetura do Projeto

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