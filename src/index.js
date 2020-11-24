import React,{memo} from 'react';
import ReactDOM from 'react-dom';
import {useInputValue, useTodos} from './test-hooks';
import Layout from './components/Layout';
import Wrapper from './components/Wrapper';
import ListContainer from './components/ListContainer';
import './index.css';
import reportWebVitals from './reportWebVitals';


const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <Wrapper
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <ListContainer
        items={todos}
        onItemCheck={(index) => checkTodo(index)}
        onItemRemove={(index) => removeTodo(index)}
      />
    </Layout>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);

reportWebVitals();
