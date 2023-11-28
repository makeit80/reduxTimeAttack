import React from "react";import styled from "styled-components";
import { useSelector } from 'react-redux'

import Header from "../components/Header/Header";
import InputTodo from "../components/Body/InputTodo";
import TodoList from "../components/Body/TodoList";
import Footer from "../components/Footer/Footer";

const Home = () => {
    const todos = useSelector((state) => state.todos)

  return (
  <div>
    <Header />
    <StBody>
      <InputTodo />
      <StDiv>
      {
        todos
        .filter((item) => !item.isDone)
        .map((item) => {
          return (
            <TodoList 
            id={item.id}
            title={item.title}
            contents={item.contents}
            isDone={item.isDone}
            />
          )
        })
      }
      </StDiv>
      <StDiv>
      {
        todos
        .filter((item) => item.isDone)
        .map((item) => {
          return (
            <TodoList 
            id={item.id}
            title={item.title}
            contents={item.contents}
            isDone={item.isDone}
            />
          )
        })
      }
      </StDiv>
    </StBody>
    <Footer />
  </div>
  )
};

const StBody = styled.body`
  
`
const StDiv = styled.div`
height: 30vh;
border: 2px solid gray;
`

export default Home;
