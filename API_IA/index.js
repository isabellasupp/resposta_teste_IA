const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING = 'mongodb+srv://teste2:teste2@cluster0.9pr7ozz.mongodb.net/?appName=Cluster0';
const DATABASE_NAME = "todoappdb";
let database;

MongoClient.connect(CONNECTION_STRING, (error, client) => {
    if (error) {
        console.error("MongoDB connection error:", error);
        return;
    }
    database = client.db(DATABASE_NAME);
    console.log("MongoDB Connection Successful");
});

app.listen(5038, () => {
    console.log('Server is running on port 5038');
});

// Adicionar uma nova pergunta
app.post('/api/questions', (req, res) => {
    const question = req.body;
    database.collection("questions").insertOne(question, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).send(result.ops[0]);
    });
});

// Obter todas as perguntas
app.get('/api/questions', (req, res) => {
    database.collection("questions").find({}).toArray((error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

// Deletar uma pergunta pelo ID
app.delete('/api/questions/:id', (req, res) => {
    const id = req.params.id;
    database.collection("questions").deleteOne({ id: id }, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send("Deleted Successfully");
    });
});

// Endpoint para responder perguntas
app.post('/api/ask', (req, res) => {
    const userQuestion = req.body.question;
    database.collection("questions").find({}).toArray((error, questions) => {
        if (error) {
            return res.status(500).send(error);
        }
        
        for (let question of questions) {
            for (let pattern of question.patterns) {
                if (userQuestion.toLowerCase().includes(pattern.toLowerCase())) {
                    return res.send(question.responses[0]);
                }
            }
        }
        res.send("Desculpe, não tenho uma resposta para essa pergunta.");
    });
});

