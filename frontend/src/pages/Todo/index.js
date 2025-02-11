import React from "react";
import TodoList from "../../components/TodoComponents/TodoList";
import TodoForm from "../../components/TodoComponents/TodoForm";
import TodoFilter from "../../components/TodoComponents/TodoFilter";
import DefaultLayout from "../../layouts/DefaultLayout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Counter from "../../components/TodoComponents/Counter";

const Todo = () => {
  return (
    <DefaultLayout>
      <Header />
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <Counter />
      <Footer />
    </DefaultLayout>
  );
};

export default Todo;
