import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Todos />
    </div>
  );
}
