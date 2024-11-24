import React from 'react';
import Tarefa from './Tarefa';

const ListaDeTarefas = ({ tarefas, toggleTarefa, removerTarefa }) => {
  return (
    <div>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          toggleTarefa={toggleTarefa}
          removerTarefa={removerTarefa}
        />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
