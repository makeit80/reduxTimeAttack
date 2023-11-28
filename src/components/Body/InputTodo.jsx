import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { addTodo } from '../../redux/modules/todos';


function InputTodo() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({title : '', contents: ''})

    function onChangeHandler (e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value});
    }

    function inputVaildationCheck () {
        if (form.title === "") {
            alert('제목을 입력해주세요')
            return false;
        } else if (form.title.length > 10) {
            alert('10글자 내외로 작성해주세요')
            return false;
        } else if (form.contents === "") {
            alert('내용을 입력해주세요')
            return false;
        } else if (form.contents.length > 40) {
            alert('40자 이내로 작성해주세요')
            return false;
        } else {
            return true;
        }
    }

    function onSubmitHandler (e) {
        e.preventDefault();
        if (inputVaildationCheck()) {
            const data = {
                id: uuidv4(),
                title: form.title,
                contents: form.contents,
                isDone: false,
            }
            dispatch(addTodo(data))
            setForm({title : '', contents: ''})
        }
        }


  return (
    <StDiv>
        <StForm onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input 
            value={form.title}
            onChange={onChangeHandler}
            name='title'
            type='text'
            ></input>

            <label>Contents</label>
            <input 
            value={form.contents}
            onChange={onChangeHandler}
            name='contents'
            type='text'
            ></input>

            <button 
            type='submit'>
            추가
            </button>
        </StForm>
    </StDiv>
  )
}

const StDiv =styled.div`
width: 100vw;
height: 20vh;

background-color: #bcbcbc;
`

const StForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export default InputTodo