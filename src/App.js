import { Container } from 'semantic-ui-react';
import './App.css';
import TodoForm from './app/features/TodoForm';
import TodoList from './app/features/TodoList';

function App() {
  return (
      <Container>
        <h1>Hello</h1>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </Container>
  );
}

export default App;
