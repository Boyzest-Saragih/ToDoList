import React, { useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoFilter from "../components/TodoFilter";
import DefaultLayout from "../layouts/DefaultLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
      <DefaultLayout>
        <Header/>
      <TodoForm/>
      <TodoFilter/>
      <TodoList/>
      <Footer/>
    </DefaultLayout>
  )
};

export default Home;
