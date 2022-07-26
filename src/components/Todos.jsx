import styles from "./Todos.module.css";
import { PlusCircle, Trash } from "phosphor-react";
export function Todos() {
  function handleEventChange() {
    console.log(event.target.value);
  }

  return (
    <section className={styles.todos}>
      <div className={styles.textAreaDiv}>
        <textarea
          name=""
          placeholder="Adicione uma nova tarefa"
          onChange={handleEventChange}
        ></textarea>
        <div className={styles.buttonDiv}>
          <button type="submit">
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
      <div className={styles.listOfTodos}>
        <input type="checkbox" name="" id="" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <a href="">
          <Trash size={22} />
        </a>
      </div>
    </section>
  );
}
