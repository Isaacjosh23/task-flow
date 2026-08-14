import Container from "./components/Container";
import Header from "./components/Header";
import TodoForm from "./components/todo-form";

function App() {
  return (
    <Container>
      <Header />

      <div className="mt-[3.2rem]">
        <TodoForm />
      </div>
    </Container>
  );
}

export default App;
