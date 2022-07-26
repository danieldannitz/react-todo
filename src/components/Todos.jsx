import styles from "./Todos.module.css";
import { PlusCircle } from "phosphor-react";
export function Todos() {
  return (
    <section className={styles.todos}>
      <div className={styles.textAreaDiv}>
        <textarea name="" placeholder="Adicione uma nova tarefa"></textarea>
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
    </section>
  );
}
