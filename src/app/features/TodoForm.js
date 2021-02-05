import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react'
import {addTodo} from '../../redux/reducers/todoReducer';

export default function TodoForm() {

    const dispatch = useDispatch()

    // state
    const [error, setError] = useState(null);
    const [todo, setTodo] = useState("");
    

    const addTodoHandler = () => {

        let trimmedUpTodo = todo.trim();

        if (trimmedUpTodo.length === 0){
            setError({
                content: 'Thats not going to work homie 😂',
                pointing: 'below',
            });
        }else{
            setError(null);
            dispatch(addTodo(trimmedUpTodo));
            setTodo("");
        }
    }

    return (
        <Form>
            <Form.Field
                id='form-input-control-error-todo'
                control={Input}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Title'
                value={todo}
                error={error ?? false}
            />
            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Submit'
                onClick={addTodoHandler}
            />
        </Form>
    )
}
