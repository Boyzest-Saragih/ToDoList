import React from "react";
import TodoList from "../../components/TodoComponents/TodoList";
import TodoForm from "../../components/TodoComponents/TodoForm";
import TodoFilter from "../../components/TodoComponents/TodoFilter";
import DefaultLayout from "../../layouts/DefaultLayout";
import Header from "../../components/Bar/Header";
import Footer from "../../components/Bar/Footer";

const Todo = () => {
  return (
    <DefaultLayout>
      <Header />
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <Footer />
    </DefaultLayout>
  );
};

export default Todo;
