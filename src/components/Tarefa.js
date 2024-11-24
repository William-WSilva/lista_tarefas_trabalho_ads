import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Importa o ícone de lixeira

const Tarefa = ({ tarefa, toggleTarefa, removerTarefa }) => {
  return (
    <div className="tarefa">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => toggleTarefa(tarefa.id)}
      />
      <span
        style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
      >
        {tarefa.nome}
      </span>
      <button
        className="btn-delete"
        onClick={() => removerTarefa(tarefa.id)}
        aria-label={`Remover ${tarefa.nome}`}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Tarefa;
