"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import BaseComponent from "@/Components/BaseComponent";
import EmployeePage from "@/Components/InfoPerson";


const App = () => {
  

  return (
    <BaseComponent>
        <EmployeePage></EmployeePage>
    </BaseComponent>
  );
};
export default App;
