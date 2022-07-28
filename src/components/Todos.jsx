import styles from "./Todos.module.css";
import { PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";

export function Todos() {
  const [task, setTask] = useState(); //estado responsável por observar alterações
  const [newTask, setNewTask] = useState([]); //estado responsável por armazenar novas tasks

  function handleEventChange(event) {
    const watchValueChange = event.target.value;
    setTask(watchValueChange); //setTask observa a alteração da textarea
  }

  function handleCreateNewTask() {
    if (task !== "") {
      setNewTask([task, ...newTask]);
    }
    setTask("");
  }

  function handleDeleteToDo(index) {
    setNewTask([...newTask.filter((task) => task.index !== index)]);
  }

  return (
    <section className={styles.todos}>
      <div className={styles.textAreaDiv}>
        <textarea
          name="textarea"
          placeholder="Adicione uma nova tarefa"
          onChange={handleEventChange}
          value={task}
        ></textarea>
        <div className={styles.buttonDiv}>
          <button type="submit" onClick={handleCreateNewTask}>
            Criar
            <div>
              <PlusCircle size={18} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.tasksAreaDiv}>
        <div className={styles.createdTasksDiv}>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </div>
        <div className={styles.doneTasksDiv}>
          <p>Tarefas Concluídas</p>
          <span>0</span>
        </div>
      </div>
      {newTask.map((todo, index) => (
        <div className={styles.listOfTodos} key={index}>
          <p>{todo}</p>
          <a href="">
            <Trash onClick={() => handleDeleteToDo(index)} />
          </a>
        </div>
      ))}
    </section>
  );
}