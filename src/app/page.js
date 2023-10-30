"use client"

import axios from 'axios';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';



export default function Home() {
  const [person,setPerson] = useState({})
  
  useEffect(() => {
    const id = localStorage.getItem("idemployee0000");
 
    axios.get(`https://hospital.somee.com/api/employee/${id}`).then((res) => {
      setPerson(res.data)
    });


  }, []); 

  
  
  
  return (
    <main className={styles.main}>
     <h1>{person.name}</h1>
    </main>
  )
}


