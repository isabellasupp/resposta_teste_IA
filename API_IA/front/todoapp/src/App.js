import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = async () => {
        try {
            const response = await axios.post('http://localhost:5038/api/ask', { question });
            setAnswer(response.data);
        } catch (error) {
            console.error("There was an error asking the question!", error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>+A Educação</h1>
            </header>
            <main className="App-main">
                <input 
                    type="text" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Digite sua pergunta sobre HTML5" 
                    className="App-input"
                />
                <button onClick={handleAsk} className="App-button">Perguntar</button>
                {answer && (
                    <div className="App-answer">
                        <h2>Resposta:</h2>
                        <p>{answer}</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
