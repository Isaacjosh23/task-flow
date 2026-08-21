import Container from "./components/Container";
import Header from "./components/Header";
import TaskProgress from "./components/TaskProgress";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  return (
    <Container>
      <Header />

      <div className="flex flex-col gap-8 mt-[3.2rem]">
        <TodoForm />

        <TodoList />

        <TaskProgress />
      </div>
    </Container>
  );
}

export default App;
