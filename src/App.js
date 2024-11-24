import './App.css';
import React, { useState } from 'react';
import ListaDeTarefas from './components/ListaDeTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [novoTextoTarefa, setNovoTextoTarefa] = useState('');

  const adicionarTarefa = (nome) => {
    if (tarefas.some((tarefa) => tarefa.nome.toLowerCase() === nome.toLowerCase())) {
      alert('Tarefa já existe!');
      return;
    }
    const novaTarefa = {
      id: Date.now(),
      nome,
      concluida: false,
      indice: tarefas.length + 1,
    };
    setTarefas([novaTarefa, ...tarefas]);
  };

  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
  };

  const toggleTarefa = (id) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      <br/>
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novoTextoTarefa}
          onChange={(e) => setNovoTextoTarefa(e.target.value)}
        />
        <button
          onClick={() => {
            if (novoTextoTarefa.trim() !== '') {
              adicionarTarefa(novoTextoTarefa.trim());
              setNovoTextoTarefa('');
            }
          }}
        >
          Adicionar
        </button>
      </div>
      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
      </div>
      <br/>
      <div className="lista-tarefas">
        <ListaDeTarefas tarefas={tarefasFiltradas} toggleTarefa={toggleTarefa} removerTarefa={removerTarefa} />
      </div>
    </div>
  );
};

export default App;
