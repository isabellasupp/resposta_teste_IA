const { MongoClient } = require('mongodb');

const CONNECTION_STRING = 'mongodb+srv://teste2:teste2@cluster0.9pr7ozz.mongodb.net/?appName=Cluster0';
const DATABASE_NAME = 'todoappdb';
const COLLECTION_NAME = 'questions';

const questions = [
    {
        "id": "estrutura_html5",
        "patterns": [
            "Quais são os elementos principais de uma página HTML5?",
            "Quais tags compõem a estrutura básica de uma página HTML5?"
        ],
        "responses": [
            "A estrutura básica de uma página HTML5 inclui as seguintes tags principais: <!DOCTYPE html>, <html>, <head>, <title>, <meta>, <link>, <body>, <section>, <header>, <article>, <aside>, <nav>, <footer>."
        ]
    },
    {
        "id": "formatacao_texto_html5",
        "patterns": [
            "Como é feita a formatação de texto em HTML5?",
            "Quais tags são recomendadas para formatação de texto em HTML5?"
        ],
        "responses": [
            "A formatação de texto em HTML5 é realizada utilizando propriedades CSS. As tags não recomendadas para formatação de texto são <font>, <center> e <big>. Em vez disso, deve-se usar CSS para estilizar o texto."
        ]
    },
    {
        "id": "criacao_listas_html5",
        "patterns": [
            "Como criar listas em uma página HTML5?",
            "Quais tags são usadas para criar listas em HTML5?"
        ],
        "responses": [
            "Em HTML5, listas podem ser criadas usando <ul> para listas não ordenadas e <ol> para listas ordenadas. Essas tags permitem organizar itens de forma estruturada."
        ]
    },
    {
        "id": "criacao_tabelas_html5",
        "patterns": [
            "Como criar tabelas em HTML5?",
            "Quais são as tags principais para criar tabelas em HTML5?"
        ],
        "responses": [
            "Tabelas em HTML5 são criadas usando as tags <table> para definir a tabela, <tr> para linhas e <td> para células dentro das linhas. Essas tags permitem organizar informações em formato tabular."
        ]
    },
    {
        "id": "elemento_doctype_html5",
        "patterns": [
            "Para que serve a instrução <!DOCTYPE html> em uma página HTML5?",
            "Qual a função da tag <!DOCTYPE html> em HTML5?"
        ],
        "responses": [
            "A instrução <!DOCTYPE html> informa ao navegador que estamos trabalhando com a versão 5 do HTML."
        ]
    },
    {
        "id": "tag_nav_html5",
        "patterns": [
            "Para que serve a tag <nav> em HTML5?",
            "Como utilizar a tag <nav> em uma página HTML5?"
        ],
        "responses": [
            "A tag <nav> é usada em HTML5 para definir uma área da página onde colocamos os principais links de navegação."
        ]
    },
    {
        "id": "tag_section_html5",
        "patterns": [
            "Qual a função da tag <section> em HTML5?",
            "Como utilizar a tag <section> em uma página HTML5?"
        ],
        "responses": [
            "A tag <section> é usada para definir uma área da página e podemos ter várias seções na mesma página."
        ]
    },
    {
        "id": "tag_article_html5",
        "patterns": [
            "Para que serve a tag <article> em HTML5?",
            "Como utilizar a tag <article> em uma página HTML5?"
        ],
        "responses": [
            "A tag <article> é usada para definir o conteúdo principal de uma seção, como artigos ou postagens de blog."
        ]
    },
    {
        "id": "tag_h2_html5",
        "patterns": [
            "Qual a função da tag <h2> em HTML5?",
            "Como utilizar a tag <h2> em uma página HTML5?"
        ],
        "responses": [
            "A tag <h2> é usada para definir títulos secundários, que são destacados na página com uma letra um pouco menor que a do título principal <h1>."
        ]
    },
    {
        "id": "tag_pre_html5",
        "patterns": [
            "Como usar a tag <pre> em HTML5?",
            "Para que serve a tag <pre> em HTML5?"
        ],
        "responses": [
            "A tag <pre> é usada para definir texto pré-formatado, o que significa que ela preserva espaços em branco, quebras de linha e outros caracteres de formatação como digitados no código fonte."
        ]
    },
    {
        "id": "ancoras_html5",
        "patterns": [
            "Como criar âncoras em HTML5?",
            "Qual a função das âncoras em HTML5?"
        ],
        "responses": [
            "Âncoras são usadas para criar links internos em uma página HTML, permitindo a navegação para diferentes partes da mesma página. Elas são definidas com a tag <a> e o atributo href, usando identificadores de elementos (ID) como destinos."
        ]
    },
    {
        "id": "titulo_pagina_html5",
        "patterns": [
            "Para que serve a tag <title> em HTML5?",
            "Qual a função da tag <title> em uma página HTML5?"
        ],
        "responses": [
            "A tag <title> define o título da página, que é exibido na barra de títulos do navegador."
        ]
    },
    {
        "id": "header_pagina_html5",
        "patterns": [
            "Para que serve a tag <header> em HTML5?",
            "Qual a função do header em uma página HTML5?",
            "O que colocar no <header> de uma página HTML5?",
            "Quais informações devem estar no <header> em HTML5?"
        ],
        "responses": [
            "A tag <header> contém informações que são apresentadas no topo da página. Geralmente possui dados da organização e os links mais gerais do site, como página inicial, mapa do site, etc."
        ]
    },
    {
        "id": "footer_pagina_html5",
        "patterns": [
            "Para que serve a tag <footer> em HTML5?",
            "Qual a função do footer em uma página HTML5?",
            "O que colocar no <footer> de uma página HTML5?",
            "Quais informações devem estar no <footer> em HTML5?"
        ],
        "responses": [
            "A tag <footer> contém informações que são apresentadas no rodapé da página. Normalmente tem dados de contato da organização ou alguma outra informação relevante."
        ]
    }
];

(async () => {
    const client = new MongoClient(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(DATABASE_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Remove any existing documents
        await collection.deleteMany({});

        // Insert new documents
        await collection.insertMany(questions);
        console.log('Questions inserted successfully');
    } catch (error) {
        console.error('Error inserting questions:', error);
    } finally {
        await client.close();
    }
})();
