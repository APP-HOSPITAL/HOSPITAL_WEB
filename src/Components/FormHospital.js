import React, { useState } from 'react';
import axios from 'axios';

function FormHospital() {
  const [formData, setFormData] = useState({
    nameHospital: '',
    latitude: '',
    longitude: '',
    description: '',
    address: '',
    status: 'AC',
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
    // Aquí puedes enviar el objeto JSON (formData) al servidor o realizar otras acciones necesarias.
    console.log('Objeto JSON a enviar:', formData);
    axios.post("https://hospital.somee.com/api/inserthospital",formData).then(res=>{
        console.log(res.data)
    }).catch(err=>{
        console.err(err)
    })
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nameHospital" className="block text-sm font-medium text-gray-700">Nombre del Hospital:</label>
          <input
            type="text"
            id="nameHospital"
            name="nameHospital"
            value={formData.nameHospital}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">Latitud:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">Longitud:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default FormHospital;
