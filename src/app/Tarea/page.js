"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import BaseComponent from "@/Components/BaseComponent";
import FormTask from "@/Components/TaskForm";
import TaskList from "@/Components/TasksList";


const App = () => {
  

  return (
    <BaseComponent>
      <FormTask></FormTask>
      <TaskList></TaskList>
    </BaseComponent>
  );
};
export default App;
