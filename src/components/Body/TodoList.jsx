import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { switchTodo } from '../../redux/modules/todos';
import { deleteTodo } from '../../redux/modules/todos';
import { useNavigate } from 'react-router-dom';

function TodoList({ id, title, contents, isDone }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickSwitchHandler() {
        dispatch(switchTodo(id))
    }

    function onClickDeleteHandler() {
        dispatch(deleteTodo(id))
    }
    
    function onClickNavigateHandler () {
        navigate(`/detail/${id}`)
    }


    return (

        <StSection>
            <div>
                <span>Title : {title}</span>
                <p>Contents : {contents}</p>
            </div>
            <div>
                <Stbutton 
                onClick={onClickSwitchHandler}
                top={'80%'}
                right={'0%'}
                backgroundColor={'#686868333'}
                >
                {isDone ? '취소' : '완료'}
                </Stbutton>

                <Stbutton 
                onClick={onClickDeleteHandler}
                top={'0%'}
                right={'0%'}
                backgroundColor={'transparent'}
                >
                X
                </Stbutton>

                <Stbutton
                onClick={onClickNavigateHandler}
                top={'80%'}
                right={'89%'}
                backgroundColor={'#686868333'}
                >
                    상세보기
                </Stbutton>
            </div>
        </StSection>

    )
}

const StSection = styled.section`
    width: 70vw;
    height: 100px;
    border: 1px solid red;
    margin: 20px;

    position: relative;
`

const Stbutton = styled.button`
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    border: none;
    background-color: ${(props) => props.backgroundColor};
    width: 100px;
`

export default TodoList