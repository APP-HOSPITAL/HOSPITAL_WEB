"use client"
import { useState ,useEffect} from "react";
import axios from "axios"
import { Overpass_Mono } from "next/font/google";
import FormHospital from "@/Components/FormHospital";
import TablaHospital from "@/Components/ListHospitals";
import BaseComponent from "@/Components/BaseComponent";


const App = () => {
  

  return (
    <BaseComponent>
      <FormHospital></FormHospital>
      <TablaHospital></TablaHospital>
 
    </BaseComponent>
  );
};
export default App;
