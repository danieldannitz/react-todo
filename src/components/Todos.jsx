import { useState } from "react";

import styles from "./Todos.module.css";

import { PlusCircle, Trash } from "phosphor-react";
import { motion } from "framer-motion";

export function Todos() {
  const [task, setTask] = useState(); //estado responsável por observar alterações
  const [newTask, setNewTask] = useState([]); //estado responsável por armazenar novas tasks

  function handleEventChange(event) {
    event.preventDefault();
    const watchValueChange = event.target.value;
    setTask(watchValueChange); //setTask observa a alteração da textarea
  }

  function handleCreateNewTask() {
    if (task !== "") {
      setNewTask([
        ...newTask,
        { content: task, completed: false, id: Date.now() },
      ]);
    }
    setTask("");
  }

  function handleDeleteToDo(id) {
    setNewTask([...newTask.filter((task) => task.id !== id)]);
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

      {newTask.map((todo) => (
        <motion.div
          animate={{
            y: 25,
          }}
          key={todo.id}
        >
          <div className={styles.listOfTodos}>
            <p>{todo.content}</p>
            <a href="#" onClick={() => handleDeleteToDo(todo.id)}>
              <Trash />
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

//{
/* <a href="" onClick={() => handleDeleteToDo(task.id)}>
<Trash />
</a> */
//}
