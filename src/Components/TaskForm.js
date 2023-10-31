"use client"
import React, { useState,useEffect } from 'react';
import axios from 'axios';

function FormTask() {
  const [idP,setIdPerson] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    endDate: '',
    status: 'AC',
    statusTask: 'AC',
    idEmployee: idP,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Objeto JSON a enviar:', formData);
    axios.post("https://hospital.somee.com/api/inserttask",
    ).then(res=>{
      console.log(res.date)
    }).catch(err=>{
      console.err(err)
    })
  };

  useEffect(()=>{
    const id = localStorage.getItem("idemployee0000");
    setIdPerson(id)
  },[])
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Formulario de Tarea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fecha de Finalización:</label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enviar</button>
      </form>
    </div>
  );
}

export default FormTask;
