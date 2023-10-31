"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import FormHospital from "@/Components/FormHospital";
import TablaHospital from "@/Components/ListHospitals";
import BaseComponent from "@/Components/BaseComponent";
import FormTask from "@/Components/TaskForm";
import TablaTareas from "@/Components/TasksList";
import TaskList from "@/Components/TasksList";


const App = () => {
  

  return (
    <BaseComponent>
      <FormHospital></FormHospital>
      <TablaHospital></TablaHospital>
      <FormTask></FormTask>
      <TaskList></TaskList>
    </BaseComponent>
  );
};
export default App;
