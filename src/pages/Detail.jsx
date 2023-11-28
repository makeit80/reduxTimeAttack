import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos)
  const target = todos.find((item) => item.id + '' === params.id)

  function onClickNavigateHandler () {
    navigate('/')
  }

  return (
    <>
      <section>
        <div>
          <span>titel : {target.title}</span>
          <p>contents : {target.contents}</p>
          <p>완료여부 : {target.isDone ? '완료' : '미완료'}</p>
        </div>
      </section>
      <button onClick={onClickNavigateHandler}>홈으로</button>
    </>

  );
};

export default Detail;
